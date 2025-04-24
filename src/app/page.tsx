import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen px-4">
        <Navbar />
        <div className="relative h-[50vh] flex items-center justify-center ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6">
              Digital Product
            </h1>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
              Nuestro producto es una herramienta que te ayuda a crear un
              producto o servicio que te captiva tu audiencia y explica tu
              valor.
            </p>
            <div className="flex justify-center gap-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nuestras funcionalidades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary/50 rounded-lg flex items-center justify-center mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Gestión de clientes
                </h3>
                <p className="text-gray-600">
                  Funcionalidad de tu producto o servicio que te captiva tu
                  audiencia y explica tu valor.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary/50 rounded-lg flex items-center justify-center mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Trabajo en equipo
                </h3>
                <p className="text-gray-600">
                  Funcionalidad de tu producto o servicio que te captiva tu
                  audiencia y explica tu valor.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary/50 rounded-lg flex items-center justify-center mb-4" />
                <h3 className="text-xl font-semibold mb-2">Organización</h3>
                <p className="text-gray-600">
                  Funcionalidad de tu producto o servicio que te captiva tu
                  audiencia y explica tu valor.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
