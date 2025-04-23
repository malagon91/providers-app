'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Box, Container, Flex } from '@radix-ui/themes';
import { images } from '@/assets/images';
import Link from 'next/link';

export default function Navbar() {
  return (
    <Box asChild py="3" className="border-b border-gray-200">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-20">
        <Container>
          <Flex justify="between" align="center">
            <Link href="/">
              <Image src={images.logo} alt="logo" className="h-16 w-28" />
            </Link>
            <Flex gap="3">
              <Link href="/sign-in">
                <Button variant="secondary">Login</Button>
              </Link>
              <Link href="/sign-up">
                <Button variant="default">Register</Button>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </nav>
    </Box>
  );
}
