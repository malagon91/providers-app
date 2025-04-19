'use client';

import { Box, Container, Flex, Button, Text } from '@radix-ui/themes';
import Link from 'next/link';

export default function Navbar() {
  return (
    <Box asChild py="3" className="border-b border-gray-200">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <Container>
          <Flex justify="between" align="center">
            <Link href="/">
              <Text size="5" weight="bold">
                MyApp
              </Text>
            </Link>

            <Flex gap="3">
              <Link href="/sign-in">
                <Button variant="soft" color="gray">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="solid" color="blue">
                  Register
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </nav>
    </Box>
  );
}
