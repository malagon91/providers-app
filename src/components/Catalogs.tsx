'use client';
import React, { useState, useMemo } from 'react';
import {
  Table,
  Tabs,
  Box,
  Dialog,
  Button as RadixButton,
  DropdownMenu,
} from '@radix-ui/themes';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
  Cross2Icon,
} from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
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

enum TabType {
  PRODUCTS = 'products',
  COMMODITIES = 'commodities',
  OTHERS = 'others',
}

function Catalogs() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      code: 'PR1',
      name: 'PRODUCTO1',
      category: 'Electrónicos',
      price: 1,
      stock: 1,
    },
    {
      id: 2,
      code: 'PR2',
      name: 'PRODUCTO2',
      category: 'Accesorios',
      price: 1,
      stock: 1,
    },
    {
      id: 3,
      code: 'PR3',
      name: 'PRODUCTO3',
      category: 'Electrónicos',
      price: 1,
      stock: 1,
    },
    {
      id: 4,
      code: 'PR4',
      name: 'PRODUCTO4',
      category: 'Accesorios',
      price: 1,
      stock: 1,
    },
    {
      id: 5,
      code: 'PR5',
      name: 'PRODUCTO5',
      category: 'Electrónicos',
      price: 1,
      stock: 1,
    },
    {
      id: 6,
      code: 'PR6',
      name: 'PRODUCTO6',
      category: 'Accesorios',
      price: 1,
      stock: 1,
    },
    {
      id: 7,
      code: 'PR7',
      name: 'PRODUCTO7',
      category: 'Electrónicos',
      price: 1,
      stock: 1,
    },
    {
      id: 8,
      code: 'PR8',
      name: 'PRODUCTO8',
      category: 'Accesorios',
      price: 1,
      stock: 1,
    },
    {
      id: 9,
      code: 'PR9',
      name: 'PRODUCTO9',
      category: 'Electrónicos',
      price: 1,
      stock: 1,
    },
    {
      id: 10,
      code: 'PR10',
      name: 'PRODUCTO10',
      category: 'Accesorios',
      price: 1,
      stock: 1,
    },
    {
      id: 11,
      code: 'PR11',
      name: 'PRODUCTO11',
      category: 'Electrónicos',
      price: 1,
      stock: 1,
    },
    {
      id: 12,
      code: 'PR12',
      name: 'PRODUCTO12',
      category: 'Accesorios',
      price: 1,
      stock: 1,
    },
  ]);

  const [commodities, setCommodities] = useState<Commoditi[]>([
    {
      id: 1,
      code: 'COM001',
      name: 'Comoditi1',
      category: 'Acabados',
      price: 1899.99,
      stock: 100,
    },
    {
      id: 2,
      code: 'COM002',
      name: 'Comoditi2',
      category: 'Acabados',
      price: 1899.99,
      stock: 100,
    },
    {
      id: 3,
      code: 'COM003',
      name: 'Comoditi3',
      category: 'Acabados',
      price: 1899.99,
      stock: 100,
    },
    {
      id: 4,
      code: 'COM004',
      name: 'Comoditi4',
      category: 'Ensamble',
      price: 1899.99,
      stock: 100,
    },
    {
      id: 5,
      code: 'COM005',
      name: 'Comoditi5',
      category: 'Acabados',
      price: 1899.99,
      stock: 100,
    },
    {
      id: 6,
      code: 'COM006',
      name: 'Comoditi6',
      category: 'Ensamble',
      price: 1899.99,
      stock: 100,
    },
    {
      id: 7,
      code: 'COM007',
      name: 'Comoditi7',
      category: 'Ensamble',
      price: 1899.99,
      stock: 100,
    },
    {
      id: 8,
      code: 'COM008',
      name: 'Comoditi8',
      category: 'Acabados',
      price: 1899.99,
      stock: 100,
    },
    {
      id: 9,
      code: 'COM009',
      name: 'Comoditi9',
      category: 'Ensamble',
      price: 1899.99,
      stock: 100,
    },
    {
      id: 10,
      code: 'COM10',
      name: 'Comoditi10',
      category: 'Acabados',
      price: 1899.99,
      stock: 100,
    },
    {
      id: 11,
      code: 'COM0011',
      name: 'Comoditi11',
      category: 'Ensamble',
      price: 1899.99,
      stock: 100,
    },
  ]);

  const [others, setOthers] = useState<Other[]>([
    {
      id: 1,
      code: 'OTH001',
      name: 'Servicio Técnico',
      category: 'Servicios',
      price: 49.99,
      stock: 999,
    },
    {
      id: 2,
      code: 'OTH002',
      name: 'Garantía Extendida',
      category: 'Servicios',
      price: 99.99,
      stock: 999,
    },
  ]);

  const [currentTab, setCurrentTab] = useState<TabType>(TabType.PRODUCTS);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  const getCurrentItems = () => {
    switch (currentTab) {
      case TabType.PRODUCTS:
        return products;
      case TabType.COMMODITIES:
        return commodities;
      case TabType.OTHERS:
        return others;
      default:
        return products;
    }
  };

  const filteredItems = useMemo(() => {
    const items = getCurrentItems();
    if (!searchTerm) return items;

    const term = searchTerm.toLowerCase();
    return items.filter(
      (item) =>
        item.code.toLowerCase().includes(term) ||
        item.name.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term) ||
        item.price.toString().includes(term) ||
        item.stock.toString().includes(term)
    );
  }, [currentTab, products, commodities, others, searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItemsToShow = filteredItems.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const renderTable = (items: (Product | Commoditi | Other)[]) => {
    return (
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Codigo</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Nombre</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Categoria</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Precio</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Stock</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Acciones</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.RowHeaderCell>{item.id}</Table.RowHeaderCell>
              <Table.Cell>{item.code}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${
                    item.category === 'Electrónicos'
                      ? 'bg-blue-100 text-blue-800'
                      : item.category === 'Acabados'
                        ? 'bg-yellow-100 text-yellow-800'
                        : item.category === 'Ensamble'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-green-100 text-green-800'
                  }`}
                >
                  {item.category}
                </span>
              </Table.Cell>
              <Table.Cell>${item.price.toFixed(2)}</Table.Cell>
              <Table.Cell>{item.stock}</Table.Cell>
              <Table.Cell>
                <button className="p-1 rounded-md bg-gray-100 hover:bg-gray-200">
                  <PlusIcon className="w-4 h-4" />
                </button>
                <button className="p-1 rounded-md bg-gray-100 hover:bg-gray-200">
                  <Cross2Icon className="w-4 h-4" />
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    );
  };

  const renderPagination = () => {
    if (filteredItems.length === 0) {
      return (
        <div className="text-center py-4 text-gray-500">
          No se encontraron {currentTab} que coincidan con "{searchTerm}"
        </div>
      );
    }

    return (
      <div className="flex justify-center gap-2 mt-4">
        <RadixButton
          variant="soft"
          onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
          disabled={currentPage === 1}
        >
          ← Anterior
        </RadixButton>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <RadixButton
            key={number}
            variant={currentPage === number ? 'solid' : 'soft'}
            onClick={() => paginate(number)}
          >
            {number}
          </RadixButton>
        ))}

        <RadixButton
          variant="soft"
          onClick={() =>
            paginate(currentPage < totalPages ? currentPage + 1 : totalPages)
          }
          disabled={currentPage === totalPages}
        >
          Siguiente →
        </RadixButton>
      </div>
    );
  };

  return (
    <>
      <Tabs.Root
        defaultValue={TabType.PRODUCTS}
        onValueChange={(value) => {
          setCurrentTab(value as TabType);
          setCurrentPage(1);
          setSearchTerm('');
        }}
      >
        <Tabs.List>
          <Tabs.Trigger value={TabType.PRODUCTS}>Productos</Tabs.Trigger>
          <Tabs.Trigger value={TabType.COMMODITIES}>Commodities</Tabs.Trigger>
          <Tabs.Trigger value={TabType.OTHERS}>Otros</Tabs.Trigger>
        </Tabs.List>

        <div className="flex gap-3 mt-4">
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
              placeholder={`Buscar ${currentTab}...`}
              className="w-full pl-10 pr-3 py-2 border rounded-md"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="secondary">
                <MixerHorizontalIcon /> Filtros
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>Categoria</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Electrónicos</DropdownMenu.Item>

                  <DropdownMenu.Item>Accesorios</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>

        <Box pt="3">
          <Tabs.Content value={TabType.PRODUCTS}>
            {renderTable(currentItemsToShow)}
            {renderPagination()}
          </Tabs.Content>

          <Tabs.Content value={TabType.COMMODITIES}>
            {renderTable(currentItemsToShow)}
            {renderPagination()}
          </Tabs.Content>

          <Tabs.Content value={TabType.OTHERS}>
            {renderTable(currentItemsToShow)}
            {renderPagination()}
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </>
  );
}

export default Catalogs;
