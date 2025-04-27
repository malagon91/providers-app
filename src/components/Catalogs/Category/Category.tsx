'use client';
import React from 'react';
import { Container, Box, Table, Dialog, DropdownMenu } from '@radix-ui/themes';
import { createClient } from '@/utils/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Category as CategoryType } from '@/types/database';
import { CiCirclePlus } from 'react-icons/ci';
import { ImCross } from 'react-icons/im';
import { Button } from '@/components/ui/button';
import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
  PlusIcon,
} from '@radix-ui/react-icons';
import NewProduct from '@/components/NewProduct';

const Category = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      const supabase = createClient();

      const { data, error } = (await supabase.from('category').select('*')) as {
        data: CategoryType[] | null;
        error: any;
      };

      if (error) {
        toast.error('Error al obtener la información');
        return;
      }
      return data ?? [];
    },
  });
  console.log(data, 'data');
  console.log(isLoading, 'isLoading');

  return (
    <Container size="4">
      <Box width="50%">
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
              placeholder={`Buscar categoria...`}
              className="w-full pl-10 pr-3 py-2 border rounded-md"
              value={''}
            />
          </div>
        </div>
        <Table.Root variant="ghost">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell width="100px" minWidth="100px">
                ID
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="300px" minWidth="300px">
                Nombre
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="80px" minWidth="80px">
                Acciones
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data?.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>
                  <button className="p-1 rounded-md bg-gray-100 hover:bg-gray-200">
                    <CiCirclePlus className="w-4 h-4" />
                  </button>
                  <button className="p-1 rounded-md bg-gray-100 hover:bg-gray-200">
                    <ImCross className="w-4 h-4" />
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Container>
  );
};

export default Category;
