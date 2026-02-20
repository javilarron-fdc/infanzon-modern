#!/usr/bin/env node
import fs from 'node:fs/promises';
import { existsSync, createReadStream } from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distRoot = path.join(projectRoot, 'dist');
const outputRoots = [path.join(projectRoot, 'public', 'downloads'), path.join(distRoot, 'downloads')];

const pdfTargets = [
  { route: '/print/carta/', output: 'carta.pdf', title: 'Carta completa' },
  { route: '/print/bodas/', output: 'bodas.pdf', title: 'Dossier de bodas' },
  { route: '/print/comuniones/', output: 'comuniones.pdf', title: 'Dossier de comuniones' },
  { route: '/print/empresa/', output: 'empresa.pdf', title: 'Menus de empresa' },
];

const mimeType = (filename) => {
  if (filename.endsWith('.html')) return 'text/html; charset=utf-8';
  if (filename.endsWith('.css')) return 'text/css; charset=utf-8';
  if (filename.endsWith('.js')) return 'application/javascript; charset=utf-8';
  if (filename.endsWith('.json')) return 'application/json; charset=utf-8';
  if (filename.endsWith('.svg')) return 'image/svg+xml';
  if (filename.endsWith('.png')) return 'image/png';
  if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) return 'image/jpeg';
  if (filename.endsWith('.gif')) return 'image/gif';
  if (filename.endsWith('.ico')) return 'image/x-icon';
  if (filename.endsWith('.pdf')) return 'application/pdf';
  return 'application/octet-stream';
};

const safeResolve = (urlPath) => {
  const withoutQuery = urlPath.split('?')[0];
  const decoded = decodeURIComponent(withoutQuery);
  const normalized = path.normalize(decoded).replace(/^\.\.(\/|\\|$)/, '');
  const relative = normalized.replace(/^[/\\]+/, '');
  const absolute = path.join(distRoot, relative);
  if (!absolute.startsWith(distRoot)) return null;
  return absolute;
};

const createStaticServer = (port) => {
  const server = http.createServer((req, res) => {
    const requested = req.url || '/';
    let absolute = safeResolve(requested);
    if (!absolute) {
      res.writeHead(400);
      res.end('Bad request');
      return;
    }

    if (requested.endsWith('/')) {
      absolute = path.join(absolute, 'index.html');
    }

    const tryFiles = [absolute, `${absolute}.html`, path.join(absolute, 'index.html')];
    const existing = tryFiles.find((candidate) => existsSync(candidate));

    if (!existing) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    res.writeHead(200, { 'Content-Type': mimeType(existing) });
    createReadStream(existing).pipe(res);
  });

  return new Promise((resolve) => {
    server.listen(port, '127.0.0.1', () => resolve(server));
  });
};

const wrapText = (text, width = 90) => {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';

  for (const word of words) {
    if ((`${current} ${word}`).trim().length > width) {
      if (current) lines.push(current.trim());
      current = word;
    } else {
      current = `${current} ${word}`;
    }
  }

  if (current.trim()) lines.push(current.trim());
  return lines;
};

const escapePdfText = (value) => value.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

const createFallbackPdfBuffer = (title, lines) => {
  const allLines = [title, '', ...lines];
  const linesPerPage = 44;
  const chunks = [];
  for (let index = 0; index < allLines.length; index += linesPerPage) {
    chunks.push(allLines.slice(index, index + linesPerPage));
  }
  if (chunks.length === 0) chunks.push([title]);

  const fontObjId = 3 + chunks.length * 2;
  const objects = new Map();
  objects.set(1, '1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj');
  objects.set(
    2,
    `2 0 obj << /Type /Pages /Kids [${chunks
      .map((_, idx) => `${3 + idx * 2} 0 R`)
      .join(' ')}] /Count ${chunks.length} >> endobj`,
  );

  chunks.forEach((chunk, idx) => {
    const pageObjId = 3 + idx * 2;
    const contentObjId = pageObjId + 1;
    const contentRows = ['BT', '/F1 11 Tf', '52 790 Td'];
    chunk.forEach((line, lineIndex) => {
      if (lineIndex > 0) contentRows.push('0 -16 Td');
      contentRows.push(`(${escapePdfText(line)}) Tj`);
    });
    contentRows.push('ET');
    const streamContent = `${contentRows.join('\n')}\n`;

    objects.set(
      pageObjId,
      `${pageObjId} 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents ${contentObjId} 0 R /Resources << /Font << /F1 ${fontObjId} 0 R >> >> >> endobj`,
    );
    objects.set(
      contentObjId,
      `${contentObjId} 0 obj << /Length ${Buffer.byteLength(streamContent)} >> stream\n${streamContent}endstream endobj`,
    );
  });
  objects.set(fontObjId, `${fontObjId} 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj`);

  let body = '%PDF-1.4\n';
  const offsets = [0];

  const maxObjectId = fontObjId;
  for (let objId = 1; objId <= maxObjectId; objId += 1) {
    const obj = objects.get(objId);
    if (!obj) continue;
    offsets.push(Buffer.byteLength(body));
    body += `${obj}\n`;
  }

  const xrefOffset = Buffer.byteLength(body);
  body += `xref\n0 ${maxObjectId + 1}\n`;
  body += '0000000000 65535 f \n';

  for (let i = 1; i <= maxObjectId; i += 1) {
    const offset = offsets[i] ?? 0;
    body += `${String(offset).padStart(10, '0')} 00000 n \n`;
  }

  body += `trailer << /Size ${maxObjectId + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return Buffer.from(body, 'utf8');
};

const getPrintPageText = async (route) => {
  const localFile = path.join(distRoot, route, 'index.html');
  const html = await fs.readFile(localFile, 'utf8');
  return html
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
};

const fallbackGenerate = async () => {
  for (const root of outputRoots) {
    await fs.mkdir(root, { recursive: true });
  }

  for (const target of pdfTargets) {
    const plain = await getPrintPageText(target.route.replace(/^\//, ''));
    const lines = wrapText(plain, 92);
    const buffer = createFallbackPdfBuffer(target.title, lines);
    for (const root of outputRoots) {
      const absolute = path.join(root, target.output);
      await fs.writeFile(absolute, buffer);
      console.log(`fallback PDF generado: ${absolute}`);
    }
  }
};

const generateWithPlaywright = async () => {
  const { chromium } = await import('playwright');
  const port = 4312;
  const server = await createStaticServer(port);
  for (const root of outputRoots) {
    await fs.mkdir(root, { recursive: true });
  }

  try {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    for (const target of pdfTargets) {
      const url = `http://127.0.0.1:${port}${target.route}`;
      await page.goto(url, { waitUntil: 'networkidle' });
      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: { top: '12mm', right: '12mm', bottom: '12mm', left: '12mm' },
      });
      for (const root of outputRoots) {
        await fs.writeFile(path.join(root, target.output), pdfBuffer);
      }
      console.log(`PDF generado: ${target.output}`);
    }

    await browser.close();
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
};

const main = async () => {
  if (!existsSync(distRoot)) {
    throw new Error('No existe dist/. Ejecuta primero npm run build.');
  }

  try {
    await generateWithPlaywright();
  } catch (error) {
    console.warn('No se pudo generar con Playwright. Se usa generacion PDF de respaldo.');
    console.warn(String(error?.message || error));
    await fallbackGenerate();
  }
};

await main();
