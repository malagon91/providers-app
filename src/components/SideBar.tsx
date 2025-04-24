'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiHome, FiUsers, FiMail, FiSettings } from 'react-icons/fi';

interface ExpandableSidebarProps {
  onToggle: (expanded: boolean) => void;
}

const SideBar: React.FC<ExpandableSidebarProps> = ({ onToggle }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');
  

  const menuItems = [
    { name: 'Inicio', icon: <FiHome className="text-lg"/>, href:"/dashboard" },
    { name: 'Administrar proveedores', icon: <FiUsers className="text-lg" />, href:'Supplier-Management' },
    { name: 'Administrar usuarios', icon: <FiUsers className="text-lg"  /> ,href:'Supplier-Management' },
    { name: 'Mensajes', icon: <FiMail className="text-lg" />, href:'Supplier-Management' },
    { name: 'Configuracion', icon: <FiSettings className="text-lg" />, href:'Supplier-Management' }
  ];

  const toggleSidebar = () => {
    setExpanded(!expanded);
    onToggle(!expanded);
  };

  return (
    <div className={`fixed top-0 left-0 h-[calc(100vh-4rem)] bg-white flex flex-col border-r-4 border-gray-200 transition-all duration-300 ease-in-out z-50 ${expanded ? 'w-64' : 'w-20'}`}>
      
      <button
        onClick={toggleSidebar}
        className={`p-3 flex hover:bg-gray-100 border-b border-gray-200 ${
          expanded ? 'items-start' : 'items-center justify-center'
        }`}
      >
        {expanded ? (
          <div className="flex items-center text-gray-600 h-10.5">
            <FiChevronLeft className="text-lg" />
            <span className="ml-2 text-sm">Ocultar</span>
          </div>
        ) : (
          <FiChevronRight className="text-lg text-gray-600" />
        )}
      </button>

     
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

export default SideBar;