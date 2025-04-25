'use server';
import withAuth from '@/HOC/WithAuth';
import Catalogs from '@/components/Catalogs';
import React from 'react';
import NavbarLogin from '@/components/NavbarLogin';


function AdminSuppliers({ user }: { user: any }) {
  console.log(user, 'user');
  return (
    <div className="flex">
      <NavbarLogin></NavbarLogin>
      <div
        className="flex-1 min-h-screen flex flex-col items-center justify-start px-6 py-8 gap-6
    transition-all duration-300 ease-in-out ml-20 group-hover:ml-64"
      >
<h1 className='text-3xl font-bold mt-10'>Administración de Catalogos</h1>
<Catalogs></Catalogs>
      </div>
    </div>
  );
}

export default withAuth(AdminSuppliers);
