'use client';

import Hero from '@/components/sections/Hero';
import styled from 'styled-components';
import TopProducts from '@/components/sections/TopProducts';
import Promotion from '@/components/sections/Promotion';
import Branchs from '@/components/sections/Branchs';
import Categories from '@/components/sections/Categories';

const PageContainer = styled.div`
  width: 100%;
`;

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <TopProducts />
      <Promotion />
      <Branchs />
      <Categories />
    </PageContainer>
  );
}