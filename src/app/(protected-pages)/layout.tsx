'use client';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import SideBar from '@/components/SideBar';
import NavbarAuth from '@/components/NavbarAuth';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const queryClient = new QueryClient();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
