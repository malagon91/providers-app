// components/Catalogs/Commodity/DeleteDialog.tsx
'use client';
import React from 'react'
import { useState } from 'react';

import { Dialog, Button, Flex } from '@radix-ui/themes';

interface DeleteDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => Promise<void>;
}

export const DeleteDialog = ({ isOpen, onOpenChange, onConfirm }: DeleteDialogProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConfirm = async () => {
    setIsDeleting(true);
    try {
      await onConfirm();
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Eliminar commodity</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          ¿Estás seguro de que deseas eliminar este commodity? Esta acción no se puede deshacer.
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancelar
            </Button>
          </Dialog.Close>
          <Button color="red" onClick={handleConfirm} disabled={isDeleting}>
            {isDeleting ? 'Eliminando...' : 'Eliminar'}
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};