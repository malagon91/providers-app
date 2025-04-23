'use client';
import { signInAction } from '@/app/actions';
import { FormMessage, Message } from '@/components/form-message';
import { SubmitButton } from '@/components/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Button } from '@radix-ui/themes';
import SideBar from '@/components/SideBar';
import { useState } from 'react'; // Importa useState

export default function Dashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // Estado para controlar la expansión del sidebar

  const handleSidebarToggle = (expanded: boolean) => { // Define el tipo del parámetro expanded como boolean
    setIsSidebarExpanded(expanded);
  };

  return (
    <div className='flex'>
      <SideBar onToggle={handleSidebarToggle} /> {/* Pasa una función para notificar el cambio de estado */}

      {/* Contenedor principal */}
      <div
        className={`flex-1 min-h-screen flex flex-col items-center justify-start px-6 py-8 gap-6 transition-all duration-300 ease-in-out ${
          isSidebarExpanded ? 'ml-64' : 'ml-20' // Aplica margen izquierdo dinámicamente
        }`}
      >
        <h1 className='text-3xl font-bold mt-10'>Dashboard</h1>
      </div>
    </div>
  );
}