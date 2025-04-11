'use client';

import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Banner {
  id: number;
  file: string;
  title: string;
  subtitle: string;
  color: string;
  isXl: boolean;
}

const StyledHeroSection = styled.section`
  position: relative;
  height: 90vh;
  min-height: 600px;
  padding-top: 125px;
  background-color: ${(props) => props.theme.colors.primary.dark};
  color: ${(props) => props.theme.colors.white};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100vh;
  }
`;

const HeroBackground = styled.div<{ url: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.url});
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
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [banner, setBanners] = useState<Banner>({} as Banner);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${apiUrl}banners`);
        const data = await response.json();
        const newData = data.data.slice(0, 1).map((item: Banner) => ({
          ...item,
          color: 'primary',
          isXl: true,
        }));
        setBanners(newData[0]);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchBanners();
    //eslint-disable-next-line
  }, []);
  return (
    <StyledHeroSection>
      <HeroBackground url={banner.file} />
      <Container>
        <HeroContent>
          <h1>{banner.title}</h1>
          <p>{banner.subtitle}</p>
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
