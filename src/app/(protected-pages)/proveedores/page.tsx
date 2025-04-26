'use server';
import withAuth from '@/HOC/WithAuth';
import { Flex } from '@radix-ui/themes';
import React from 'react';
import NewProviders from '@/components/NewProviders';
import { Button } from '@/components/ui/button';
import { Dialog } from '@radix-ui/themes';

function AdminProveedores({ user }: { user: any }) {
  return (
    <div
      className="flex-1 min-h-screen flex flex-col items-center justify-start px-6 pb-8 pt-[100px] gap-6
    transition-all duration-300 ease-in-out ml-20 group-hover:ml-64"
    >
      <Flex align="center" gap="3">
        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="secondary">Nuevo Proveedor</Button>
          </Dialog.Trigger>
          <NewProviders />
        </Dialog.Root>
        <Button variant="secondary">Panel de Proveedores</Button>
        <Button variant="secondary">Reportes de Calidad</Button>
      </Flex>
    </div>
  );
}

export default withAuth(AdminProveedores);
