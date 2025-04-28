'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/assets/images';
import { menuItems } from '@/routes';
import { useMainStore } from '@/store/useMainStore';

const SideBar: FC = () => {
  const { selectedMenuItem, setSelectedMenuItem } = useMainStore();

  return (
    <div
      className="fixed top-0 left-0 h-[calc(100vh-4rem)] bg-white flex flex-col border-r-4 border-gray-200
  transition-all duration-300 ease-in-out z-500
  w-20 hover:w-70"
    >
      <nav className="flex-1 overflow-y-auto py-2">
        <Link
          href="/dashboard"
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
            key={item.id}
            href={item.href}
            onClick={() => setSelectedMenuItem(item)}
            className={`flex items-start p-3 mx-2 my-1 rounded-lg cursor-pointer transition-colors ${
              selectedMenuItem.id === item.id
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className=" group-hover:mr-3 transition-all duration-300">
              <item.icon className="text-lg" />
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
