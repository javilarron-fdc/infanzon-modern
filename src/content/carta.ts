import type { MenuCourseGroup, PolicyNote, PriceItem } from '../types/content';

export const cartaPrices: PriceItem[] = [
  {
    label: 'Menu diario (comida)',
    price: '20,00 EUR',
    note: 'Incluye vino Rioja, cafe y chupito.',
  },
  {
    label: 'Menu especial fin de semana',
    price: '28,00 EUR',
    note: 'Composicion sujeta a temporada.',
  },
  {
    label: 'Menu infantil semanal',
    price: '15,00 EUR',
  },
];

export const cartaGroups: MenuCourseGroup[] = [
  {
    title: 'Entradas y arroces',
    items: [
      'Jamon iberico de bellota - 24,00 EUR',
      'Croquetas de jamon caseras - 12,00 EUR',
      'Croquetas de oricios - 19,00 EUR',
      'Calamares fritos con ali oli de lima y gengibre - 22,00 EUR',
      'Ensalada de crema de mejillones escabechados y melocoton caramelizado - 22,00 EUR',
      'Zamburinas a la plancha con ajada - 23,00 EUR',
      'Ensaladilla con lomo de bonito casero, encurtido y algas - 23,00 EUR',
      'Brandada de bacalao con pilpil de piquillo y pan crujiente - 21,00 EUR',
      'Pulpo braseado en cremoso de pimiento con pistachos verdes - 23,00 EUR',
      'Arroz meloso con pitu y piquillo confitado - 21,00 EUR',
      'Fabada asturiana - Consultar precio',
      'Verdinas con pixin, gambones y verdura a la sidra - 20,00 EUR',
    ],
    sources: [{ file: 'carta_utf8.html', section: 'entradas' }],
  },
  {
    title: 'Pescados',
    items: [
      'Taco de pixin a la plancha sobre carpaccio de pulpo a la manzana - Consultar precio',
      'Bacalao a la plancha con patatas a lo pobre - 31,00 EUR',
      'Bacalao confitado con guiso de manitas de cerdo y matices - 31,00 EUR',
      'Lomo de lubina asada con verduritas y tallarines de calamar a la carbonara - 27,50 EUR',
      'Rodaballo en fondo de caldereta con mejillones - 30,00 EUR',
    ],
    sources: [{ file: 'carta_utf8.html', section: 'pescados' }],
  },
  {
    title: 'Carnes',
    items: [
      'Lomo alto de ternera IGP con pimientos asados - Consultar precio',
      'Solomillo al cabrales - 24,00 EUR',
      'Solomillo de novilla con salsa borgonona y patata hojaldrada - 25,00 EUR',
      'Cachopo clasico de solomillo y cremoso de patata - 25,00 EUR',
      'Solomillo iberico con mantequilla de hierbas y salsa de citricos - 24,00 EUR',
    ],
    sources: [{ file: 'carta_utf8.html', section: 'carnes' }],
  },
  {
    title: 'Platos vegetarianos',
    items: [
      'Berenjena china asada con emulsion de ajo negro y hortalizas - 15,00 EUR',
      'Apionabo caramelizado - 18,00 EUR',
      'Aguacate frito en panko y especias con mayonesa de jalapeno y menta - 20,00 EUR',
      'Parrillada de verduras - 15,00 EUR',
      'Fritura de brocoli con salsa breva, sesamo tostado y creme fraiche - 17,00 EUR',
      'Arroz cremoso con trigueros, tomate seco y queso de cabra - 18,00 EUR',
      'Mosaico de puerros confitados con algas y coliflor - 20,00 EUR',
    ],
    sources: [{ file: 'carta_utf8.html', section: 'platos vegetarianos' }],
  },
  {
    title: 'Postres y helados',
    items: [
      'Arroz con leche requemado - 5,50 EUR',
      'Tarta de limon - 5,50 EUR',
      'Mantecado Pena Santa de frutas escarchadas y marron glacee - 8,50 EUR',
      'Tarta de arroz con leche requemado - 5,50 EUR',
      'Tarta de queso Afuega-l-pitu - 5,50 EUR',
      'Helados - pedir carta especifica',
    ],
    sources: [{ file: 'carta_utf8.html', section: 'postres y helados' }],
  },
  {
    title: 'Bodega destacada',
    items: [
      'Rioja Anares - 14,00 EUR',
      'Baron de Ley reserva - 23,00 EUR',
      'Coto crianza - 16,00 EUR',
      'Ramon Bilbao edicion limitada - 24,00 EUR',
      'Marques de Riscal reserva - 36,00 EUR',
      'Vina Pomal reserva - 26,00 EUR',
      'Carramimbre roble - 15,50 EUR',
      'La Planta - 19,00 EUR',
      'Protos reserva - 48,00 EUR',
      'Valduero - 40,00 EUR',
      'Marques de Vizhoja - 14,00 EUR',
      'Marques de Riscal blanco - 18,50 EUR',
      'Codorniu Prima Vides - 14,00 EUR',
      'Anna de Codorniu - 25,00 EUR',
      'El Gaitero extra - 8,50 EUR',
      'Moet Chandon - Consultar precio',
    ],
    sources: [{ file: 'carta_utf8.html', section: 'bodega' }],
  },
];

export const cartaPolicies: PolicyNote[] = [
  {
    title: 'Informacion util',
    notes: [
      'Carta y disponibilidad sujetas a mercado y temporada.',
      'Consulta opciones para alergias e intolerancias antes de reservar.',
      'Para conocer el menu del dia, revisa Facebook o llamanos.',
    ],
    sources: [{ file: 'carta_utf8.html', section: 'notas generales y alergenos' }],
  },
  {
    title: 'Reservas',
    notes: [
      'Confirmamos menus y condiciones por telefono y correo.',
      'En fechas de alta demanda, recomendamos reserva previa.',
    ],
    sources: [{ file: 'carta_utf8.html', section: 'consulte menu de hoy' }],
  },
];
