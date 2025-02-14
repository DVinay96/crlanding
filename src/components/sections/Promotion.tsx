import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Zap } from 'lucide-react';

const Promotion = () => {
  const promotionText = [
    'Get 20% off on your first purchase',
    'Free shipping on orders over $50',
    'Get a free gift on orders over $100',
  ];

  return (
    <PromotionContainer>
      <Marquee>
        <MarqueeContent>
          {promotionText.map((text, index) => (
            <PromotionStyled key={index}>
              {text} <Zap fill="#FFF" size={40} />
            </PromotionStyled>
          ))}
          {promotionText.map((text, index) => (
            <PromotionStyled key={`dup-${index}`}>
              {text}
              <Zap fill="#FFF" size={40} />
            </PromotionStyled>
          ))}
        </MarqueeContent>
      </Marquee>
    </PromotionContainer>
  );
};

export default Promotion;

const scrollAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const PromotionContainer = styled.div`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const MarqueeContent = styled.div`
  display: flex;
  animation: ${scrollAnimation} 10s linear infinite;
  min-width: 200%;
`;

const PromotionStyled = styled.span`
  color: white;
  padding: 1rem;
  margin-right: 2rem;
  font-weight: bold;
  white-space: nowrap;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.font.family.heading};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    margin-left: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
