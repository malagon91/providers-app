'use client';
import React from 'react';
import { Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { Input } from '@/components/ui/input';
import { Select } from '@radix-ui/themes';
import { Button } from '@/components/ui/button';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const statusOptions = ['En Progreso', 'En Hold', 'Activo', 'Inactivo'];

const category = ['Productos', 'Commodities', 'Otros'];

const commodityOptions = ['Componente X', 'Componente Y', 'Componente Z'];

const NewProduct = () => {
  const [status, setStatus] = React.useState('');
  const [proyect, setProyect] = React.useState('');
  const [commodity, setCommodity] = React.useState('');

  const inputStyle = {
    display: 'flex',
    height: '2.5rem',
    width: '100%',
    borderRadius: '0.375rem',
    borderWidth: '1px',
    borderColor: 'hsl(var(--input))',
    backgroundColor: 'hsl(var(--background))',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    outline: 'none',
    ringOffsetWidth: '2px',
    cursor: 'default',
    opacity: '1',
  };

  return (
    <Dialog.Content maxWidth="450px">
      <Dialog.Title>
        <VisuallyHidden>Agregar Nuevo Producto</VisuallyHidden>
      </Dialog.Title>
      <Flex direction="column" gap="3">
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Id
          </Text>
          <Input placeholder="Ingresa el id."></Input>
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Codigo
          </Text>
          <Input placeholder="Ingresa el codigo."></Input>
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Nombre
          </Text>
          <Input placeholder="Ingresa el nombre."></Input>
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Categoria
          </Text>
          <Select.Root value={proyect} onValueChange={setProyect}>
            <Select.Trigger
              placeholder="Selecciona la categoria."
              style={inputStyle}
            />
            <Select.Content>
              {category.map((op) => (
                <Select.Item key={op} value={op}>
                  {op}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Stock
          </Text>
          <Input placeholder="Ingresa el stock."></Input>
        </label>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="secondary" color="gray">
            Cancelar
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button variant="default">Siguiente</Button>
        </Dialog.Close>
      </Flex>
    </Dialog.Content>
  );
};

export default NewProduct;
