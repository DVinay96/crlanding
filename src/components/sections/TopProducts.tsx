import React from 'react';
import styled from 'styled-components';
import Container from '../layout/Container';
import Title from '../ui/Title';
import CardProduct from '../ui/CardProduct';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Banner {
  id: number;
  file: string;
  title: string;
  subtitle: string;
  color: string;
  isXl: boolean;
}

interface TopProduct {
  id: number;
  name: string;
  stars: number;
  inStock: boolean;
  price: number;
  priceOld: number;
  discount: number;
  numberReviews: number;
  file: string;
}

interface Text {
  id: number;
  name: string;
  title: string;
  subtitle: string;
}

const TopProducts = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [topProducts, setTopProducts] = useState<TopProduct[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [texts, setTexts] = useState<Text>({} as Text);

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}top-products`);
        const data = await response.json();
        setTopProducts(data.data);
      } catch (error) {
        console.error('Error fetching topProducts:', error);
      }
    };

    const fetchBanners = async () => {
      try {
        const response = await fetch(`${apiUrl}banners`);
        const data = await response.json();
        const newData = data.data.slice(1, 4).map((item: Banner, index: number) => ({
          ...item,
          color: index === 0 ? 'primary' : index === 1 ? 'secondary' : 'grey',
          isXl: index === 0 ? true : false,
        }));
        setBanners(newData);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    const fetchTexts = async () => {
      try {
        const response = await fetch(`${apiUrl}texts`);
        const data = await response.json();
        const newData = data.data.filter((item: Text) => item.name.includes('top'));
        setTexts(newData[0]);
      } catch (error) {
        console.error('Error fetching texts:', error);
      }
    };

    fetchTexts();
    fetchBanners();
    fetchTopProducts();
    //eslint-disable-next-line
  }, []);

  return (
    <Section id="top">
      <Container>
        <Title title={texts.title} subtitle={texts.subtitle} />
        <Grid>
          {topProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </Grid>
        <OffersGrid>
          {banners.map((image) => (
            <OfferCard key={image.id} bg={image.color}>
              <Content>
                <TitleStyled size={image.isXl ? 'xl' : 'lg'}>{image.title}</TitleStyled>
                <Description size={image.isXl ? 'xl' : 'md'}>{image.subtitle}</Description>
                {/* <ShopButton>
                  Shop now <ArrowRight />
                </ShopButton> */}
              </Content>
              <StyledImage
                src={image.file}
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
