'use client';

import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';

const StyledHeroSection = styled.section`
  position: relative;
  height: 80vh;
  min-height: 600px;
  padding-top: 125px;
  background-color: ${(props) => props.theme.colors.primary.dark};
  color: ${(props) => props.theme.colors.white};
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('/images/bg.jpg');
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
    opacity: 0.7;
  }
`;

const Container = styled.div`
  max-width: ${(props) => props.theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.container.padding};
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroContent = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  font-family: ${(props) => props.theme.font.family.heading};
  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
    letter-spacing: 0.1rem;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: ${(props) => props.theme.font.size.xl};
    font-family: ${(props) => props.theme.font.family.body};
    font-size: 1rem;
  }
`;

const SearchForm = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 120px;
  gap: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.grey[300]};
  border-radius: 4px;
  background: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.font.size.base};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary.main};
  }
`;

const SearchButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.secondary.main};
  color: ${(props) => props.theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  margin-left: auto;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.secondary.dark};
  }
`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <HeroBackground />
      <Container>
        <HeroContent>
          <h1>BEST WAY TO UPGRADE</h1>
          <p>Find the perfect product for your vehicle every time.</p>
        </HeroContent>

        <SearchForm>
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
          <SearchButton>
            SEARCH
            <ChevronRight size={20} />
          </SearchButton>
        </SearchForm>
      </Container>
    </StyledHeroSection>
  );
};

export default Hero;
