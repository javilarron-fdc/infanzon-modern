import type { SectionBlock } from '../types/content';

export const fincaSections: SectionBlock[] = [
  {
    title: 'Jardines y aparcamiento',
    body: [
      'La finca combina arbolado historico, zona de paseo y vistas abiertas al entorno de Cabuenes.',
      'Aparcamiento amplio para restauracion, hotel y celebraciones.',
      'Zona infantil con columpios, campo y espacio para actividad al aire libre.',
    ],
    imageKeys: ['fincaGeneral', 'canaveral', 'melandro', 'columpio'],
    sources: [{ file: 'finca.html', section: 'descripcion' }],
  },
  {
    title: 'Viaje fotografico en el tiempo',
    body: [
      'Coleccion visual de la Quinta entre 1926 y 1962, conservada del archivo familiar.',
      'Las imagenes muestran fachadas, plazoletas y cambios de la casa principal.',
    ],
    imageKeys: ['plazoleta1926', 'salon1926', 'frente1952', 'camino1952', 'plazoleta1962', 'fachada1962'],
    sources: [{ file: 'finca.html', section: 'galeria historica' }],
  },
];
