import type { PolicyNote, SectionBlock } from '../types/content';

export const accesibilidadSections: SectionBlock[] = [
  {
    title: 'Accesibilidad de la finca',
    body: [
      'Durante las reformas se eliminaron barreras para facilitar el acceso a salones y terrazas.',
      'La finca cuenta con dos rampas principales para acceso rodado y desplazamiento interno.',
      'Se recomienda avisar con antelacion para preparar la mejor entrada segun necesidad.',
    ],
    imageKeys: ['rampaDelantera', 'rampaTrasera'],
    sources: [{ file: 'accesibilidad.html', section: 'rampas' }],
  },
];

export const accesibilidadNotes: PolicyNote[] = [
  {
    title: 'Apoyo personalizado',
    notes: [
      'El equipo puede indicar itinerario y punto de entrada segun movilidad.',
      'Confirmar por telefono antes de la visita para asegurar asistencia en llegada.',
    ],
    sources: [{ file: 'accesibilidad.html', section: 'mensaje principal' }],
  },
];
