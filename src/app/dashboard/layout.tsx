'use client';
import { useState } from 'react';
import SideBar from '@/components/SideBar';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleSidebarToggle = (expanded: boolean) => { // Define el tipo del parámetro expanded como boolean
    setIsSidebarExpanded(expanded);
  };

  return (
    <div className='flex'>
      <SideBar onToggle={handleSidebarToggle} />
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarExpanded ? 'ml-64' : 'ml-20'
        }`}
      >
        {children}
      </div>
    </div>
  );
}