import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Text {
  id: number;
  name: string;
  title: string;
  subtitle: string;
}

const Promotion = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [texts, setTexts] = useState<string[]>([]);
  console.log('🦙 ~ Promotion ~ texts:', texts);
  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const response = await fetch(`${apiUrl}texts`);
        const data = await response.json();
        const newData = data.data
          .filter((item: Text) => item.name.includes('Tira'))
          .map((item: Text) => item.title);
        setTexts(newData);
      } catch (error) {
        console.error('Error fetching texts:', error);
      }
    };

    fetchTexts();
    //eslint-disable-next-line
  }, []);

  return (
    <PromotionContainer>
      <Marquee>
        <MarqueeContent>
          {texts.map((text, index) => (
            <PromotionStyled key={index}>
              {text} <Zap fill="#FFF" size={40} />
            </PromotionStyled>
          ))}
          {texts.map((text, index) => (
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
