import React from 'react';
import { ComponentProcessProps } from 'components/system/Apps/RenderComponent';
import styled from 'styled-components';
import CustomScrollbar from './styles/CustomScrollbar';
import ContactHeader from './components/ContactHeader';
import SocialLinks from './components/SocialLinks';
import SimpleContactForm from './components/SimpleContactForm';
import MapSection from './components/MapSection';

const ContactContainer = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  overflow-y: auto;
  padding: 2.5rem;
  box-sizing: border-box;
  ${CustomScrollbar}
  
  @media (max-width: 1200px) {
    padding: 2rem;
  }
  
  @media (max-width: 992px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.75rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 992px) {
    gap: 1.75rem;
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  @media (max-width: 1200px) {
    order: 2;
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  @media (max-width: 1200px) {
    order: 1;
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.3rem;
  }
`;

const EnhancedContact: React.FC<ComponentProcessProps> = ({ id }) => {
  return (
    <ContactContainer>
      <ContentWrapper>
        <LeftColumn>
          <ContactHeader />
          <MapSection />
        </LeftColumn>
        
        <RightColumn>
          <div>
            <SectionTitle>Get In Touch</SectionTitle>
            <SimpleContactForm />
          </div>
          <SocialLinks />
        </RightColumn>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default EnhancedContact;