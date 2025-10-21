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
  transition: opacity 0.5s ease;
  opacity: 0;
  pointer-events: none;
  
  .lock-screen-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    color: white;
    text-align: center;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  
  .time-display {
    margin-bottom: 40px;
  }
  
  .time {
    font-size: 7rem;
    font-weight: 300;
    letter-spacing: -3px;
    margin-bottom: 10px;
  }
  
  .date {
    font-size: 2rem;
    font-weight: 300;
  }
  
  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
  
  .user-avatar {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.2);
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .user-name {
    font-size: 2rem;
    font-weight: 300;
  }
  
  .unlock-prompt {
    position: absolute;
    bottom: 50px;
    font-size: 1.2rem;
    font-weight: 300;
    background: rgba(0, 0, 0, 0.2);
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
    
    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
  
  @media (max-width: 768px) {
    .time {
      font-size: 4rem;
      letter-spacing: -2px;
    }
    
    .date {
      font-size: 1.5rem;
    }
    
    .user-avatar {
      width: 120px;
      height: 120px;
    }
    
    .user-name {
      font-size: 1.5rem;
    }
  }
`;

export default StyledLockScreen;