'use client';
import Image from 'next/image';
import { Box, Container, Flex, Text, Card, Avatar } from '@radix-ui/themes';
import Link from 'next/link';
import { images } from '@/assets/images';

export default function NavbarLogin() {
  return (
    <Box
      asChild
      py="3"
      className="fixed top-0 left-0 right-0  bg-white border-b border-gray-200"
    >
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-18 overflow-hidden">
        <Container>
          <Flex justify="between" align="center">
            <Link href="/" className=" overflow-hidden">
              <Image
                className="w-[200px] h-[60px]"
                src={images.logoComplete}
                alt="logo"
              />
            </Link>
            <Flex gap="3">
              
            <Box maxWidth="240px">
	<Card variant='ghost'>
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
