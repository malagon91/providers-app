'use client';
import React from 'react';
import { Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { Input } from '@/components/ui/input';
import { Select, Tabs } from '@radix-ui/themes';
import { Button } from '@/components/ui/button';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const statusOptions = ['En Progreso', 'En Hold', 'Activo', 'Inactivo'];

const supplierOptions = ['Proyecto A', 'Proyecto B', 'Proyecto C'];

const commodityOptions = ['Componente X', 'Componente Y', 'Componente Z'];

const NewProviders = () => {
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
        <VisuallyHidden>Agregar Nuevo Proveedor</VisuallyHidden>
      </Dialog.Title>

      <Flex direction="column" gap="3">
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Nombre
          </Text>
          <Input placeholder="Nombre del proveedor."></Input>
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Direccion
          </Text>
          <Input placeholder="Calle y numero"></Input>
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Ciudad
          </Text>
          <Input placeholder="Ciudad"></Input>
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Estado
          </Text>
          <Input placeholder="Estado"></Input>
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Pais
          </Text>
          <Input placeholder="Pais"></Input>
        </label>

        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Proyecto
          </Text>
          <Select.Root value={proyect} onValueChange={setProyect}>
            <Select.Trigger placeholder="Proyecto" style={inputStyle} />
            <Select.Content>
              {supplierOptions.map((op) => (
                <Select.Item key={op} value={op}>
                  {op}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </label>

        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Estatus
          </Text>
          <Select.Root value={status} onValueChange={setStatus}>
            <Select.Trigger placeholder="Estatus" style={inputStyle} />
            <Select.Content>
              {statusOptions.map((op) => (
                <Select.Item key={op} value={op}>
                  {op}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </label>

        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Producto
          </Text>
          <Select.Root value={commodity} onValueChange={setCommodity}>
            <Select.Trigger placeholder="Producto" style={inputStyle} />
            <Select.Content>
              {commodityOptions.map((op) => (
                <Select.Item key={op} value={op}>
                  {op}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </label>
      </Flex>

      
    </Dialog.Content>
  );
};

export default NewProviders;
