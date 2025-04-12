'use client';

import React from 'react';
import styled from 'styled-components';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
// import Link from 'next/link';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.grey[900]};
  color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 3rem ${({ theme }) => theme.container.padding};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const Logo = styled.img`
  height: 3.5rem;
  margin-bottom: .5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: ${({ theme }) => theme.colors.secondary.main};
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`;

/* const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.main};
  }
`; */

const NewsletterForm = styled.form`
  margin: 1rem 0;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[700]};
  background: ${({ theme }) => theme.colors.grey[800]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary.main};
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary.dark};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary.main};
    }
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey[800]};
  padding: 1.5rem ${({ theme }) => theme.container.padding};
`;

const BottomContent = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  gap: 1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Grid>
          <ContactInfo>
            <Logo src={'/images/logo.svg'} alt="Logo" />
            <InfoItem>
              <Phone size={20} />
              <span>2221258944</span>
            </InfoItem>
            <InfoItem>
              <Mail size={20} />
              <span>ventas@crdiesel.com.mx</span>
            </InfoItem>
            <InfoItem>
              <MapPin size={20} />
              <span>México 150, Vista Hermosa, 75200 Tepeaca, Pue.</span>
            </InfoItem>
          </ContactInfo>

          <FooterSection>
            {/* <h3>Quick Links</h3>
            <FooterLinks>
              <li>
                <FooterLink href="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
              <li>
                <FooterLink href="/shop">Shop</FooterLink>
              </li>
              <li>
                <FooterLink href="/login">Login</FooterLink>
              </li>
            </FooterLinks> */}
          </FooterSection>

          <FooterSection>
          {/*   <h3>Customer Service</h3>
            <FooterLinks>
              <li>
                <FooterLink href="/shipping">Shipping Policy</FooterLink>
              </li>
              <li>
                <FooterLink href="/returns">Returns & Exchanges</FooterLink>
              </li>
              <li>
                <FooterLink href="/faq">FAQs</FooterLink>
              </li>
              <li>
                <FooterLink href="/terms">Terms & Conditions</FooterLink>
              </li>
            </FooterLinks> */}
          </FooterSection>

          <FooterSection>
            <h3>Suscripción</h3>
            <p>Registra tu correo electrónico y obten promociones exclusivas</p>
            <NewsletterForm>
              <InputWrapper>
                <Input type="email" placeholder="Your email" />
                <Button type="submit">Suscríbete</Button>
              </InputWrapper>
            </NewsletterForm>
            <SocialLinks>
              <a href="#">
                <Facebook size={24} />
              </a>
              <a href="#">
                <Twitter size={24} />
              </a>
              <a href="#">
                <Instagram size={24} />
              </a>
              <a href="#">
                <Youtube size={24} />
              </a>
            </SocialLinks>
          </FooterSection>
        </Grid>
      </Container>

      <BottomBar>
        <BottomContent>
          <p>&copy; 2025 CRDiesel. All rights reserved.</p>
          <PaymentMethods>
           {/*  <img src="/api/placeholder/50/30" alt="Payment Method" />
            <img src="/api/placeholder/50/30" alt="Payment Method" />
            <img src="/api/placeholder/50/30" alt="Payment Method" />
            <img src="/api/placeholder/50/30" alt="Payment Method" /> */}
          </PaymentMethods>
        </BottomContent>
      </BottomBar>
    </FooterWrapper>
  );
};

export default Footer;
