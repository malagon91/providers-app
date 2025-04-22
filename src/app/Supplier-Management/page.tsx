'use client'

import { signInAction } from '@/app/actions';
import { FormMessage, Message } from '@/components/form-message';
import { SubmitButton } from '@/components/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Button, Flex } from '@radix-ui/themes';
import SideBar from '@/components/SideBar';
import React from 'react'
import { useState } from 'react'
import Modal from '@/components/Modal';
import InformacionProveedor from '@/components/NewProvider';



export default function AdminProveedores() {

  const [mostrar, setMostrar] =useState(false)
  
  return (
    <>
   <div className='flex'>
  <SideBar />

  {/* Contenedor principal */}
  <div className='flex-1 min-h-screen bg-blue-200 flex flex-col items-center justify-start px-6 py-8 gap-6'>

    <h1 className='text-3xl font-bold mt-10'>Administracion de Proveedores</h1>

    <Flex align="center" gap="3">
	<Button variant="classic" onClick={() => setMostrar(true)}>Nuevo Proveedor</Button>
	<Button variant="classic">Panel de Proveedores</Button>
	<Button variant="classic">Reportes de Calidad</Button>
  </Flex>


 
  </div>
</div>

{/* Modal */}
<div className='w-full'>
  <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
    <InformacionProveedor />
  </Modal>
</div> 
        </>
  
    
  );
}
