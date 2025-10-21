import styled from "styled-components";

const StyledProfessionalExperience = styled.div`
  background-color: rgba(32, 32, 32, 0.85);
  color: #ffffff;
  height: 100%;
  overflow: hidden;
  font-family: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, sans-serif;
  
  .about-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .header {
    padding: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  
  .profile {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .avatar-placeholder {
    width: 80px;
    height: 80px;
    background: rgba(0, 120, 215, 0.2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .windows-logo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 3px;
    width: 40px;
    height: 40px;
  }
  
  .logo-square {
    background: #00adef;
    border-radius: 2px;
  }
  
  .name-title h1 {
    margin: 0 0 8px 0;
    font-weight: 300;
    font-size: 24px;
    color: #ffffff;
  }
  
  .name-title p {
    margin: 0;
    color: #a0a0a0;
    font-size: 14px;
  }
  
  .sections {
    flex: 1;
    overflow-y: auto;
    padding: 24px;
  }
  
  .intro p {
    margin: 0 0 24px 0;
    font-size: 16px;
    line-height: 1.6;
    color: #e1e1e1;
  }
  
  h2 {
    margin: 0 0 16px 0;
    font-weight: 300;
    font-size: 20px;
    color: #00a4ef;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding-bottom: 8px;
  }
  
  .story p {
    margin: 0 0 24px 0;
    font-size: 14px;
    line-height: 1.6;
    color: #d1d1d1;
  }
  
  .info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }
  
  .info-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 16px;
    text-align: center;
  }
  
  .info-card h3 {
    margin: 0 0 8px 0;
    font-weight: 500;
    font-size: 14px;
    color: #00a4ef;
  }
  
  .info-card p {
    margin: 0;
    font-size: 14px;
    color: #e1e1e1;
  }
  
  .timeline {
    position: relative;
    padding-left: 24px;
    border-left: 2px solid rgba(0, 120, 215, 0.3);
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 24px;
  }
  
  .timeline-item:last-child {
    margin-bottom: 0;
  }
  
  .timeline-item::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #0078d7;
    left: -31px;
    top: 6px;
  }
  
  .year {
    font-weight: 500;
    color: #00a4ef;
    margin-bottom: 4px;
  }
  
  .event h4 {
    margin: 0 0 8px 0;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
  }
  
  .event p {
    margin: 0;
    font-size: 14px;
    color: #d1d1d1;
    line-height: 1.5;
  }
  
  .interests-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin: 24px 0;
  }
  
  .interest-card {
    background: rgba(0, 120, 215, 0.1);
    border-radius: 8px;
    padding: 16px;
    text-align: center;
  }
  
  .interest-card h3 {
    margin: 0 0 8px 0;
    font-weight: 500;
    font-size: 14px;
    color: #00a4ef;
  }
  
  .interest-card p {
    margin: 0;
    font-size: 12px;
    color: #b1b1b1;
  }
  
  .fun-facts h2 {
    margin-top: 24px;
  }
  
  .fact {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
  }
  
  .fact p {
    margin: 0;
    font-size: 14px;
    color: #e1e1e1;
  }
  
  /* Scrollbar styling */
  .sections::-webkit-scrollbar {
    width: 6px;
  }
  
  .sections::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  .sections::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
  
  .sections::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    .info-grid {
      grid-template-columns: 1fr;
    }
    
    .interests-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default StyledProfessionalExperience;
