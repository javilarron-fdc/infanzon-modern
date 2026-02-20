import type { EventPackage, PolicyNote } from '../types/content';

export const nocheviejaPackages: EventPackage[] = [
  {
    title: 'Cena y celebracion de Nochevieja',
    includes: [
      'Cena especial con ambiente de boda de invierno',
      'Espacio de fiesta posterior',
      'Entorno decorado en casona y salones',
    ],
    sources: [{ file: 'nochevieja.html', section: 'descripcion principal' }],
  },
];

export const nocheviejaNotes: PolicyNote[] = [
  {
    title: 'Disponibilidad anual',
    notes: [
      'Formato sujeto a confirmacion cada temporada.',
      'Consultar anuncio anual y reservas en Facebook.',
    ],
    sources: [{ file: 'nochevieja.html', section: 'mensaje de temporada' }],
  },
];
