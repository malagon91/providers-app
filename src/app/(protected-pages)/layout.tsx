'use client';
import SideBar from '@/components/SideBar';

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
        {children}
      </div>
    </div>
  );
}
