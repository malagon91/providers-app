'use client';
import React, { useState } from 'react';
import {
  Container,
  Box,
  Table,
  Dialog,
  DropdownMenu,
  AlertDialog,
  Flex,
} from '@radix-ui/themes';
import { createClient } from '@/utils/supabase/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Category as CategoryType } from '@/types/database';
import { Button } from '@/components/ui/button';
import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons';
import { BsThreeDotsVertical } from 'react-icons/bs';
import NewCategory from '@/components/Catalogs/Category/Form';
import { NewCategory as NewCategoryType } from '@/models/NewCategory';
import Skeleton from '@/components/Common/Skeleton';

const Category = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>();
  const [searchTerm, setSearchTerm] = useState('');
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery({
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

  const addNewCategory = useMutation({
    mutationFn: async (data: NewCategoryType) => {
      const supabase = createClient();
      const { data: category, error } = await supabase
        .from('category')
        .insert(data);
      if (error) {
        toast.error('Error al agregar la categoría');
        return;
      }
      return category;
    },
  });

  const deleteCategory = useMutation({
    mutationFn: async (id: number) => {
      const supabase = createClient();
      const { data: category, error } = await supabase
        .from('category')
        .delete()
        .match({ id });
      if (error) {
        toast.error('Error al eliminar la categoría');
        return;
      }
      return category;
    },
  });

  const handleAddNewCategory = async (name: string) => {
    await addNewCategory.mutate({
      name,
    });
    await queryClient.invalidateQueries({ queryKey: ['category'] });
    refetch();
  };

  const deleteCategoryFn = async () => {
    if (!selectedCategory) return;
    await deleteCategory.mutate(selectedCategory?.id);
    toast.success(
      `La categoría ${selectedCategory?.name} ha sido eliminada exitosamente`
    );
    await queryClient.invalidateQueries({ queryKey: ['category'] });
    refetch();
  };

  const handleOnClickDeleteCategory = (item: CategoryType) => {
    setSelectedCategory(item);
    setIsAlertOpen(true);
  };

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
            <NewCategory onClick={handleAddNewCategory} />
          </Dialog.Root>

          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon />
            </div>
            <input
              type="text"
              placeholder={`Buscar categoria...`}
              className="w-full pl-10 pr-3 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Table.Root variant="ghost" className="mt-4">
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
            {isLoading ? (
              <Skeleton NumberOfRows={10} NumberOfColumns={3} />
            ) : (
              data?.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger>
                        <Button variant="ghost" size="icon">
                          <BsThreeDotsVertical />
                        </Button>
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Content>
                        <DropdownMenu.Item shortcut="⌘ E">
                          Editar
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />

                        <DropdownMenu.Item
                          shortcut="⌘ ⌫"
                          color="red"
                          onClick={() => handleOnClickDeleteCategory(item)}
                        >
                          Eliminar
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Root>
                  </Table.Cell>
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table.Root>
      </Box>
      {isAlertOpen && (
        <AlertDialog.Root open={isAlertOpen}>
          <AlertDialog.Content className="fixed top-[150px] left-[50vh] transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg max-w-[450px] w-full">
            <AlertDialog.Title className="text-lg font-bold">
              Are you sure to delete this category?
            </AlertDialog.Title>
            <AlertDialog.Description className="mt-2 text-gray-600">
              Are you sure? All the products associated with this category will
              be deleted.
            </AlertDialog.Description>
            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button variant="ghost" onClick={() => setIsAlertOpen(false)}>
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action
                onClick={() => {
                  deleteCategoryFn();
                  setIsAlertOpen(false);
                }}
              >
                <Button variant="destructive">Delete category</Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      )}
    </Container>
  );
};

export default Category;
