'use client';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import SideBar from '@/components/SideBar';
import NavbarAuth from '@/components/NavbarAuth';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="group">
        <SideBar />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out group-hover:ml-64`}
      >
        <div className="flex">
          <NavbarAuth />
          {children}
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
