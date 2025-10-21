import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  margin-bottom: 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 1200px) {
    padding: 1.75rem;
  }
  
  @media (max-width: 992px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  border: 3px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: rotate(45deg);
    animation: shine 3s infinite;
  }
  
  @keyframes shine {
    0% { transform: rotate(45deg) translateX(-100%); }
    100% { transform: rotate(45deg) translateX(100%); }
  }
  
  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
    font-size: 2rem;
  }
  
  @media (max-width: 576px) {
    width: 80px;
    height: 80px;
    font-size: 1.75rem;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Name = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.5rem 0;
  
  @media (max-width: 992px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.3rem;
  }
`;

const Title = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1rem 0;
  font-weight: 500;
  
  @media (max-width: 992px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    gap: 0.5rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.25rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-2px);
  }
  
  @media (max-width: 992px) {
    padding: 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.875rem;
  }
`;

const ContactLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    gap: 0.5rem;
  }
`;

const ContactValue = styled.div`
  font-size: 1.1rem;
  color: white;
  font-weight: 600;
  margin-top: 0.25rem;
  
  @media (max-width: 992px) {
    font-size: 1rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const ContactHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <ProfileSection>
        <Avatar>
          <img 
            src="/Users/Public/Pictures/about-me.png" 
            alt="Profile" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
          />
        </Avatar>
        <ProfileInfo>
          <Name>Miguel Moinho Velho</Name>
          <Title>Full Stack Web Developer</Title>
          <Location>
            <MapPin size={18} />
            Lisbon, Portugal
          </Location>
        </ProfileInfo>
      </ProfileSection>

      <ContactGrid>
        <ContactItem>
          <ContactLabel>
            <Mail size={18} />
            Email
          </ContactLabel>
          <ContactValue>miguel@moinho-velho.pt</ContactValue>
        </ContactItem>
        
        <ContactItem>
          <ContactLabel>
            <Phone size={18} />
            Phone
          </ContactLabel>
          <ContactValue>+351 963 848 158</ContactValue>
        </ContactItem>
        
        <ContactItem>
          <ContactLabel>
            <Clock size={18} />
            Availability
          </ContactLabel>
          <ContactValue>Mon-Fri, 9AM-6PM</ContactValue>
        </ContactItem>
      </ContactGrid>
    </HeaderContainer>
  );
};

export default ContactHeader;