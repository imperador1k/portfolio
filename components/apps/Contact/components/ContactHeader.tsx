import type React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  backdrop-filter: blur(12px);
  background: rgb(255 255 255 / 5%);
  border: 1px solid rgb(255 255 255 / 15%);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 0;
  padding: 2rem;

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

const ProfileSection = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;

  @media (width <= 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  @media (width <= 576px) {
    gap: 1rem;
  }
`;

const Avatar = styled.div`
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: 3px solid rgb(255 255 255 / 20%);
  border-radius: 50%;
  box-shadow: 0 4px 20px rgb(0 0 0 / 20%);
  color: white;
  display: flex;
  font-size: 2.5rem;
  font-weight: bold;
  height: 100px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100px;

  &::before {
    animation: shine 3s infinite;
    background: linear-gradient(
      45deg,
      transparent,
      rgb(255 255 255 / 20%),
      transparent
    );
    content: "";
    height: 200%;
    left: -50%;
    position: absolute;
    top: -50%;
    transform: rotate(45deg);
    width: 200%;
  }

  @keyframes shine {
    0% {
      transform: rotate(45deg) translateX(-100%);
    }

    100% {
      transform: rotate(45deg) translateX(100%);
    }
  }

  @media (width <= 768px) {
    font-size: 2rem;
    height: 90px;
    width: 90px;
  }

  @media (width <= 576px) {
    font-size: 1.75rem;
    height: 80px;
    width: 80px;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;

  @media (width <= 768px) {
    width: 100%;
  }
`;

const Name = styled.h2`
  background: linear-gradient(135deg, #667eea, #764ba2);
  background-clip: text;
  background-clip: text;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  -webkit-text-fill-color: transparent;

  @media (width <= 992px) {
    font-size: 1.75rem;
  }

  @media (width <= 768px) {
    font-size: 1.5rem;
  }

  @media (width <= 576px) {
    font-size: 1.3rem;
  }
`;

const Title = styled.p`
  color: rgb(255 255 255 / 80%);
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0 0 1rem;

  @media (width <= 992px) {
    font-size: 1.1rem;
  }

  @media (width <= 768px) {
    font-size: 1rem;
  }

  @media (width <= 576px) {
    font-size: 0.9rem;
  }
`;

const Location = styled.div`
  align-items: center;
  color: rgb(255 255 255 / 70%);
  display: flex;
  font-size: 1rem;
  gap: 0.75rem;

  @media (width <= 768px) {
    justify-content: center;
  }

  @media (width <= 576px) {
    font-size: 0.9rem;
    gap: 0.5rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 1rem;

  @media (width <= 992px) {
    gap: 1.25rem;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  @media (width <= 768px) {
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (width <= 576px) {
    gap: 0.75rem;
    grid-template-columns: 1fr;
  }
`;

const ContactItem = styled.div`
  background: rgb(255 255 255 / 8%);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgb(255 255 255 / 12%);
    transform: translateY(-2px);
  }

  @media (width <= 992px) {
    padding: 1rem;
  }

  @media (width <= 576px) {
    padding: 0.875rem;
  }
`;

const ContactLabel = styled.div`
  align-items: center;
  color: rgb(255 255 255 / 60%);
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  gap: 0.75rem;

  @media (width <= 576px) {
    font-size: 0.9rem;
    gap: 0.5rem;
  }
`;

const ContactValue = styled.div`
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 0.25rem;

  @media (width <= 992px) {
    font-size: 1rem;
  }

  @media (width <= 576px) {
    font-size: 0.9rem;
  }
`;

const ContactHeader: React.FC = () => (
    <HeaderContainer>
      <ProfileSection>
        <Avatar>
          <img
            alt="Profile"
            src="/Users/Public/Pictures/about-me.png"
            style={{
              borderRadius: "50%",
              height: "100%",
              objectFit: "cover",
              width: "100%",
            }}
          />
        </Avatar>
        <ProfileInfo>
          <Name>Miguel Santos</Name>
          <Title>Full Stack Web Developer</Title>
          <Location>
            <MapPin size={18} />
            Leiris, Portugal
          </Location>
        </ProfileInfo>
      </ProfileSection>

      <ContactGrid>
        <ContactItem>
          <ContactLabel>
            <Mail size={18} />
            Email
          </ContactLabel>
          <ContactValue>contacto@miguelweb.dev</ContactValue>
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

export default ContactHeader;
