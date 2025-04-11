import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Stars from './Stars';

interface CardProductProps {
  product: {
    id: number;
    name: string;
    stars: number;
    inStock: boolean;
    price: number;
    priceOld: number;
    discount: number;
    numberReviews: number;
    file: string;
  };
}

const CardProduct = (props: CardProductProps) => {
  const { product } = props;
  return (
    <CardStyled>
      <ImageContainer>
        <Image src={product.file} alt={product.name} width={140} height={140} unoptimized />
        {product.discount > 0 && <Discount>- {product.discount}%</Discount>}
      </ImageContainer>
      <div>
        <TitleBox>{product.name}</TitleBox>
        <Ranking>
          <Stars rating={product.stars} />
          <div>({Math.floor(Math.random() * 100) + 1})</div>
          <span>{product.inStock ? 'In stock' : null}</span>
        </Ranking>
        <PriceBox>
          <Price>${product.price}</Price>
          {product.discount > 0 && (
            <Old>${(product.price / (1 - product.discount / 100)).toFixed(2)}</Old>
          )}
        </PriceBox>
      </div>
    </CardStyled>
  );
};

export default CardProduct;

const CardStyled = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary.main};
  transition: box-shadow 0.3s ease;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  min-width: 140px;
  border-radius: 0.5rem;
  overflow: hidden;
  img {
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Discount = styled.div`
  position: absolute;
  top: 15%;
  left: 15%;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
`;

const TitleBox = styled.h3`
  font-size: 1rem;
`;

const Ranking = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  div {
    font-size: 0.8rem;
    color: #666;
  }
  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.secondary.main};
  }
`;

const PriceBox = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary.main};
`;

const Old = styled.div`
  font-size: 0.875rem;
  color: #666;
  text-decoration: line-through;
`;
