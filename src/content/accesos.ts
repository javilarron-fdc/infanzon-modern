import type { PolicyNote, SectionBlock } from '../types/content';

export const accesosSections: SectionBlock[] = [
  {
    title: 'Como llegar',
    body: [
      'Acceso principal por Ctra. de Deva, numero 69 (Cabuenes, Gijon).',
      'Llegada sencilla desde los accesos de Gijon hacia Cabuenes y Deva.',
      'Hay entrada senalizada y aparcamiento dentro de la finca.',
    ],
    imageKeys: ['plano', 'entrada', 'planIcon'],
    sources: [{ file: 'accesos.html', section: 'indicaciones' }],
  },
];

export const accesosNotes: PolicyNote[] = [
  {
    title: 'Navegacion actual',
    notes: [
      'Para navegadores modernos, usar direccion completa y confirmar trafico antes de salir.',
      'Si hay evento grande, consultar por Facebook horarios y accesos recomendados.',
    ],
    sources: [{ file: 'accesos.html', section: 'notas' }],
  },
];
