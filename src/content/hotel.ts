import type { PolicyNote, PriceItem, SectionBlock } from '../types/content';

export const hotelSections: SectionBlock[] = [
  {
    title: 'La casa de aldea',
    body: [
      'Hotel rural por habitaciones en la casa grande, con cinco habitaciones dobles y una especial para bodas.',
      'Suelos de castano, mobiliario familiar y distribucion tradicional conservada.',
      'Wifi y zonas comunes para descanso, lectura y reuniones pequenas.',
    ],
    imageKeys: ['puertahotel', 'portal'],
    sources: [{ file: 'hotel_utf8.html', section: 'descripcion principal' }],
  },
  {
    title: 'Entorno natural',
    body: [
      'Playas cercanas: La Nora y Estano.',
      'Opciones de ocio: rutas, bicicleta, caballo, golf y visitas culturales en Gijon.',
      'Ubicacion combinable con estancia de descanso o con eventos en la propia Quinta.',
    ],
    imageKeys: ['lanora', 'estano'],
    sources: [{ file: 'hotel_utf8.html', section: 'alrededores' }],
  },
];

export const hotelPrices: PriceItem[] = [
  { label: 'Temporada baja (1-2 habitaciones)', price: '75 EUR/noche', note: 'IVA y desayuno incluidos.' },
  { label: 'Temporada baja (3 habitaciones)', price: '70 EUR/noche' },
  { label: 'Temporada baja (4 habitaciones)', price: '65 EUR/noche' },
  { label: 'Temporada baja (+4 habitaciones)', price: '60 EUR/noche' },
  { label: 'Temporada alta (1 habitacion)', price: '85 EUR/noche' },
  { label: 'Temporada alta (3 habitaciones)', price: '80 EUR/noche' },
  { label: 'Temporada alta (4 habitaciones)', price: '75 EUR/noche' },
  { label: 'Temporada alta (+4 habitaciones)', price: '70 EUR/noche' },
  { label: 'Cama supletoria', price: '20 EUR/noche' },
  { label: 'Desayuno extra', price: '6 EUR/noche' },
];

export const hotelPolicies: PolicyNote[] = [
  {
    title: 'Condiciones de estancia',
    notes: [
      'Los precios pueden variar segun temporada y ocupacion.',
      'La casa se ofrece por habitaciones; no como alquiler vacacional completo estandar.',
      'La noche nupcial se vinculaba a bodas celebradas en la Quinta.',
    ],
    sources: [{ file: 'hotel_utf8.html', section: 'precios y notas' }],
  },
];
