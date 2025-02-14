import React from 'react';
import styled from 'styled-components';
import Container from '../layout/Container';
import Title from '../ui/Title';
import GradientCard from '../ui/GradiantCart';

const Categories = () => {
  const categories = [
    {
      id: 1,
      url: 'https://placehold.co/140x140',
      title: 'Battery Jump Pack 12 Volt',
      description: 'Battery Jump Pack 12 Volt',
    },
    {
      id: 2,
      url: 'https://placehold.co/140x140',
      title: 'Oil Change',
      description: 'Oil Change',
    },
    {
      id: 3,
      url: 'https://placehold.co/140x140',
      title: 'Oil Change',
      description: 'Oil Change',
    },
    {
      id: 4,
      url: 'https://placehold.co/140x140',
      title: 'Oil Change',
      description: 'Oil Change',
    },
    {
      id: 5,
      url: 'https://placehold.co/140x140',
      title: 'Oil Change',
      description: 'Oil Change',
    },
    {
      id: 6,
      url: 'https://placehold.co/140x140',
      title: 'Oil Change',
      description: 'Oil Change',
    },
  ];

  return (
    <Section>
      <Container>
        <Title title="Our Categories" subtitle="We have branches in the following cities" />
        <ImageBox>
          {categories.map((category) => (
            <GradientCard key={category.id} category={category} />
          ))}
        </ImageBox>
      </Container>
    </Section>
  );
};

export default Categories;

const Section = styled.section`
  padding: ${({ theme }) => theme.section.padding};
`;

const ImageBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
  

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;
