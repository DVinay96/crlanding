'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { Phone, Clock, MessageCircle, Search, Heart, ShoppingCart, User, Menu } from 'lucide-react';
import logocrd from "../../public/images/logocrd.png"
import Image from 'next/image';

const HeaderWrapper = styled.header`
  width: 100%;
`;

const TopBar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem ${({ theme }) => theme.container.padding};
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
    gap: 1rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.font.size.sm};
`;

const MainHeader = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 1rem ${({ theme }) => theme.container.padding};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.grey[900]};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.main};
  }

  &.active {
    color: ${({ theme }) => theme.colors.secondary.main};
  }
`;

const IconButton = styled.button`
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
`;

const MobileMenuButton = styled.button`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

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
                <span>+1(800) 123 456</span>
              </InfoItem>
              <InfoItem>
                <Clock size={16} />
                <span>Opening hour: 8am - 10pm</span>
              </InfoItem>
              <InfoItem>
                <MessageCircle size={16} />
                <span>Live Chat! Chat with an Expert</span>
              </InfoItem>
            </InfoGroup>
            <div>
              <span>★★★★★ 4.9 Google Reviews</span>
            </div>
          </TopBarContent>
        </Container>
      </TopBar>

      <MainHeader>
        <Container>
          <MainHeaderContent>
          <Image 
          src={logocrd} 
          alt="Autosoe Logo" 
          width={300} // Set appropriate width
          height={40} // Set appropriate height
        />            
            <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
              <Menu size={24} />
            </MobileMenuButton>

            <Navigation isOpen={isOpen}>
              <NavLink href="/" className="active">Home</NavLink>
              <NavLink href="/shop">Shop</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/contact">Contact</NavLink>

              <InfoGroup>
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
              </InfoGroup>
            </Navigation>
          </MainHeaderContent>
        </Container>
      </MainHeader>
    </HeaderWrapper>
  );
};

export default Header;