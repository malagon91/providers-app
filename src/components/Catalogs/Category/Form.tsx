'use client';
import React, { FC, useState } from 'react';
import { Dialog, Flex, Text } from '@radix-ui/themes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
interface Props {
  onClick: (name: string) => void;
  closeForm: () => void;
}

const Form: FC<Props> = ({ onClick, closeForm }) => {
  const [name, setName] = useState('');
  const clearForm = () => {
    setName('');
  };

  return (
    <Dialog.Content maxWidth="450px" onCloseAutoFocus={clearForm}>
      <Dialog.Title>
        <Text as="div" size="2" mb="1" weight="bold">
          Agregar nueva categoría
        </Text>
      </Dialog.Title>
      <Flex direction="column" gap="3">
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Descripción
          </Text>
          <Input
            placeholder="Ingresa el nombre."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="secondary" color="gray" onClick={closeForm}>
            Cancelar
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button
            variant="default"
            onClick={() => onClick(name)}
            disabled={!name}
          >
            Agregar
          </Button>
        </Dialog.Close>
      </Flex>
    </Dialog.Content>
  );
};

export default Form;
