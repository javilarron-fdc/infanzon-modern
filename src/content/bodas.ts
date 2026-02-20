import type { EventPackage, PolicyNote } from '../types/content';

export const bodasPackages: EventPackage[] = [
  {
    title: 'Cocktail de bienvenida',
    price: '12,00 EUR + IVA',
    includes: [
      'Cocktail de cava, cup de frutas, vinos, refrescos y cervezas',
      'Croquetas caseras de jamon, gambas a la gabardina y fritos de bacalao',
      'Canapes variados: mini bollitos prenados, bocaditos de queso, hojaldres y mas',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'pincheos cocktail bienvenida' }],
  },
  {
    title: 'Espicha de bienvenida',
    price: '16,00 EUR + IVA',
    includes: [
      'Sidra, vinos, refrescos, cervezas y vermouth',
      'Jamon iberico, chips de bacalao con pisto, cucharitas de matanza y huevo',
      'Croquetas caseras, caramelos de centollo y cucharitas de puntilla',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'espicha bienvenida' }],
  },
  {
    title: 'Pincheo especial de La Quinta',
    price: '19,50 EUR + IVA',
    includes: [
      'Base de bebidas de bienvenida (cava, vinos, refrescos, cervezas)',
      'Caramelo de langostino con oricios, cucharitas de pulpo, torta de iberico y seta',
      'Fritos de morcilla, canape de queso cabra y esparrago, gambas gabardina, albondiguitas rabo toro',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'pincheo especial' }],
  },
  {
    title: 'Menu boda n.o 1',
    subtitle: 'Gambon plancha + lenguado relleno + carrillera iberica',
    price: 'Cocktail 106,50 | Espicha 110,50 | Pincheo 114,50 (EUR + IVA)',
    includes: [
      'Gambon a la plancha',
      'Lenguado relleno de marisco',
      'Carrilleras ibericas al Pedro Ximenez',
      'Tarta nupcial + helado, cafe y licores',
      'Bodega: vino blanco, tinto crianza y cava',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'menu 1' }],
  },
  {
    title: 'Menu boda n.o 2',
    subtitle: 'Bombon de centollo + merluza rellena + pluma iberica',
    price: 'Cocktail 117,00 | Espicha 121,00 | Pincheo 124,00 (EUR + IVA)',
    includes: [
      'Bombon de centollo con langostinos',
      'Merluza rellena de marisco y mejillones',
      'Pluma de cerdo iberico con champinones, cebolla confitada y patatinos',
      'Tarta nupcial + helado, cafe y licores',
      'Bodega: vino blanco, tinto crianza y cava',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'menu 2' }],
  },
  {
    title: 'Menu boda n.o 3',
    subtitle: 'Txangurro frio + rapin campesina + solomillo ternera',
    price: 'Cocktail 130,00 | Espicha 134,00 | Pincheo 137,00 (EUR + IVA)',
    includes: [
      'Txangurro frio de centollo con dos salsas',
      'Rapin a la campesina',
      'Solomillo de ternera braseado con patatinas y cebolla confitada',
      'Tarta nupcial + helado, cafe y licores',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'menu 3' }],
  },
  {
    title: 'Menu boda n.o 4',
    subtitle: 'Pulpo braseado + crema necoras + pixin sidra + lechazo',
    price: 'Cocktail 139,00 | Espicha 143,00 | Pincheo 146,00 (EUR + IVA)',
    includes: [
      'Ensalada de pulpo braseado sobre pantumaka y cecina',
      'Crema de necoras',
      'Pixin a la sidra con chipirones y patatinos',
      'Paletilla y pierna de lechazo al horno',
      'Tarta nupcial + helado, cafe y licores',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'menu 4' }],
  },
  {
    title: 'Menu boda n.o 5',
    subtitle: 'Bugre + lubina + solomillo iberico al foie',
    price: 'Cocktail 180,00 | Espicha 184,00 | Pincheo 187,50 (EUR + IVA)',
    includes: [
      'Bugre a la plancha con dos salsas (piezas 1 kg)',
      'Suprema de lubina con sushi de gamba y crema marinera',
      'Solomillo iberico al foie con trigueros y setas silvestres',
      'Tarta nupcial + helado, cafe y licores',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'menu 5' }],
  },
  {
    title: 'Menu boda n.o 6',
    subtitle: 'Marisco especial + merluza con pulpo + solomillo buey',
    price: 'Cocktail 179,00 | Espicha 183,00 | Pincheo 186,00 (EUR + IVA)',
    includes: [
      'Plato especial de marisco: 1/2 bugre, txangurro y cigalas',
      'Lomo de merluza con pulpo a la gallega',
      'Solomillo de buey con dos salsas',
      'Tarta nupcial + helado, cafe y licores',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'menu 6' }],
  },
  {
    title: 'Menu boda n.o 7',
    subtitle: 'Bogavante + vichyssoise + pixin + tournedo',
    price: 'Cocktail 189,00 | Espicha 193,00 | Pincheo 196,50 (EUR + IVA)',
    includes: [
      'Ensalada de bogavante',
      'Sopa vichyssoise con coca de queso fresco',
      'Lomo de pixin con almejas',
      'Sorbete de limon al cava',
      'Tournedo especial de La Quinta',
      'Tarta nupcial + helado, cafe y licores',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'menu 7' }],
  },
  {
    title: 'Lunchs de noche (post-banquete)',
    includes: [
      'Lunch n.o 1 - 8,00 EUR + IVA',
      'Lunch n.o 2 - Consultar opciones y precio',
      'Lunch n.o 3 - 32,00 EUR + IVA',
      'Opciones sentadas o en buffet sin parar barra libre',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'lunch noche y buffets' }],
  },
  {
    title: 'Buffets de noche para bodas',
    includes: [
      'Buffet n.o 1 - 12,50 EUR',
      'Buffet n.o 2 - 14,50 EUR',
      'Buffet n.o 3 - 14,50 EUR',
      'Componentes segun buffet: frutas, mini hamburguesas, pizzas, quesos, huevos con patatas, frixuelos y cafes',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'buffets noche bodas' }],
  },
];

export const bodasPolicies: PolicyNote[] = [
  {
    title: 'Promociones de temporada',
    notes: [
      'En fechas de contratacion rapida pueden aplicarse ventajas especiales.',
      'Desde 50 comensales pueden existir beneficios en alojamiento y barra libre, segun disponibilidad.',
      'No siempre se exige numero minimo de invitados; depende de fecha y calendario.',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'bodas de ultima hora sopeton' }],
  },
  {
    title: 'Barra libre, musica y salon',
    notes: [
      'Barra libre de referencia: 15 EUR + IVA por las tres primeras horas y 4 EUR + IVA por cada hora extra.',
      'Opciones de DJ y animacion disponibles en distintos formatos.',
      'Disponemos de varias configuraciones de mesas redondas, ovaladas y rectangulares.',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'barra libre musica ninos mesas' }],
  },
  {
    title: 'Organizacion y contratacion',
    notes: [
      'Incluimos decoracion de mesas, cartel de invitados, menus de mano y servicio de guardarropa.',
      'La prueba de boda y condiciones del hotel para novios dependen del numero final de comensales.',
      'Reserva en firme: contrato y fianza; consulta minimos y plazos para tu fecha.',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'detalles quinta y contratacion' }],
  },
  {
    title: 'Personalizacion',
    notes: [
      'Menus y pincheos se pueden combinar para ajustar la celebracion a cada pareja.',
      'Si algun invitado necesita alternativa de plato, lo organizamos con cocina.',
      'Confirma siempre version vigente por telefono o Facebook.',
    ],
    sources: [{ file: 'boda_utf8.html', section: 'menus modificables' }],
  },
];
