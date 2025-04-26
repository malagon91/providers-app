'use server';
import withAuth from '@/HOC/WithAuth';
import React from 'react';
import Dashboard from '@/components/Dashboard/Dashboard';

function DashboardPage({ user }: { user: any }) {
  return (
    <div
      className="flex-1 min-h-screen flex flex-col items-center justify-start px-6 pb-8 pt-[100px] gap-6
    transition-all duration-300 ease-in-out ml-20 group-hover:ml-70"
    >
      <Dashboard user={user} />
    </div>
  );
}

export default withAuth(DashboardPage);
