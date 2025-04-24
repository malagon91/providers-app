import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <div className="flex flex-col gap-20 max-w-5xl p-5">
          <div className="max-w-7xl flex flex-row gap-12 items-center justify-center min-h-[50vh]">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
