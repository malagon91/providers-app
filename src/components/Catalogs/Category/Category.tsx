'use client';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Container, Box } from '@radix-ui/themes';
import { createClient } from '@/utils/supabase/client';

const Category = () => {
  useEffect(() => {
    const gett = async () => {
      const supabase = createClient();

      const { data, error } = await supabase.from('category').select('*');

      if (error) {
        console.error('Supabase error:', error);
        return;
      }
      toast.success('Successfully retrieved data!');
      console.log('Retrieved data:', data);
    };
    gett();
  }, []);

  return (
    <Container size="4">
      <p>Categorias</p>
    </Container>
  );
};

export default Category;
