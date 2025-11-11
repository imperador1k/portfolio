import type React from 'react';
import styled from 'styled-components';
import CustomScrollbar from 'components/apps/Contact/styles/CustomScrollbar';
import ContactHeader from 'components/apps/Contact/components/ContactHeader';
import SocialLinks from 'components/apps/Contact/components/SocialLinks';
import SimpleContactForm from 'components/apps/Contact/components/SimpleContactForm';
import MapSection from 'components/apps/Contact/components/MapSection';
import { type ComponentProcessProps } from 'components/system/Apps/RenderComponent';

const ContactContainer = styled.div`
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
  padding: 2.5rem;
  width: 100%;
  ${CustomScrollbar}
  
  @media (width <= 1200px) {
    padding: 2rem;
  }
  
  @media (width <= 992px) {
    padding: 1.5rem;
  }
  
  @media (width <= 768px) {
    padding: 1rem;
  }
  
  @media (width <= 576px) {
    padding: 0.75rem;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: 1400px;
  
  @media (width <= 1200px) {
    gap: 2rem;
    grid-template-columns: 1fr;
  }
  
  @media (width <= 992px) {
    gap: 1.75rem;
  }
  
  @media (width <= 768px) {
    gap: 1.5rem;
  }
  
  @media (width <= 576px) {
    gap: 1rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  @media (width <= 1200px) {
    order: 2;
  }
  
  @media (width <= 768px) {
    gap: 1.5rem;
  }
  
  @media (width <= 576px) {
    gap: 1rem;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  @media (width <= 1200px) {
    order: 1;
  }
  
  @media (width <= 768px) {
    gap: 1.5rem;
  }
  
  @media (width <= 576px) {
    gap: 1rem;
  }
`;

const SectionTitle = styled.h2`
  background: linear-gradient(135deg, #667eea, #764ba2);
  background-clip: text;
  background-clip: text;
  border-bottom: 2px solid rgb(255 255 255 / 10%);
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 1.5rem;
  padding-bottom: 1rem;
  text-align: center;
  -webkit-text-fill-color: transparent;
  
  @media (width <= 768px) {
    font-size: 1.5rem;
  }
  
  @media (width <= 576px) {
    font-size: 1.3rem;
  }
`;

const EnhancedContact: React.FC<ComponentProcessProps> = ({ id }) => (
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

export default EnhancedContact;