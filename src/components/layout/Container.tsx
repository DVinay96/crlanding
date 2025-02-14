import React from 'react';
import styled from 'styled-components';
import { ReactNode } from 'react';

const ContainerStyled = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  padding: ${({ theme }) => theme.container.padding};
  margin: 0 auto;
`;

const Container = ({ children }: { children: ReactNode }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
