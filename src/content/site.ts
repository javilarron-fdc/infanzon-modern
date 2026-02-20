import type { NavGroup, SiteSettings } from '../types/content';

export const site: SiteSettings = {
  name: 'La Quinta del Ynfanzon',
  tagline: 'Restaurante, hotel rural y celebraciones en Gijon.',
  phones: ['985 337 898', '639 163 997'],
  ruralHousePhone: '658 17 81 74 (SOL)',
  email: 'quinta.ynfanzon@gmail.com',
  addressLine: 'Infanzon-Cabuenes, Ctra. Deva 69, 33394 Gijon (Asturias)',
  facebookUrl: 'https://www.facebook.com/claudio.quintaynfanzon',
  mapHint: 'Desde la AS-II tomar Cabuenes-Deva y seguir direccion Deva hasta el numero 69.',
};

export const primaryNavGroups: NavGroup[] = [
  {
    label: 'Inicio',
    href: '/',
    children: [],
  },
  {
    label: 'Restaurante',
    href: '/restaurante/carta',
    children: [
      {
        label: 'Carta',
        href: '/restaurante/carta',
        description: 'Platos, precios y reservas de mesa.',
      },
      {
        label: 'Terrazas',
        href: '/restaurante/espacios/terraza',
        description: 'Cafeteria, tapeo y exterior.',
      },
      {
        label: 'Salones',
        href: '/restaurante/espacios/salones',
        description: 'Espacios interiores para comer y celebrar.',
      },
    ],
  },
  {
    label: 'Eventos',
    href: '/eventos/bodas',
    children: [
      {
        label: 'Bodas',
        href: '/eventos/bodas',
        description: 'Banquetes, ceremonia y fiesta.',
      },
      {
        label: 'Comuniones',
        href: '/eventos/comuniones',
        description: 'Planes familiares y actividades infantiles.',
      },
      {
        label: 'Menús empresa',
        href: '/eventos/menus-empresa',
        description: 'Comidas corporativas y grupos.',
      },
      {
        label: 'Nochevieja',
        href: '/eventos/nochevieja',
        description: 'Cena especial y celebracion de fin de año.',
      },
    ],
  },
  {
    label: 'Hotel',
    href: '/hotel',
    children: [],
  },
  {
    label: 'Finca',
    href: '/finca',
    children: [
      {
        label: 'Finca',
        href: '/finca',
        description: 'Jardines, aparcamiento y exteriores.',
      },
      {
        label: 'Galeria',
        href: '/galeria',
        description: 'Recorrido fotografico de La Quinta.',
      },
      {
        label: 'Historia y leyenda',
        href: '/fantasma',
        description: 'Memoria y tradicion de la casona.',
      },
    ],
  },
  {
    label: 'Contacto',
    href: '/info/contacto',
    children: [
      {
        label: 'Contacto',
        href: '/info/contacto',
        description: 'Telefono, email y redes.',
      },
      {
        label: 'Accesos',
        href: '/info/accesos',
        description: 'Como llegar en coche.',
      },
      {
        label: 'Accesibilidad',
        href: '/info/accesibilidad',
        description: 'Accesos adaptados y ayuda.',
      },
    ],
  },
];
