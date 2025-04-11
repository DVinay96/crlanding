'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
// import { Phone, Clock, MessageCircle, Search, Heart, ShoppingCart, User, Menu } from 'lucide-react';
import { Phone, Clock, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderWrapper>
      <TopBar>
        <Container>
          <TopBarContent>
            <InfoGroup>
              <InfoItem>
                <Phone size={16} />
                <span>
                  Talk to the experts. Call us <Blue>+1(800) 123 456</Blue>
                </span>
              </InfoItem>
              <InfoItem>
                <Clock size={16} />
                <span>Opening hour: 8am - 10pm</span>
              </InfoItem>
            </InfoGroup>
          </TopBarContent>
        </Container>
      </TopBar>

      <MainHeader>
        <Container>
          <MainHeaderContent>
            <Image
              src={'/images/logo.svg'}
              alt="Autosoe Logo"
              width={150} // Set appropriate width
              height={40} // Set appropriate height
            />
            <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
              <Menu size={24} color="white" />
            </MobileMenuButton>

            <Navigation isOpen={isOpen}>
              <LogoNav
                src={'/images/logo.svg'}
                alt="Autosoe Logo"
                width={150} // Set appropriate width
                height={40} // Set appropriate height
              />

              <ClosedButton onClick={() => setIsOpen(!isOpen)}>
                <X size={24} color="black" />
              </ClosedButton>

              <NavLink href="/" className="active">
                Home
              </NavLink>
              <NavLink href="/#top">Top</NavLink>
              <NavLink href="/#brands">Marcas</NavLink>
              <NavLink href="/#categories">Categorias</NavLink>

              {/* <InfoGroup>
                <IconButton>
                  <Search size={24} />
                </IconButton>
                <IconButton>
                  <Heart size={24} />
                  <Badge>15</Badge>
                </IconButton>
                <IconButton>
                  <ShoppingCart size={24} />
                  <Badge>0</Badge>
                </IconButton>
                <IconButton>
                  <User size={24} />
                </IconButton>
              </InfoGroup> */}
            </Navigation>
          </MainHeaderContent>
        </Container>
      </MainHeader>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100vw;
  position: absolute;
  z-index: 1;
`;

const TopBar = styled.div`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem ${({ theme }) => theme.container.padding};
  border-top: 5px solid ${({ theme }) => theme.colors.primary.main};
  border-bottom: solid 1px ${({ theme }) => theme.colors.grey[700]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-bottom: none;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
`;

const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const InfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.font.size.sm};
`;

const MainHeader = styled.div`
  background: transparent;
  padding: 1rem ${({ theme }) => theme.container.padding};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const MainHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 90%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.2s;
  padding: 0.5rem 1rem;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary.main};
  }

  &.active {
    color: ${({ theme }) => theme.colors.secondary.main};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    color: ${({ theme }) => theme.colors.grey[900]};
    padding: 0;
  }
`;

/* const IconButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.grey[900]};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.main};
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.xs};
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`; */

const MobileMenuButton = styled.button`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    position: absolute;
    left: 1rem;
  }
`;

const Blue = styled.span`
  color: ${({ theme }) => theme.colors.secondary.main};
`;

const LogoNav = styled(Image)`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    align-self: center;
  }
`;

const ClosedButton = styled.button`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    position: absolute;
    right: 1rem;
  }
`;
