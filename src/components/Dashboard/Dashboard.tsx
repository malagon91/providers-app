'use client';
import React, { FC } from 'react';
import { Box, Container, Flex, Text } from '@radix-ui/themes';
interface Props {
  user: any;
}

const Dashboard: FC<Props> = ({ user }) => {
  return (
    <Box asChild py="3" className="">
      <Container>
        <Text color="ruby">{user?.user_metadata?.sub || 'Usuario'}</Text>
      </Container>
    </Box>
  );
};

export default Dashboard;
