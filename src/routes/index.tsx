import { FiHome, FiUsers, FiMail, FiSettings, FiArchive } from 'react-icons/fi';
import { IMenuItem } from './interfaces';
export const menuItems: IMenuItem[] = [
  {
    name: 'Dashboard',
    icon: FiHome,
    href: '/dashboard',
    id: 'dashboard',
  },
  {
    name: 'Administración de Proveedores',
    icon: FiUsers,
    href: '/proveedores',
    id: 'proveedores',
  },
  {
    name: 'Catalogos',
    icon: FiArchive,
    href: '/catalogs',
    id: 'catalogs',
  },
  {
    name: 'Mensajes',
    icon: FiMail,
    href: '/messages',
    id: 'messages',
  },
  {
    name: 'Configuracion',
    icon: FiSettings,
    href: '/settings',
    id: 'settings',
  },
];
