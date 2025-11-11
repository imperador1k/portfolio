import type React from 'react';
import styled from 'styled-components';
import { MapPin, Globe } from 'lucide-react';
import CustomScrollbar from 'components/apps/Contact/styles/CustomScrollbar';

const MapContainer = styled.div`
  backdrop-filter: blur(12px);
  background: rgb(255 255 255 / 5%);
  border: 1px solid rgb(255 255 255 / 15%);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgb(0 0 0 / 20%);
  margin-top: 0;
  padding: 2rem;
  ${CustomScrollbar}
  
  @media (width <= 1200px) {
    padding: 1.75rem;
  }
  
  @media (width <= 992px) {
    padding: 1.5rem;
  }
  
  @media (width <= 768px) {
    padding: 1.25rem;
  }
  
  @media (width <= 576px) {
    padding: 1rem;
  }
`;

const MapTitle = styled.h3`
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  background-clip: text;
  background-clip: text;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  gap: 0.75rem;
  justify-content: center;
  margin: 0 0 1.5rem;
  -webkit-text-fill-color: transparent;
  
  @media (width <= 768px) {
    font-size: 1.2rem;
    gap: 0.6rem;
  }
  
  @media (width <= 576px) {
    font-size: 1.1rem;
    gap: 0.5rem;
  }
`;

const MapWrapper = styled.div`
  align-items: center;
  background: linear-gradient(135deg, rgb(102 126 234 / 10%), rgb(118 75 162 / 10%));
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 16px;
  display: flex;
  height: 250px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  
  @media (width <= 1200px) {
    height: 220px;
  }
  
  @media (width <= 992px) {
    height: 200px;
  }
  
  @media (width <= 768px) {
    height: 180px;
  }
  
  @media (width <= 576px) {
    height: 160px;
  }
`;

const MapOverlay = styled.div`
  backdrop-filter: blur(10px);
  background: rgb(0 0 0 / 30%);
  border-radius: 16px;
  color: white;
  max-width: 90%;
  padding: 2rem;
  text-align: center;
  z-index: 2;
  
  @media (width <= 1200px) {
    padding: 1.75rem;
  }
  
  @media (width <= 992px) {
    padding: 1.5rem;
  }
  
  @media (width <= 768px) {
    max-width: 95%;
    padding: 1.25rem;
  }
  
  @media (width <= 576px) {
    padding: 1rem;
  }
`;

const MapIcon = styled.div`
  align-items: center;
  background: linear-gradient(135deg, rgb(102 126 234 / 30%), rgb(118 75 162 / 30%));
  border: 2px solid rgb(255 255 255 / 20%);
  border-radius: 50%;
  display: flex;
  height: 70px;
  justify-content: center;
  margin: 0 auto 1.5rem;
  width: 70px;
  
  @media (width <= 768px) {
    height: 60px;
    margin-bottom: 1.25rem;
    width: 60px;
  }
  
  @media (width <= 576px) {
    height: 50px;
    margin-bottom: 1rem;
    width: 50px;
  }
`;

const LocationText = styled.p`
  background: linear-gradient(135deg, #667eea, #764ba2);
  background-clip: text;
  background-clip: text;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  -webkit-text-fill-color: transparent;
  
  @media (width <= 992px) {
    font-size: 1.2rem;
  }
  
  @media (width <= 768px) {
    font-size: 1.1rem;
  }
  
  @media (width <= 576px) {
    font-size: 1rem;
  }
`;

const AddressText = styled.p`
  color: rgb(255 255 255 / 80%);
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 0 1rem;
  
  @media (width <= 992px) {
    font-size: 0.95rem;
  }
  
  @media (width <= 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
  
  @media (width <= 576px) {
    font-size: 0.85rem;
  }
`;

const ServiceText = styled.p`
  color: rgb(255 255 255 / 70%);
  font-size: 1rem;
  font-style: italic;
  margin: 0;
  
  @media (width <= 992px) {
    font-size: 0.95rem;
  }
  
  @media (width <= 768px) {
    font-size: 0.9rem;
  }
  
  @media (width <= 576px) {
    font-size: 0.85rem;
  }
`;

const MapPattern = styled.div`
  animation: rotate 20s linear infinite;
  background: 
    radial-gradient(circle at 30% 30%, rgb(102 126 234 / 15%) 0%, transparent 25%),
    radial-gradient(circle at 70% 70%, rgb(118 75 162 / 15%) 0%, transparent 25%),
    radial-gradient(circle at 50% 50%, rgb(102 126 234 / 10%) 0%, transparent 30%);
  height: 300%;
  position: absolute;
  width: 300%;
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const MapSection: React.FC = () => (
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

export default MapSection;