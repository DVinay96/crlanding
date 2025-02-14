import React from 'react';
import styled from 'styled-components';
import Container from '../layout/Container';
import Title from '../ui/Title';
import CardProduct from '../ui/CardProduct';
import Image from 'next/image';

const TopProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Battery Jump Pack 12 Volt',
      stars: 4,
      inStock: true,
      price: 200,
      priceOld: 250,
      discount: 20,
      numberReviews: 10,
      url: 'https://placehold.co/140x140',
    },
    {
      id: 2,
      name: 'Oil Change',
      stars: 5,
      inStock: true,
      price: 50,
      priceOld: 0,
      discount: 0,
      numberReviews: 10,
      url: 'https://placehold.co/140x140',
    },
    {
      id: 3,
      name: 'A-Premium Front Catalytic Converter',
      stars: 3,
      inStock: true,
      price: 100,
      priceOld: 0,
      discount: 0,
      numberReviews: 10,
      url: 'https://placehold.co/140x140',
    },
  ];

  const images = [
    {
      id: 1,
      url: 'https://placehold.co/140x140',
      title: 'Battery Jump Pack 12 Volt',
      description: 'Battery Jump Pack 12 Volt',
      color: 'primary',
      isXl: true,
    },
    {
      id: 2,
      url: 'https://placehold.co/140x140',
      title: 'Oil Change',
      description: 'Oil Change',
      color: 'secondary',
      isXl: false,
    },
    {
      id: 3,
      url: 'https://placehold.co/140x140',
      title: 'A-Premium Front',
      description: 'A-Premium Front Catalytic Converter',
      color: 'grey',
      isXl: false,
    },
  ];

  return (
    <Section>
      <Container>
        <Title
          title="Weekly Top Selling Products"
          subtitle="From a new set of tires to an oil change, alignment to brakes."
        />
        <Grid>
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </Grid>
        <OffersGrid>
          {images.map((image) => (
            <OfferCard key={image.id} bg={image.color}>
              <Content>
                <TitleStyled size={image.isXl ? 'xl' : 'lg'}>{image.title}</TitleStyled>
                <Description size={image.isXl ? 'xl' : 'md'}>{image.description}</Description>
                {/* <ShopButton>
                  Shop now <ArrowRight />
                </ShopButton> */}
              </Content>
              <StyledImage
                src={image.url}
                alt={image.title}
                width={image.isXl ? 350 : 150}
                height={image.isXl ? 350 : 150}
                unoptimized
              />
            </OfferCard>
          ))}
        </OffersGrid>
      </Container>
    </Section>
  );
};

export default TopProducts;

const Section = styled.section`
  padding: ${({ theme }) => theme.section.padding};
`;

const Grid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  width: 100%;
  margin: 1rem auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const OfferCard = styled.div<{ bg: string }>`
  background: ${({ bg, theme }) => {
    switch (bg) {
      case 'primary':
        return theme.colors.primary.main;
      case 'secondary':
        return theme.colors.secondary.main;
      default:
        return theme.colors.grey[700];
    }
  }};
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  color: white;
  min-height: 250px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);

  &:nth-child(1) {
    grid-row: span 2;
  }
`;

const Content = styled.div`
  max-width: 50%;
`;

const TitleStyled = styled.h2<{ size?: 'xl' | 'lg' | 'md' | 'sm' }>`
  font-size: ${({ size }) => (size === 'xl' ? '3.5rem' : '2rem')};
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.family.heading};
  letter-spacing: 1px;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p<{ size?: 'xl' | 'lg' | 'md' | 'sm' }>`
  font-size: ${({ size }) => (size === 'xl' ? '2rem' : '1rem')};
  font-weight: bold;
  font-family: ${({ size, theme }) =>
    size === 'xl' ? theme.font.family.heading : theme.font.family.body};
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

/* const ShopButton = styled.button`
  background: white;
  color: black;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #eee;
  }
`; */

const StyledImage = styled(Image)`
  object-fit: contain;
  max-width: 50%;
  height: auto;
`;
