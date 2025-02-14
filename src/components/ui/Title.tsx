import React from 'react';
import styled from 'styled-components';
import { LoaderPinwheel } from 'lucide-react';

interface TitleProps {
  action?: React.ReactNode;
  title: string;
  subtitle: string;
}

const Title = (props: TitleProps) => {
  const { action, title, subtitle } = props;
  return (
    <TitleStyled>
      <Info>
        <Principal>
          <LoaderPinwheel />
          {title}
        </Principal>
        <Subtitle>{subtitle}</Subtitle>
      </Info>
      <Action>{action}</Action>
    </TitleStyled>
  );
};

export default Title;

const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`;

const Principal = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.font.family.heading};
  letter-spacing: 0.5px;
  svg {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary.main};
  }
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

const Action = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
