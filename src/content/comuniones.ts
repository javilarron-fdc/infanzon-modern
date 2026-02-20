import type { EventPackage, PolicyNote } from '../types/content';

export const comunionPackages: EventPackage[] = [
  {
    title: 'Comunion n.o 1',
    price: '64,00 EUR + IVA',
    includes: [
      'Entremeses frios y calientes 1/4',
      'Lomo de merluza a la sidra con gulas y gambas',
      'Carrilleras de cerdo iberico con patatinos y pisto',
      'Tarta de comunion',
      'Agua, pan, cafe, chupito, vino blanco, vino tinto y cava',
    ],
    sources: [{ file: 'comunion.html', section: 'menu 1' }],
  },
  {
    title: 'Comunion n.o 2',
    price: '69,50 EUR + IVA',
    includes: [
      'Ensalada de pescado y marisco con dos salsas',
      'Tosta de foie, jamon iberico y cebolla confitada',
      'Lubina de racion al horno con mejillones',
      'Cabecero de cerdo iberico asado con patatinos, setas y pimientos',
      'Tarta de comunion + bodega base',
    ],
    sources: [{ file: 'comunion.html', section: 'menu 2' }],
  },
  {
    title: 'Comunion n.o 3',
    price: '79,00 EUR + IVA',
    includes: [
      'Txangurro de centollo',
      'Langostinos con dos salsas',
      'Crema de necoras',
      'Pierna de lechazo al horno',
      'Tarta de comunion + bodega base',
    ],
    sources: [{ file: 'comunion.html', section: 'menu 3' }],
  },
  {
    title: 'Comunion n.o 4',
    price: '80,00 EUR + IVA',
    includes: [
      'Cazuela marinera (mejillones, chipirones, gulas y zamburinas)',
      'Gambon a la plancha',
      'Rapin a la campesina',
      'Lomo de lubina al cava con patatinos',
      'Codillo al horno con panadera y piquillo',
    ],
    sources: [{ file: 'comunion.html', section: 'menu 4' }],
  },
  {
    title: 'Comunion n.o 5',
    price: '91,00 EUR + IVA',
    includes: [
      'Pastel de centollo y gambas',
      'Brocheta de pixin con pulpo braseado y algas',
      'Pixin en crema de oricios',
      'Entrecot con mini setas y patata asada',
      'Tarta de comunion + bodega base',
    ],
    sources: [{ file: 'comunion.html', section: 'menu 5' }],
  },
  {
    title: 'Comunion n.o 6',
    price: '94,00 EUR + IVA',
    includes: [
      'Ensalada de marisco en aguacate',
      'Vieira gratinada con langostinos',
      'Bacalao a la portuguesa',
      'Lomo de merluza con pulpo',
      'Solomillo de ternera con dos salsas y paletilla/pierna de lechazo',
    ],
    sources: [{ file: 'comunion.html', section: 'menu 6' }],
  },
  {
    title: 'Comunion n.o 7',
    price: '96,00 EUR + IVA',
    includes: [
      'Ensalada de marisco sobre pina natural',
      'Centollo gratinado',
      'Lomo de merluza al albarino',
      'Lenguado relleno de marisco',
      'Tournedo especial de La Quinta (solomillo)',
    ],
    sources: [{ file: 'comunion.html', section: 'menu 7' }],
  },
  {
    title: 'Carta de picoteo (destacados)',
    subtitle: 'Opciones para reforzar la celebracion',
    includes: [
      'Aceitunas - 2,00 EUR',
      'Bocaditos de pollo con salsa barbacoa - 12,00 EUR',
      'Brocheta de entrecot con patatinos y piquillo - 18,00 EUR',
      'Calamares romana - 20,00 EUR',
      'Chipirones a la plancha - 16,00 EUR',
      'Croquetas de jamon - 12,00 EUR',
      'Fritos de pixin - 19,00 EUR',
      'Jamon iberico de bellota - 24,00 EUR',
      'Parrilla de carnes para 2 - 50,00 EUR',
      'Pulpo a la gallega - 22,00 EUR',
      'Tortos maiz con queso cabra y jamon iberico - 14,50 EUR',
      'Pan - 1,00 EUR',
    ],
    sources: [{ file: 'comunion.html', section: 'carta de picoteo' }],
  },
  {
    title: 'Animacion y zona infantil',
    includes: [
      'Castillo hinchable y zona de juegos (columpios, futbol, canasta)',
      'Musica y animacion infantil segun volumen de comuniones',
      'Espacio sin trafico para seguridad de ninos',
      'En caso de lluvia se revisa el plan de actividades',
    ],
    conditions: [
      'Para grupos pequenos, consultar condiciones de montaje de atracciones.',
      'Con mayor numero de comuniones pueden anadirse actividades extra.',
    ],
    sources: [{ file: 'comunion.html', section: 'atracciones' }],
  },
];

export const comunionPolicies: PolicyNote[] = [
  {
    title: 'Personalizacion de menu',
    notes: [
      'Todos los menus pueden modificarse o combinarse.',
      'Tambien preparamos propuestas a medida para cada familia.',
      'Bodega base habitual: blanco Verdejo 4 Rayas, tinto Rioja Anares, cava Codorniu Brut.',
    ],
    sources: [{ file: 'comunion.html', section: 'menus articulables' }],
  },
  {
    title: 'Reserva y organizacion',
    notes: [
      'Trabajamos con pre-reserva y reserva en firme con senal.',
      'Consulta por telefono la senal actual y el proceso de confirmacion de fecha.',
      'Disponemos de menu infantil y alternativas segun edades.',
    ],
    sources: [{ file: 'comunion.html', section: 'reserva y varios' }],
  },
  {
    title: 'Confirmacion final',
    notes: [
      'Precios y menus pueden variar por temporada o disponibilidad.',
      'Recomendamos confirmar propuesta final por telefono o Facebook.',
    ],
    sources: [{ file: 'comunion.html', section: 'notas operativas' }],
  },
];
