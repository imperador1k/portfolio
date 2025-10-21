import styled from "styled-components";

const StyledLockScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/Users/Public/Pictures/windows11.jpg') no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
  pointer-events: none;
  backdrop-filter: blur(5px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
  }
  
  // Stage 1: Only time and date visible
  &.stage-1 {
    .lock-screen-content {
      .time-display {
        opacity: 1;
        transform: translateY(0);
        animation: none;
      }
      
      .user-info {
        display: none;
      }
    }
    
    .unlock-hint {
      opacity: 1;
    }
  }
  
  // Stage 2: User info visible with blur effect
  &.stage-2 {
    &::before {
      backdrop-filter: blur(25px); /* Increased blur effect for more modern look */
      background: rgba(0, 0, 0, 0.2); /* Darker overlay for better contrast */
    }
    
    .lock-screen-content {
      .time-display {
        opacity: 0;
        transform: scale(0.8) translateY(-50px);
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .user-info {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); /* More fluid easing */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* Removed height: 100% as requested */
      }
    }
    
    .unlock-hint {
      opacity: 0;
    }
  }
  
  .lock-screen-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    color: white;
    text-align: center;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  
  .time-display {
    margin-bottom: 40px;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .time {
    font-size: 5.5rem; /* Reduced from 7rem */
    font-weight: 300;
    letter-spacing: -3px;
    margin-bottom: 10px;
    font-family: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, sans-serif;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
  
  .date {
    font-size: 1.7rem; /* Reduced from 2rem */
    font-weight: 300;
    font-family: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, sans-serif;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  
  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    opacity: 0;
    transform: translateY(20px);
  }
  
  .user-avatar {
    width: 160px; /* Increased size for better visibility */
    height: 160px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5); /* More visible border */
    overflow: hidden;
    margin-bottom: 30px; /* Increased margin */
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.3); /* Enhanced shadow */
    position: relative;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth transition */
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2); /* Enhanced inset shadow */
    }
    
    &:hover {
      transform: scale(1.05); /* Slight scale on hover */
      border-color: rgba(255, 255, 255, 0.8); /* Brighter border on hover */
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      image-rendering: -webkit-optimize-contrast;
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth transition */
    }
  }
  
  .unlock-arrow {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
      border-color: rgba(255, 255, 255, 0.5);
    }
    
    &:active {
      transform: scale(0.95);
    }
    
    svg {
      transition: all 0.3s ease;
    }
    
    &:hover svg {
      transform: translateX(2px);
    }
  }
  
  .unlock-hint {
    position: absolute;
    bottom: 50px;
    font-size: 1rem; /* Reduced from 1.2rem */
    font-weight: 300;
    color: rgba(255, 255, 255, 0.8); /* Slightly more opaque */
    font-family: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, sans-serif;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
  }
  
  @media (max-width: 768px) {
    .time {
      font-size: 3.5rem; /* Reduced from 4rem */
      letter-spacing: -2px;
    }
    
    .date {
      font-size: 1.3rem; /* Reduced from 1.5rem */
    }
    
    .user-avatar {
      width: 120px; /* Reduced from 120px */
      height: 120px;
    }
    
    &.stage-2 {
      .lock-screen-content {
        .time-display {
          transform: scale(0.7) translateY(-30px);
        }
      }
    }
  }
`;

export default StyledLockScreen;