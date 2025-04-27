'use client';
import React from 'react';
import { Container, Box, Table } from '@radix-ui/themes';
import { createClient } from '@/utils/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Category as CategoryType } from '@/types/database';
import { CiCirclePlus } from 'react-icons/ci';
import { ImCross } from 'react-icons/im';

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
