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

export default function NavbarAuth() {
  const { selectedMenuItem } = useMainStore();
  return (
    <Box
      asChild
      py="3"
      className="fixed top-0 left-0 right-0  bg-white border-b border-gray-200"
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
            <Flex gap="3">
              <Box maxWidth="240px">
                <Card variant="ghost">
                  <Flex gap="3" align="center">
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
            </Flex>
          </Flex>
        </Container>
      </nav>
    </Box>
  );
}
