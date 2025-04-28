'use client';
import {
  Box,
  Container,
  Flex,
  Text,
  Card,
  Avatar,
  Heading,
} from '@radix-ui/themes';
import { images } from '@/assets/images';
import { useMainStore } from '@/store/useMainStore';
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { GearIcon, PersonIcon, ExitIcon, FileTextIcon } from '@radix-ui/react-icons';

export default function NavbarAuth() {
  const { selectedMenuItem } = useMainStore();
  return (
    <Box
      asChild
      py="3"
      className="z-90 fixed top-0 left-0 right-0  bg-white border-b border-gray-200"
    >
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-18 overflow-hidden">
        <Container>
          <Flex justify="between" align="center">
            <Box>
              <Heading
                as="h1"
                size="5"
                className="text-foreground"
                weight="bold"
              >
                {selectedMenuItem.name || 'Digital Product'}
              </Heading>
            </Box>
            <Flex z-1900 gap="3">
              <Box maxWidth="240px">
                <Card variant="ghost">
                  <Flex gap="3" align="center">
                  <DropdownMenu.Root>
  <DropdownMenu.Trigger asChild>
    <Box maxWidth="240px" style={{ cursor: 'pointer' }}>
      <Card variant='ghost'>
        <Flex z-1900 gap="3" align="center">
          <Avatar
            size="3"
            src={images.avatar.src}
            radius="full"
            fallback="T"
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              Miguel Malagon
            </Text>
            <Text as="div" size="2" color="gray">
              Administrador
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  </DropdownMenu.Trigger>

  <DropdownMenu.Portal>
    <DropdownMenu.Content 
      className="min-w-[220px] bg-white rounded-md shadow-lg mt-5 border border-gray-200 z-[1000]"
      sideOffset={0}
      align="center"
    >
      <DropdownMenu.Label className="px-4 py-2 text-sm text-gray-500">
        Cuenta
      </DropdownMenu.Label>

      <DropdownMenu.Item className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center gap-2">
        <PersonIcon />
        Mi perfil
      </DropdownMenu.Item>

      <DropdownMenu.Item className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center gap-2">
        <GearIcon />
        Configuración
      </DropdownMenu.Item>

      <DropdownMenu.Item className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center gap-2">
        <FileTextIcon />
        Registros de actividad
      </DropdownMenu.Item>

      <DropdownMenu.Separator className="h-[1px] bg-gray-200 my-1" />

      <DropdownMenu.Item className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
        <ExitIcon />
        Cerrar sesión
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu.Root>

                  </Flex>
                </Card>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </nav>
    </Box>
  );
}
