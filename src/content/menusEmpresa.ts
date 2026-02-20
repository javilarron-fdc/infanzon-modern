import type { EventPackage, PolicyNote } from '../types/content';

export const empresaPackages: EventPackage[] = [
  {
    title: 'Menu empresa 0',
    price: '30,00 EUR/persona',
    includes: [
      'Arroz cremoso con verduritas y jamon',
      'Ensaladilla marinera',
      'Carrillera de ternera al vino tinto o lomo de bacalao mariscado',
      'Postres a elegir',
      'Agua, pan, cafe, chupito y Rioja Anares Crianza',
    ],
    sources: [{ file: 'menus_de_empresa.html', section: 'menu 0' }],
  },
  {
    title: 'Menus empresa 1-4',
    subtitle: 'Combinaciones clasicas de pescado/carne y tarta casera',
    includes: [
      'Menu 1 - Calderada de pescados + medallones de ternera - 35,50 EUR/p',
      'Menu 2 - Cazuela de zamburinas/mejillones/chipirones + solomillo iberico al oporto - 38,50 EUR/p',
      'Menu 3 - Risotto marinero + carrillera de ternera a la manzana - 39,50 EUR/p',
      'Menu 4 - Tortos maiz con jamon y queso cabra + medallones de solomillo a la manzana - 40,50 EUR/p',
      'Todos con tarta casera, Rioja Anares, agua/pan/cafe/chupito',
    ],
    sources: [{ file: 'menus_de_empresa.html', section: 'menus 1 a 4' }],
  },
  {
    title: 'Menus empresa 5-8',
    includes: [
      'Menu 5 - Fabes con carne iberica + merluza al albarino con mejillones y gambas - Consultar precio',
      'Menu 6 - Txangurro centollo + crema de necoras + entrecot - 57,50 EUR/p',
      'Menu 7 - Fabes con almejas + rape plancha + canutillos crujientes de pato - 66,50 EUR/p',
      'Menu 8 - Pulpo mariscado + lubina al cava + Tournedo especial de La Quinta - Consultar precio',
      'Todos con tarta casera y bodega base',
    ],
    sources: [{ file: 'menus_de_empresa.html', section: 'menus 5 a 8' }],
  },
  {
    title: 'Menus empresa 9-13',
    includes: [
      'Menu 9 - Langostinos dos salsas + rodaballo al orujo + lechazo - 84,00 EUR/p',
      'Menu 10 - Arroz con bugre + pixin en salsa de oricios + solomillo dos salsas - Consultar precio',
      'Menu 11 - Tortos maiz iberico + lubina tradicional - 40,50 EUR/p',
      'Menu 12 - Ensalada de pollo/arroz caldoso marisco/crujiente lechazo - 49,50 EUR/p',
      'Menu 13 - Seleccion frituras finas + crema necoras + solomillo manzana - 49,50 EUR/p',
    ],
    sources: [{ file: 'menus_de_empresa.html', section: 'menus 9 a 13' }],
  },
  {
    title: 'Menus empresa 14-18',
    includes: [
      'Menu 14 - Fabes con almejas + entrecot anojo - Consultar precio',
      'Menu 15 - Pote marinero + merluza salsa verde con gulas - 43,50 EUR/p',
      'Menu 16 - Pote antiguo con castanas + rapin campesina - 47,50 EUR/p',
      'Menu 17 - Ensalada marisco en aguacate + solomillo iberico trigueros y setas - Consultar precio',
      'Menu 18 - Entremeses + cocktail langostinos + solomillo ternera dos salsas - 62,50 EUR/p',
    ],
    sources: [{ file: 'menus_de_empresa.html', section: 'menus 14 a 18' }],
  },
  {
    title: 'Pincheos A y B',
    includes: [
      'Pincheo A - 27,5 EUR/persona',
      'Pincheo B - 34,5 EUR/persona',
      'Base compartida: albondiguitas, calamares, croquetas, rollitos cecina, fritos de merluza, tortilla, bebidas 1 hora',
      'Con variantes de embutidos, chorizo criollo, datiles bacon, tabla quesos y mini hamburguesas segun opcion',
    ],
    sources: [{ file: 'menus_de_empresa.html', section: 'pincheo a y b' }],
  },
  {
    title: 'Pincheos C, D y E',
    includes: [
      'Pincheo C - Consultar precio',
      'Pincheo D - 30,5 EUR/persona',
      'Pincheo E - 40,3 EUR/persona',
      'Incluyen variantes con chipirones, chorizo criollo, croquetas, tabla embutidos, gambas gabardina, mini tortos, pastel pescado y surtido de tartas',
    ],
    sources: [{ file: 'menus_de_empresa.html', section: 'pincheo c d e' }],
  },
  {
    title: 'Espicha en el prado',
    price: '37,5 EUR/persona',
    includes: [
      'Bunuelos manzana-morcilla, croquetas jamon, gambas gabardina, pastel pescado, puntillas romana',
      'Sarten picadillo con patatas y huevos',
      'Taco bonito con pisto, tortilla patatas, tortos maiz con queso cabra y jamon',
      'Sidra sin escanciador 1,5 horas + bebidas',
    ],
    sources: [{ file: 'menus_de_empresa.html', section: 'espicha en el prado' }],
  },
  {
    title: 'Menu infantil para grupos',
    includes: [
      'Plato de entremeses o pasta',
      'Filete, pollo o escalope',
      'Helado o tarta + agua',
      'Precio habitual entre 12 y 15 EUR segun formato',
      'Opcion de media racion del menu adulto para ninos',
    ],
    sources: [{ file: 'menus_de_empresa.html', section: 'menu infantil' }],
  },
  {
    title: 'Seleccion de pinchos unitarios',
    subtitle: 'Muestra para cocteles y refuerzos',
    includes: [
      'Albondiguitas rabo toro - 2,5 EUR',
      'Albondiguitas rape y pulpo - 4,50 EUR',
      'Mini brocheta pixin-langostinos - 6,0 EUR',
      'Canutillo pato al Pedro Ximenez - 3,5 EUR',
      'Mesa quesos asturianos (7 tipos) - 10,0 EUR',
      'Mini hamburguesa - 3,0 EUR',
      'Fritos de merluza - 3,5 EUR',
      'Fritos de pixin - 5,0 EUR',
      'Tortilla de patatas - 3,0 EUR',
      'Zamburinas plancha - 7,5 EUR',
      'Bebidas pincheo 1 hora - 5,0 EUR',
      'Hora barra libre - 10,0 EUR',
    ],
    sources: [{ file: 'menus_de_empresa.html', section: 'seleccion pinchos y extras' }],
  },
];

export const empresaPolicies: PolicyNote[] = [
  {
    title: 'Configuracion flexible',
    notes: [
      'Los menus pueden adaptarse al tipo de evento, horario y numero de invitados.',
      'Combinamos platos y formatos para reuniones, celebraciones de equipo y encuentros corporativos.',
      'Si deseas propuesta personalizada, te preparamos presupuesto a medida.',
    ],
    sources: [{ file: 'menus_de_empresa.html', section: 'introduccion y notas finales' }],
  },
  {
    title: 'Confirmacion de servicio',
    notes: [
      'La composicion final y los precios se confirman con reservas.',
      'Disponemos de salones privatizables para grupos de distintos tamanos.',
      'Consulta disponibilidad por telefono o Facebook.',
    ],
    sources: [{ file: 'menus_de_empresa.html', section: 'menus y servicios comunes' }],
  },
];
