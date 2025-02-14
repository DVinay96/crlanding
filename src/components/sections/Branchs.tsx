import React from 'react';
import styled from 'styled-components';
import Container from '../layout/Container';
import Title from '../ui/Title';
import Image from 'next/image';

const Branchs = () => {
  const branches = [
    {
      id: 1,
      name: 'Audi',
      logo: 'https://placehold.co/140x140',
    },
    {
      id: 2,
      name: 'BMW',
      logo: 'https://placehold.co/140x140',
    },
    {
      id: 3,
      name: 'Mercedes Benz',
      logo: 'https://placehold.co/140x140',
    },
    {
      id: 4,
      name: 'Volkswagen',
      logo: 'https://placehold.co/140x140',
    },
    {
      id: 5,
      name: 'Volvo',
      logo: 'https://placehold.co/140x140',
    },
    {
      id: 6,
      name: 'Toyota',
      logo: 'https://placehold.co/140x140',
    },
    {
      id: 7,
      name: 'Audi',
      logo: 'https://placehold.co/140x140',
    },
    {
      id: 8,
      name: 'BMW',
      logo: 'https://placehold.co/140x140',
    },
    {
      id: 9,
      name: 'Mercedes Benz',
      logo: 'https://placehold.co/140x140',
    },
    {
      id: 10,
      name: 'Volkswagen',
      logo: 'https://placehold.co/140x140',
    },
    {
      id: 11,
      name: 'Volvo',
      logo: 'https://placehold.co/140x140',
    },
    {
      id: 12,
      name: 'Toyota',
      logo: 'https://placehold.co/140x140',
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
      isXl: true,
    },
  ];

  return (
    <Section>
      <Container>
        <Title title="Our Branchs" subtitle="We have branches in the following cities" />
        <BranchesBox>
          {branches.map((branch) => (
            <Branch key={branch.id}>
              <Image src={branch.logo} alt={branch.name} width={140} height={140} unoptimized />
            </Branch>
          ))}
        </BranchesBox>
        <ImageBox>
          {images.map((image) => (
            <OfferCard key={image.id} bg={image.color}>
              <Content>
                <TitleStyled>{image.title}</TitleStyled>
                <Description>{image.description}</Description>
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
        </ImageBox>
      </Container>
    </Section>
  );
};

export default Branchs;

const Section = styled.section`
  padding: ${({ theme }) => theme.section.padding};
`;

const BranchesBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Branch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
`;

const ImageBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;
  height: 400px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
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
`;

const Content = styled.div`
  max-width: 45%;
`;

const TitleStyled = styled.h2<{ size?: 'xl' | 'lg' | 'md' | 'sm' }>`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.family.heading};
  letter-spacing: 1px;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p<{ size?: 'xl' | 'lg' | 'md' | 'sm' }>`
  font-size: 2rem;
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
