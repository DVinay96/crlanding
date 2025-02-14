'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 3rem ${({ theme }) => theme.container.padding};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const CategoryCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.grey[900]};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryIcon = styled.div`
  width: 6rem;
  height: 6rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const categories = [
  { name: 'Deal of the day', products: '1 Product', slug: 'deals' },
  { name: 'Lights & Optics', products: '4 Products', slug: 'lights-optics' },
  { name: 'Exhaust System', products: '10 Products', slug: 'exhaust' },
  { name: 'Braking System', products: '4 Products', slug: 'braking' },
  { name: 'Cooling System', products: '4 Products', slug: 'cooling' },
  { name: 'Tires & Wheels', products: '3 Products', slug: 'tires-wheels' },
  { name: 'Suspension', products: '5 Products', slug: 'suspension' },
];

const CategoryGrid = () => {
  return (
    <Container>
      <Grid>
        {categories.map((category) => (
          <CategoryCard key={category.slug} href={`/shop/${category.slug}`}>
            <CategoryIcon>
              <img src="/api/placeholder/100/100" alt={category.name} />
            </CategoryIcon>
            <div>
              <h3>{category.name}</h3>
              <p>{category.products}</p>
            </div>
          </CategoryCard>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryGrid;