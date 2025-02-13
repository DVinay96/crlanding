'use client';

import Hero from '@/components/Hero';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
`;

export default function Home() {
  return (
    <PageContainer>
      <Hero />
    </PageContainer>
  );
}