'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiHome, FiUsers, FiMail, FiSettings } from 'react-icons/fi';
import Image from 'next/image';
import { images } from '@/assets/images';

const SideBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    {
      name: 'Inicio',
      icon: <FiHome className="text-lg" />,
      href: '/dashboard',
    },
    {
      name: 'Administrar proveedores',
      icon: <FiUsers className="text-lg" />,
      href: 'Supplier-Management',
    },
    {
      name: 'Administrar usuarios',
      icon: <FiUsers className="text-lg" />,
      href: 'Supplier-Management',
    },
    {
      name: 'Mensajes',
      icon: <FiMail className="text-lg" />,
      href: 'Supplier-Management',
    },
    {
      name: 'Configuracion',
      icon: <FiSettings className="text-lg" />,
      href: 'Supplier-Management',
    },
  ];

  return (
    <div
      className="fixed top-0 left-0 h-[calc(100vh-4rem)] bg-white flex flex-col border-r-4 border-gray-200
  transition-all duration-300 ease-in-out z-50
  w-20 hover:w-64"
    >
      <nav className="flex-1 overflow-y-auto py-2">
        <Link
          href="/"
          className={`flex items-start p-3 mx-1 my-1 rounded-lg cursor-pointer transition-colors text-gray-700 hover:bg-gray-100`}
        >
          <Image
            src={images.logoSmall}
            alt="logo"
            className="w-8 h-8 group-hover:mr-3 transition-all duration-300"
          />
          <span className="text-sm font-medium overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 self-center">
            Digital Product
          </span>
        </Link>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActiveItem(item.name)}
            className={`flex items-start p-3 mx-2 my-1 rounded-lg cursor-pointer transition-colors ${
              activeItem === item.name
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className=" group-hover:mr-3 transition-all duration-300">
              {item.icon}
            </span>
            <span className="text-sm font-medium overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
