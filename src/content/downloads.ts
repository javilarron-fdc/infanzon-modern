import type { DownloadAsset } from '../types/content';
import { withBase } from '../utils/basePath';

export const downloads: Record<'carta' | 'bodas' | 'comuniones' | 'empresa', DownloadAsset> = {
  carta: {
    key: 'carta',
    label: 'Descargar carta completa (PDF)',
    href: withBase('/downloads/carta.pdf'),
  },
  bodas: {
    key: 'bodas',
    label: 'Descargar dossier de bodas (PDF)',
    href: withBase('/downloads/bodas.pdf'),
  },
  comuniones: {
    key: 'comuniones',
    label: 'Descargar dossier de comuniones (PDF)',
    href: withBase('/downloads/comuniones.pdf'),
  },
  empresa: {
    key: 'empresa',
    label: 'Descargar menús de empresa (PDF)',
    href: withBase('/downloads/empresa.pdf'),
  },
};
