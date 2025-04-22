'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiHome, FiUsers, FiMail, FiSettings } from 'react-icons/fi';

const ExpandableSidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: <FiHome className="text-lg"/>, href:"/dashboard" },
    { name: 'Supplier', icon: <FiUsers className="text-lg" />, href:'Supplier-Management' },
    { name: 'Management', icon: <FiUsers className="text-lg"  /> ,href:'Supplier-Management' },
    { name: 'Messages', icon: <FiMail className="text-lg" />, href:'Supplier-Management' },
    { name: 'Settings', icon: <FiSettings className="text-lg" />, href:'Supplier-Management' }
  ];

  return (
    <div className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white flex flex-col border-r-4 border-gray-200 transition-all duration-300 ease-in-out ${expanded ? 'w-64' : 'w-20'}`}>
      {/* Botón de expandir/colapsar */}
      <button 
        onClick={() => setExpanded(!expanded)}
        className="p-3 flex items-center justify-center hover:bg-gray-100 border-b border-gray-200"
      >
        {expanded ? (
          <div className="flex items-center text-gray-600">
            <FiChevronLeft className="text-lg" />
            <span className="ml-2 text-sm">Collapse</span>
          </div>
        ) : (
          <FiChevronRight className="text-lg text-gray-600" />
        )}
      </button>

      {/* Menú principal */}
      <nav className="flex-1 overflow-y-auto py-2">
        {menuItems.map((item) => (
          <Link
            
            key={item.name}
            href={item.href}
            onClick={() => setActiveItem(item.name)}
            className={`flex items-center p-3 mx-2 my-1 rounded-lg cursor-pointer transition-colors ${
              activeItem === item.name 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className={`${expanded ? 'mr-3' : 'mx-auto'}`}>
              {item.icon}
            </span>
            {expanded && (
              <span className="text-sm font-medium">{item.name}</span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ExpandableSidebar;