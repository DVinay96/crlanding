import React from 'react';
import styled from 'styled-components';
import Container from '../layout/Container';
import Title from '../ui/Title';
import GradientCard from '../ui/GradiantCart';
import { useEffect, useState } from 'react';

interface Category {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  file: string;
}

interface Text {
  id: number;
  name: string;
  title: string;
  subtitle: string;
}

const Categories = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [categories, setCategories] = useState<Category[]>([]);
  const [texts, setTexts] = useState<Text>({} as Text);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await fetch(`${apiUrl}categories`);
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchTexts = async () => {
      try {
        const response = await fetch(`${apiUrl}texts`);
        const data = await response.json();
        const newData = data.data.filter((item: Text) => item.name.includes('Categorias'));
        setTexts(newData[0]);
      } catch (error) {
        console.error('Error fetching texts:', error);
      }
    };

    fetchTexts();

    fetchBranches();
    //eslint-disable-next-line
  }, []);

  return (
    <Section id="categories">
      <Container>
        <Title title={texts.title} subtitle={texts.subtitle} />
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
