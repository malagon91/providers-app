'use client';

import { signInAction } from '@/app/actions';
import { FormMessage, Message } from '@/components/form-message';
import { SubmitButton } from '@/components/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import {  Flex , Select} from '@radix-ui/themes';
import SideBar from '@/components/SideBar';
import React from 'react';
import { useState } from 'react';
import NewProviders from '@/components/NewProviders';
import { Button } from '@/components/ui/button';

export default function AdminProveedores() {
  const [mostrar, setMostrar] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleSidebarToggle = (expanded: boolean) => {
    setIsSidebarExpanded(expanded);
  };

  return (
    <>
      <div className='flex'>
        <SideBar onToggle={handleSidebarToggle} />

        {/* Contenedor principal - APLICA EL ESTILO CONDICIONAL AQUÍ */}
        <div
          className={`flex-1 min-h-screen flex flex-col items-center justify-start px-6 py-8 gap-6 transition-all duration-300 ease-in-out ${
            isSidebarExpanded ? 'ml-64' : 'ml-20'
          }`}
        >
          <h1 className='text-3xl font-bold mt-10'>Administracion de Proveedores</h1>

          <Flex align="center" gap="3">
            <Button variant="secondary" onClick={() => setMostrar(true)}>Nuevo Proveedor</Button>
            <Button variant="secondary">Panel de Proveedores</Button>
            <Button variant="secondary">Reportes de Calidad</Button>
          </Flex>

          <NewProviders open={mostrar} onOpenChange={setMostrar} />
        </div>
      </div>
    </>
  );
}