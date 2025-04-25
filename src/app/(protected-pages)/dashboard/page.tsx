'use server';
import withAuth from '@/HOC/WithAuth';
import {  Flex } from '@radix-ui/themes';
import React from 'react';
import NewProviders from '@/components/NewProviders';
import { Button } from '@/components/ui/button';
import { Dialog, Text, TextField } from '@radix-ui/themes';
import NavbarLogin from '@/components/NavbarLogin';


function AdminProveedores({ user }: { user: any }) {
  console.log(user, 'user');
  return (
    <div className="flex">
      <NavbarLogin></NavbarLogin>
      <div
        className="flex-1 min-h-screen flex flex-col items-center justify-start px-6 py-8 gap-6
    transition-all duration-300 ease-in-out ml-20 group-hover:ml-64"
      >
<h1 className='text-3xl font-bold mt-10'>Dashboard</h1>

      </div>
    </div>
  );
}

export default withAuth(AdminProveedores);
