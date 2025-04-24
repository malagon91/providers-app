'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Box, Container, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { images } from '@/assets/images';

export default function Navbar() {
  return (
    <Box
      asChild
      py="3"
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
    >
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-18 overflow-hidden">
        <Container>
          <Flex justify="between" align="center">
            <Link href="/" className=" overflow-hidden">
              <Image
                className="w-[60px] h-[60px]"
                src={images.logoSmall}
                alt="logo"
              />
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
