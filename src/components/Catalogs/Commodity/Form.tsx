'use client';
import React, { FC, useState, useEffect } from 'react';
import { Dialog, Flex, Text } from '@radix-ui/themes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Commodity as CommodityType } from '@/types/database';

interface Props {
  onClick: (name: string, code: string, description?: string) => void;
  initialData: CommodityType | null;
  isEditing?: boolean;
}

const Form: FC<Props> = ({ onClick, initialData, isEditing = false }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setCode(initialData.code);
      setDescription(initialData.description || '');
    }
  }, [initialData]);

  const clearForm = () => {
    setName('');
    setCode('');
    setDescription('');
  };

  const handleSubmit = () => {
    onClick(name, code, description);
    if (!isEditing) {
      clearForm();
    }
  };

  return (
    <Dialog.Content
      maxWidth="450px"
      onCloseAutoFocus={isEditing ? undefined : clearForm}
    >
      <Dialog.Title>
        <Text as="div" size="2" mb="1" weight="bold">
          {isEditing ? 'Editar Commodity' : 'Agregar nuevo Commodity'}
        </Text>
      </Dialog.Title>
      <Flex direction="column" gap="3">
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Código
          </Text>
          <Input
            placeholder="Ingresa el código"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </label>

        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Nombre
          </Text>
          <Input
            placeholder="Ingresa el nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Descripción (opcional)
          </Text>
          <Input
            placeholder="Ingresa la descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="secondary" color="gray">
            Cancelar
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button
            variant="default"
            onClick={handleSubmit}
            disabled={!name || !code}
          >
            {isEditing ? 'Guardar' : 'Agregar'}
          </Button>
        </Dialog.Close>
      </Flex>
    </Dialog.Content>
  );
};

export default Form;
