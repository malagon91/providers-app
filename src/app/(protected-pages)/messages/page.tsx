'use server';
import withAuth from '@/HOC/WithAuth';
import React from 'react';

function Messages({ user }: { user: any }) {
  return (
    <div
      className="flex-1 min-h-screen flex flex-col items-center justify-start px-6 py-8 gap-6
    transition-all duration-300 ease-in-out ml-20 group-hover:ml-64"
    />
  );
}

export default withAuth(Messages);
