import styled from "styled-components";

const StyledBootLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10001;
  transition: opacity 0.5s ease;
  
  .boot-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  
  .windows-logo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 6px;
    width: 140px;
    height: 140px;
  }
  
  .logo-square {
    background: #00adef;
    animation: pulse 2s infinite;
    border-radius: 8px;
    
    &:nth-child(1) {
      border-radius: 8px 0 0 0;
    }
    
    &:nth-child(2) {
      border-radius: 0 8px 0 0;
      animation-delay: 0.2s;
    }
    
    &:nth-child(3) {
      border-radius: 0 0 0 8px;
      animation-delay: 0.4s;
    }
    
    &:nth-child(4) {
      border-radius: 0 0 8px 0;
      animation-delay: 0.6s;
    }
  }
  
  .loading-text {
    color: #fff;
    font-family: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
  
  .advice-text {
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.3px;
    text-align: center;
    max-width: 320px;
    line-height: 1.4;
    animation: fadeIn 1s ease-in-out 2s forwards;
    opacity: 0;
  }
  
  .progress-bar {
    width: 320px;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    width: 0%;
    background: #00adef;
    border-radius: 2px;
    animation: loading 5s ease-in-out forwards; /* Changed to 5s to match the timeout */
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
  }
  
  @keyframes loading {
    0% {
      width: 0%;
    }
    10% {
      width: 10%;
    }
    20% {
      width: 20%;
    }
    30% {
      width: 30%;
    }
    40% {
      width: 40%;
    }
    50% {
      width: 50%;
    }
    60% {
      width: 60%;
    }
    70% {
      width: 70%;
    }
    80% {
      width: 80%;
    }
    90% {
      width: 90%;
    }
    100% {
      width: 100%;
    }
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export default StyledBootLoader;