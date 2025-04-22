'use client'

import { signInAction } from '@/app/actions';
import { FormMessage, Message } from '@/components/form-message';
import { SubmitButton } from '@/components/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Button as RadixButton } from '@radix-ui/themes';
import SideBar from '@/components/SideBar';
import React from 'react'
import { useState } from 'react'
import Modal from '@/components/Modal';
import InformacionProveedor from '@/components/NewProvider';



export default function Dashboard() {

  const [mostrar, setMostrar] =useState(false)
  
  return (
    <>
    <div className='flex'>
        <SideBar></SideBar>
        <div className='flex-1 min-h-screen bg-blue-200 flex items-center justify-center'>
        <h1 className='text-3xl font-bold'>Supplier Management</h1>
        </div>
        <div style={{
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
        <RadixButton onClick={()=> setMostrar(true)}>
        New provider.
</RadixButton>
          <RadixButton  variant="solid" size="3">Supplier panel.</RadixButton>
          <RadixButton variant="solid" size="3">Quality reports.</RadixButton>
        </div>
      </div>


        </div>
    <div className='w-full'>
    <Modal isOpen={mostrar} onClose={()=>setMostrar(false)}><InformacionProveedor></InformacionProveedor></Modal>
    </div>
    
        </>
  
    
  );
}
