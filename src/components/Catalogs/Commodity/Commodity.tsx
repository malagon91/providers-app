'use client';
import React, { useState, useMemo } from 'react';
import { Container, Box, Table, Dialog, DropdownMenu } from '@radix-ui/themes';
import { createClient } from '@/utils/supabase/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Commodity as CommodityType } from '@/types/database';
import { Button } from '@/components/ui/button';
import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons';
import { BsThreeDotsVertical } from 'react-icons/bs';
import NewCommodity from '@/components/Catalogs/Commodity/Form';
import { NewCommodity as NewCommodityType } from '@/models/NewCommodity';
import Skeleton from '@/components/Common/Skeleton';
import { DeleteDialog } from '@/components/Catalogs/Commodity/DeleteDialog';

const Commodity = () => {
  const [editingCommodity, setEditingCommodity] = useState<CommodityType | null>(null);
  const [deletingCommodity, setDeletingCommodity] = useState<CommodityType | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const queryClient = useQueryClient();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['commodity'],
    queryFn: async () => {
      const supabase = createClient();
      const { data, error } = (await supabase.from('commodity').select('*')) as {
        data: CommodityType[] | null;
        error: any;
      };

      if (error) {
        toast.error('Error al obtener la información');
        return;
      }
      return data ?? [];
    },
  });

  const filteredCommodities = useMemo(() => {
    if (!data) return [];
    return data.filter(commodity => 
      commodity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      commodity.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (commodity.description && commodity.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [data, searchTerm]);

  const addNewCommodity = useMutation({
    mutationFn: async (data: NewCommodityType) => {
      const supabase = createClient();
      const { data: commodity, error } = await supabase
        .from('commodity')
        .insert(data);
      if (error) {
        toast.error('Error al agregar el commodity');
        return;
      }
      return commodity;
    },
  });

  const updateCommodity = useMutation({
    mutationFn: async (data: CommodityType) => {
      const supabase = createClient();
      const { data: commodity, error } = await supabase
        .from('commodity')
        .update({
          name: data.name,
          code: data.code,
          description: data.description
        })
        .eq('id', data.id);

      if (error) {
        toast.error('Error al actualizar el commodity');
        return;
      }
      return commodity;
    },
  });

  const deleteCommodity = useMutation({
    mutationFn: async (id: number) => {
      const supabase = createClient();
      const { error } = await supabase
        .from('commodity')
        .delete()
        .eq('id', id);

      if (error) {
        toast.error('Error al eliminar el commodity');
        throw error;
      }
    },
    onSuccess: () => {
      toast.success('Commodity eliminado correctamente');
      queryClient.invalidateQueries({ queryKey: ['commodity'] });
      setDeletingCommodity(null);
    },
  });

  const handleAddNewCommodity = async (name: string, code: string, description?: string) => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    await addNewCommodity.mutateAsync({
      name,
      code,
      description: description || null,
      created_by: user?.id || ''
    });
    await queryClient.invalidateQueries({ queryKey: ['commodity'] });
    refetch();
  };

  const handleEditCommodity = async (commodity: CommodityType) => {
    await updateCommodity.mutateAsync(commodity);
    await queryClient.invalidateQueries({ queryKey: ['commodity'] });
    refetch();
    setEditingCommodity(null);
  };

  const handleEditClick = (commodity: CommodityType) => {
    setEditingCommodity(commodity);
  };

  const handleDeleteClick = (commodity: CommodityType) => {
    setDeletingCommodity(commodity);
  };

  const handleConfirmDelete = async () => {
    if (deletingCommodity) {
      await deleteCommodity.mutateAsync(deletingCommodity.id);
    }
  };

  return (
    <Container size="4">
      <Box width="w-full">
        <div className="flex gap-3 mt-4">
          <Dialog.Root>
            <Dialog.Trigger>
              <Button variant="secondary">
                <PlusIcon /> Nuevo
              </Button>
            </Dialog.Trigger>
            <NewCommodity 
              onClick={handleAddNewCommodity} 
              initialData={null} 
            />
          </Dialog.Root>

          <Dialog.Root open={!!editingCommodity} onOpenChange={(open) => !open && setEditingCommodity(null)}>
            <Dialog.Trigger>
              <div style={{ display: 'none' }} />
            </Dialog.Trigger>
            {editingCommodity && (
              <NewCommodity 
                onClick={(name, code, description) => handleEditCommodity({
                  ...editingCommodity,
                  name,
                  code,
                  description: description || null
                })} 
                initialData={editingCommodity}
                isEditing
              />
            )}
          </Dialog.Root>

          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon />
            </div>
            <input
              type="text"
              placeholder="Buscar commodity..."
              className="w-full pl-10 pr-3 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <DeleteDialog
          isOpen={!!deletingCommodity}
          onOpenChange={(open) => !open && setDeletingCommodity(null)}
          onConfirm={handleConfirmDelete}
          commodityName={deletingCommodity?.name} 

        />

        <Table.Root variant="ghost" className="mt-4">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell width="100px" minWidth="100px">
                ID
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="150px" minWidth="150px">
                Código
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="300px" minWidth="300px">
                Nombre
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="300px" minWidth="300px">
                Descripcion
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="80px" minWidth="80px">
                Acciones
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {isLoading ? (
              <Skeleton NumberOfRows={10} NumberOfColumns={4} />
            ) : filteredCommodities.length === 0 && searchTerm ? (
              <Table.Row>
                <Table.Cell colSpan={4} className="text-center py-4">
                  No se encontraron commodities que coincidan con "{searchTerm}"
                </Table.Cell>
              </Table.Row>
            ) : (
              (searchTerm ? filteredCommodities : data)?.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell>{item.code}</Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.description}</Table.Cell>
                  <Table.Cell>
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger>
                        <Button variant="ghost" size="icon">
                          <BsThreeDotsVertical />
                        </Button>
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Content>
                        <DropdownMenu.Item 
                          shortcut="⌘ E"
                          onClick={() => handleEditClick(item)}
                        >
                          Editar
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item 
                          shortcut="⌘ ⌫" 
                          color="red"
                          onClick={() => handleDeleteClick(item)}
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
    </Container>
  );
};

export default Commodity;