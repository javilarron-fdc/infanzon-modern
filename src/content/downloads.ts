import type { DownloadAsset } from '../types/content';

export const downloads: Record<'carta' | 'bodas' | 'comuniones' | 'empresa', DownloadAsset> = {
  carta: {
    key: 'carta',
    label: 'Descargar carta completa (PDF)',
    href: '/downloads/carta.pdf',
  },
  bodas: {
    key: 'bodas',
    label: 'Descargar dossier de bodas (PDF)',
    href: '/downloads/bodas.pdf',
  },
  comuniones: {
    key: 'comuniones',
    label: 'Descargar dossier de comuniones (PDF)',
    href: '/downloads/comuniones.pdf',
  },
  empresa: {
    key: 'empresa',
    label: 'Descargar menús de empresa (PDF)',
    href: '/downloads/empresa.pdf',
  },
};
