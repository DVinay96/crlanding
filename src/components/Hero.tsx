'use client';

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ChevronRight } from 'lucide-react';
import theme from '@/styles/theme';

const StyledHeroSection = styled.section`
  position: relative;
  height: 80vh;
  min-height: 600px;
  background-color: ${props => props.theme.colors.primary.dark};
  color: ${props => props.theme.colors.white};
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('/images/bg.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.5;
`;

const Container = styled.div`
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${props => props.theme.container.padding};
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroContent = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: ${props => props.theme.font.size.xl};
    opacity: 0.9;
  }
`;

const SearchForm = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  max-width: 900px;
  margin: 0 auto;
`;

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.grey[300]};
  border-radius: 4px;
  background: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.font.size.base};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.main};
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${props => props.theme.colors.secondary.main};
  color: ${props => props.theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  margin-left: auto;
  transition: background 0.2s;

  &:hover {
    background: ${props => props.theme.colors.secondary.dark};
  }
`;

const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledHeroSection>
        <HeroBackground />
        <Container>
          <HeroContent>
            <h1>BEST WAY TO UPGRADE</h1>
            <p>Find the perfect product for your vehicle every time.</p>
          </HeroContent>

          <SearchForm>
            <SearchGrid>
              <Select>
                <option>Choose Year</option>
                {Array.from({ length: 30 }, (_, i) => (
                  <option key={i} value={2024 - i}>
                    {2024 - i}
                  </option>
                ))}
              </Select>

              <Select>
                <option>Select Make</option>
              </Select>

              <Select>
                <option>Select Make first</option>
              </Select>

              <Select>
                <option>Select Part</option>
              </Select>
            </SearchGrid>

            <SearchButton>
              SEARCH
              <ChevronRight size={20} />
            </SearchButton>
          </SearchForm>
        </Container>
      </StyledHeroSection>
    </ThemeProvider>
  );
};

export default Hero;