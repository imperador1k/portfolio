import styled from 'styled-components';

export const StyledContact = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  overflow: hidden;
`;

export const ContactContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
`;

export const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  z-index: 2;
`;

export const ContactIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #e94560 0%, #0f3460 100%);
  border-radius: 1rem;
  margin-bottom: 1.5rem;
`;

export const ContactTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #e94560 0%, #0f3460 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

export const ContactDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.125rem;
  max-width: 32rem;
  margin: 0 auto;
  line-height: 1.6;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 32rem;
  position: relative;
  z-index: 2;
`;

export const BackgroundEffect = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(233, 69, 96, 0.05) 0%, rgba(15, 52, 96, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  border-radius: 1.5rem;
  pointer-events: none;
`;

export const FloatingOrb1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 8rem;
  height: 8rem;
  background: rgba(233, 69, 96, 0.1);
  border-radius: 50%;
  filter: blur(3rem);
  pointer-events: none;
`;

export const FloatingOrb2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 6rem;
  height: 6rem;
  background: rgba(15, 52, 96, 0.1);
  border-radius: 50%;
  filter: blur(3rem);
  pointer-events: none;
`;
