import type { HeroBlock, SectionBlock } from '../types/content';

export const homeHero: HeroBlock = {
  kicker: 'Infanzon · Cabuenes · Gijon',
  title: 'La Quinta del Ynfanzon',
  subtitle:
    'Casona asturiana con restaurante, terrazas, hotel rural, salones para eventos y gran finca con aparcamiento.',
  imageKey: 'heroExterior',
  ctaPrimary: { label: 'Ver Facebook (actualidad)', href: 'facebook' },
  ctaSecondary: { label: 'Llamar ahora', href: 'tel' },
  stats: [
    { label: 'Telefono', value: '985 337 898' },
    { label: 'Eventos', value: 'Bodas, comuniones, empresa' },
    { label: 'Entorno', value: 'Finca y jardines historicos' },
  ],
  sources: [
    { file: 'index.html', section: 'presentacion' },
    { file: 'index-2.html', section: 'oferta publica' },
  ],
};

export const homeSections: SectionBlock[] = [
  {
    title: 'Una casa con siglos de historia',
    body: [
      'La Quinta del Ynfanzon ha pasado de padres a hijos durante generaciones y conserva su caracter de casona asturiana.',
      'En el siglo XX evoluciono de residencia familiar a espacio publico de restauracion, hoteleria y celebraciones.',
      'El conjunto actual integra carta diaria, cafeteria-terrazas, hotel rural y salones para actos multitudinarios.',
    ],
    imageKeys: ['portal'],
    sources: [
      { file: 'index.html', section: 'historia de la casa' },
      { file: 'finca.html', section: 'descripcion general' },
    ],
  },
  {
    title: 'Que encontraras hoy',
    body: [
      'Restaurante de carta con cocina asturiana y menus de temporada.',
      'Cafeteria y terrazas abiertas casi todo el ano, segun calendario de eventos.',
      'Hotel rural por habitaciones, con opcion de reserva total por numero de estancias.',
      'Jardines, zona de juegos y aparcamiento amplio para eventos y visitas.',
    ],
    sources: [
      { file: 'index.html', section: 'consta de' },
      { file: 'terraza_utf8.html', section: 'funcionamiento de terraza' },
      { file: 'hotel_utf8.html', section: 'habitaciones y uso' },
    ],
  },
];
