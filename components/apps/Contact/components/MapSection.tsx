import React from 'react';
import styled from 'styled-components';
import { MapPin, Globe } from 'lucide-react';
import CustomScrollbar from '../styles/CustomScrollbar';

const MapContainer = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  margin-top: 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  ${CustomScrollbar}
  
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

const MapTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    gap: 0.6rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
    gap: 0.5rem;
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 1200px) {
    height: 220px;
  }
  
  @media (max-width: 992px) {
    height: 200px;
  }
  
  @media (max-width: 768px) {
    height: 180px;
  }
  
  @media (max-width: 576px) {
    height: 160px;
  }
`;

const MapOverlay = styled.div`
  text-align: center;
  color: white;
  z-index: 2;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  max-width: 90%;
  
  @media (max-width: 1200px) {
    padding: 1.75rem;
  }
  
  @media (max-width: 992px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    max-width: 95%;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const MapIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 1.25rem;
  }
  
  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
  }
`;

const LocationText = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 992px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const AddressText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1rem 0;
  line-height: 1.5;
  
  @media (max-width: 992px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

const ServiceText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-style: italic;
  
  @media (max-width: 992px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

const MapPattern = styled.div`
  position: absolute;
  width: 300%;
  height: 300%;
  background: 
    radial-gradient(circle at 30% 30%, rgba(102, 126, 234, 0.15) 0%, transparent 25%),
    radial-gradient(circle at 70% 70%, rgba(118, 75, 162, 0.15) 0%, transparent 25%),
    radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 30%);
  animation: rotate 20s linear infinite;
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const MapSection: React.FC = () => {
  return (
    <MapContainer>
      <MapTitle>
        <Globe size={24} />
        Location & Services
      </MapTitle>
      <MapWrapper>
        <MapPattern />
        <MapOverlay>
          <MapIcon>
            <MapPin size={35} />
          </MapIcon>
          <LocationText>Lisbon, Portugal</LocationText>
          <AddressText>Available for remote work worldwide</AddressText>
          <ServiceText>Full Stack Development • Web Applications • Mobile Solutions</ServiceText>
        </MapOverlay>
      </MapWrapper>
    </MapContainer>
  );
};

export default MapSection;