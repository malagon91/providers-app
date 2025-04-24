'use client'

import { useState, useMemo } from 'react';
import { PlusIcon, MagnifyingGlassIcon, MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Button } from '@/components/ui/button';
import { Dialog } from '@radix-ui/themes';
import NewProduct from '@/components/NewProduct';


type Product = {
  id: number;
  code: string;
  name: string;
  category: string;
  price: number;
  stock: number;
};

type Commoditi = {
  id: number;
  code: string;
  name: string;
  category: string;
  price: number;
  stock: number;
};

type Other = {
  id: number;
  code: string;
  name: string;
  category: string;
  price: number;
  stock: number;
};


enum ViewType {
  PRODUCTS = 'products',
  COMMODITIES = 'commodities',
  OTHERS = 'others'
}

const CatalogAdminSystem = () => {

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      code: "PR1",
      name: "PRODUCTO1",
      category: "Electrónicos",
      price: 1,
      stock: 1
    },
    {
        id: 2,
        code: "PR2",
        name: "PRODUCTO2",
        category: "Accesorios",
        price: 1,
        stock: 1
      },
      {
        id: 3,
        code: "PR3",
        name: "PRODUCTO3",
        category: "Electrónicos",
        price: 1,
        stock: 1
      },
      {
          id: 4,
          code: "PR4",
          name: "PRODUCTO4",
          category: "Accesorios",
          price: 1,
          stock: 1
        },{
            id: 5,
            code: "PR5",
            name: "PRODUCTO5",
            category: "Electrónicos",
            price: 1,
            stock: 1
          },
          {
              id: 6,
              code: "PR6",
              name: "PRODUCTO6",
              category: "Accesorios",
              price: 1,
              stock: 1
            },{
                id: 7,
                code: "PR7",
                name: "PRODUCTO7",
                category: "Electrónicos",
                price: 1,
                stock: 1
              },
              {
                  id: 8,
                  code: "PR8",
                  name: "PRODUCTO8",
                  category: "Accesorios",
                  price: 1,
                  stock: 1
                },

                {
                    id: 9,
                    code: "PR9",
                    name: "PRODUCTO9",
                    category: "Electrónicos",
                    price: 1,
                    stock: 1
                  },
                  {
                      id: 10,
                      code: "PR10",
                      name: "PRODUCTO10",
                      category: "Accesorios",
                      price: 1,
                      stock: 1
                    },
                    {
                        id: 11,
                        code: "PR11",
                        name: "PRODUCTO11",
                        category: "Electrónicos",
                        price: 1,
                        stock: 1
                      },
                      {
                          id: 12,
                          code: "PR12",
                          name: "PRODUCTO12",
                          category: "Accesorios",
                          price: 1,
                          stock: 1
                        },
  ]);

  const [commodities, setCommodities] = useState<Commoditi[]>([
    {
      id: 1,
      code: "COM001",
      name: "Comoditi1",
      category: "Acabados",
      price: 1899.99,
      stock: 100
    },
    {
        id: 2,
        code: "COM002",
        name: "Comoditi2",
        category: "Acabados",
        price: 1899.99,
        stock: 100
      },
      {
        id: 3,
        code: "COM003",
        name: "Comoditi3",
        category: "Acabados",
        price: 1899.99,
        stock: 100
      },
      {
        id: 4,
        code: "COM004",
        name: "Comoditi4",
        category: "Ensamble",
        price: 1899.99,
        stock: 100
      },
      {
          id: 5,
          code: "COM005",
          name: "Comoditi5",
          category: "Acabados",
          price: 1899.99,
          stock: 100
        },
        {
          id: 6,
          code: "COM006",
          name: "Comoditi6",
          category: "Ensamble",
          price: 1899.99,
          stock: 100
        },
        
      {
        id: 7,
        code: "COM007",
        name: "Comoditi7",
        category: "Ensamble",
        price: 1899.99,
        stock: 100
      },
      {
          id: 8,
          code: "COM008",
          name: "Comoditi8",
          category: "Acabados",
          price: 1899.99,
          stock: 100
        },
        {
          id: 9,
          code: "COM009",
          name: "Comoditi9",
          category: "Ensamble",
          price: 1899.99,
          stock: 100
        },
        {
            id: 10,
            code: "COM10",
            name: "Comoditi10",
            category: "Acabados",
            price: 1899.99,
            stock: 100
          },
          {
            id: 11,
            code: "COM0011",
            name: "Comoditi11",
            category: "Ensamble",
            price: 1899.99,
            stock: 100
          },
  ]);

  const [others, setOthers] = useState<Other[]>([
    {
      id: 1,
      code: "OTH001",
      name: "Servicio Técnico",
      category: "Servicios",
      price: 49.99,
      stock: 999
    },
    {
      id: 2,
      code: "OTH002",
      name: "Garantía Extendida",
      category: "Servicios",
      price: 99.99,
      stock: 999
    }
  ]);


  const [currentView, setCurrentView] = useState<ViewType>(ViewType.PRODUCTS);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;


  const getCurrentItems = () => {
    switch (currentView) {
      case ViewType.PRODUCTS:
        return products;
      case ViewType.COMMODITIES:
        return commodities;
      case ViewType.OTHERS:
        return others;
      default:
        return products;
    }
  };


  const filteredItems = useMemo(() => {
    const items = getCurrentItems();
    if (!searchTerm) return items;

    const term = searchTerm.toLowerCase();
    return items.filter(item =>
      item.code.toLowerCase().includes(term) ||
      item.name.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term) ||
      item.price.toString().includes(term) ||
      item.stock.toString().includes(term)
    );
  }, [currentView, products, commodities, others, searchTerm]);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItemsToShow = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold ml-29">Sistema de Administración de Catálogos</h1>
        </div>

        
        <div className="flex gap-3">
          <Button 
            onClick={() => {
              setCurrentView(ViewType.PRODUCTS);
              setCurrentPage(1);
              setSearchTerm('');
            }}
            variant={currentView === ViewType.PRODUCTS ? "default" : "secondary"}
          >
            Productos
          </Button>  
          <Button 
            onClick={() => {
              setCurrentView(ViewType.COMMODITIES);
              setCurrentPage(1);
              setSearchTerm('');
            }}
            variant={currentView === ViewType.COMMODITIES ? "default" : "secondary"}
          >
            Commodities
          </Button>   
          <Button 
            onClick={() => {
              setCurrentView(ViewType.OTHERS);
              setCurrentPage(1);
              setSearchTerm('');
            }}
            variant={currentView === ViewType.OTHERS ? "default" : "secondary"}
          >
            Otros
          </Button>   
        </div>

        <div className="flex gap-3">
          <Dialog.Root>
            <Dialog.Trigger>
              <Button variant="secondary">
                <PlusIcon /> Nuevo
              </Button>
            </Dialog.Trigger>
            <NewProduct />
          </Dialog.Root>

          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon />
            </div>
            <input
              type="text"
              placeholder={`Buscar ${currentView}...`}
              className="w-full pl-10 pr-3 py-2 border rounded-md"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <Button variant="secondary">
            <MixerHorizontalIcon /> Filtros
          </Button>
        </div>

        
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItemsToShow.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.code}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${item.category === "Electrónicos" ? 'bg-blue-100 text-blue-800' : 
                        item.category === "Acabados" ? 'bg-yellow-100 text-yellow-800' :
                        item.category === "Ensamble" ? 'bg-red-100 text-red-800' :
                        'bg-green-100 text-green-800'}`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="p-1 rounded-md bg-gray-100 hover:bg-gray-200">
                      <PlusIcon className="w-4 h-4" />
                    </button>
                    <button className="p-1 rounded-md bg-gray-100 hover:bg-gray-200">
                      <Cross2Icon className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        {filteredItems.length > 0 ? (
          <div className="flex justify-center gap-2">
            <Button 
              variant="secondary" 
              onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
            >
              ← Anterior
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <Button
                key={number}
                variant={currentPage === number ? "default" : "secondary"}
                onClick={() => paginate(number)}
              >
                {number}
              </Button>
            ))}
            
            <Button 
              variant="secondary" 
              onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
              disabled={currentPage === totalPages}
            >
              Siguiente →
            </Button>
          </div>
        ) : (
          <div className="text-center py-4 text-gray-500">
            No se encontraron {currentView} que coincidan con "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogAdminSystem;