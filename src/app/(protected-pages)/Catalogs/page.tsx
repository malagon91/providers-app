'use server';
import withAuth from '@/HOC/WithAuth';
import CatalogAdminSystem from '@/components/Catalogs';
import React from 'react';


function CatalogAdmin({ user }: { user: any }) {
  console.log(user, 'user');
  return (
    <div className="flex">
      <div
        className="flex-1 min-h-screen flex flex-col items-center justify-start px-6 py-8 gap-6
    transition-all duration-300 ease-in-out ml-20 group-hover:ml-64"
      >
        <CatalogAdminSystem></CatalogAdminSystem>
      </div>
    </div>
  );
}

export default withAuth(CatalogAdmin);
