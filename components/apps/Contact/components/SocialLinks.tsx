import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import styled from 'styled-components';

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.75rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 1200px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 992px) {
    padding: 1.25rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.125rem;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
    gap: 1.25rem;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1200px) {
    gap: 1.25rem;
  }
  
  @media (max-width: 992px) {
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.4), rgba(118, 75, 162, 0.4));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
  
  svg {
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.2);
  }
  
  @media (max-width: 1200px) {
    width: 55px;
    height: 55px;
  }
  
  @media (max-width: 992px) {
    width: 50px;
    height: 50px;
  }
  
  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
  
  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
  }
`;

const SocialLinks: React.FC = () => {
  return (
    <SocialContainer>
      <SectionTitle>Connect With Me</SectionTitle>
      <SocialGrid>
        <SocialLink href="#" aria-label="GitHub">
          <Github size={28} />
        </SocialLink>
        <SocialLink href="#" aria-label="LinkedIn">
          <Linkedin size={28} />
        </SocialLink>
        <SocialLink href="#" aria-label="Twitter">
          <Twitter size={28} />
        </SocialLink>
        <SocialLink href="#" aria-label="Instagram">
          <Instagram size={28} />
        </SocialLink>
      </SocialGrid>
    </SocialContainer>
  );
};

export default SocialLinks;