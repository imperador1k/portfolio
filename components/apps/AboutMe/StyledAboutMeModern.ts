import styled from "styled-components";

const StyledAboutMeModern = styled.div`
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  color: #e0e0ff;
  height: 100%;
  overflow: hidden;
  font-family: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #0067c0, #00a4ef, #0067c0);
    z-index: 10;
  }
  
  .about-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
  }
  
  .header {
    padding: 32px;
    background: rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }
  
  .header::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0, 164, 239, 0.15) 0%, transparent 70%);
    transform: rotate(30deg);
    z-index: 0;
  }
  
  .profile {
    display: flex;
    align-items: center;
    gap: 28px;
    position: relative;
    z-index: 1;
  }
  
  .avatar-container {
    position: relative;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    border: 3px solid rgba(0, 164, 239, 0.7);
    background: linear-gradient(135deg, #0067c0 0%, #00a4ef 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
  }
  
  .avatar-container:hover {
    transform: scale(1.05) rotate(5deg);
    box-shadow: 0 20px 40px rgba(0, 164, 239, 0.4);
  }
  
  .avatar-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .avatar-placeholder {
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .windows-logo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 4px;
    width: 60px;
    height: 60px;
  }
  
  .logo-square {
    background: #ffffff;
    border-radius: 4px;
    opacity: 0.9;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
    100% { opacity: 0.7; transform: scale(1); }
  }
  
  .name-title {
    flex: 1;
  }
  
  .name-title h1 {
    margin: 0 0 8px 0;
    font-weight: 300;
    font-size: 36px;
    color: #ffffff;
    background: linear-gradient(90deg, #ffffff, #00a4ef);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .name-title p {
    margin: 0;
    color: #a0a0ff;
    font-size: 18px;
    font-weight: 300;
  }
  
  .tagline {
    margin-top: 12px;
    color: #00a4ef;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .icon-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
  
  .icon-wrapper svg {
    width: 24px;
    height: 24px;
    stroke: #00a4ef;
  }
  
  .sections {
    flex: 1;
    overflow-y: auto;
    padding: 32px;
    position: relative;
  }
  
  .sections::-webkit-scrollbar {
    width: 8px;
  }
  
  .sections::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }
  
  .sections::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #0067c0, #00a4ef);
    border-radius: 4px;
  }
  
  .sections::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #0078d7, #00b0f0);
  }
  
  .intro {
    margin-bottom: 32px;
    padding: 28px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .intro:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 164, 239, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }
  
  .intro::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #00a4ef, transparent);
  }
  
  .intro p {
    margin: 0;
    font-size: 20px;
    line-height: 1.7;
    color: #d1d1ff;
    font-weight: 300;
  }
  
  h2 {
    margin: 0 0 24px 0;
    font-weight: 300;
    font-size: 32px;
    color: #00a4ef;
    border-bottom: 1px solid rgba(0, 164, 239, 0.3);
    padding-bottom: 12px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  h2::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100px;
    height: 3px;
    background: #00a4ef;
  }
  
  .story p {
    margin: 0 0 24px 0;
    font-size: 18px;
    line-height: 1.7;
    color: #c1c1e1;
    font-weight: 300;
  }
  
  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin: 32px 0;
  }
  
  .info-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 28px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .info-card:hover {
    transform: translateY(-8px);
    background: rgba(0, 164, 239, 0.1);
    border-color: rgba(0, 164, 239, 0.4);
    box-shadow: 0 12px 40px rgba(0, 164, 239, 0.3);
  }
  
  .info-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #00a4ef, transparent);
  }
  
  .info-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 164, 239, 0.1);
    border-radius: 50%;
    border: 1px solid rgba(0, 164, 239, 0.3);
  }
  
  .info-icon svg {
    width: 30px;
    height: 30px;
    stroke: #00a4ef;
  }
  
  .info-card h3 {
    margin: 0 0 16px 0;
    font-weight: 500;
    font-size: 22px;
    color: #00a4ef;
  }
  
  .info-card p {
    margin: 0;
    font-size: 18px;
    color: #e1e1ff;
    font-weight: 300;
  }
  
  .timeline {
    position: relative;
    padding-left: 40px;
    margin: 40px 0;
  }
  
  .timeline::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #0067c0, #00a4ef, #0067c0);
    left: 12px;
    top: 0;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 164, 239, 0.5);
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 40px;
    padding: 24px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }
  
  .timeline-item:hover {
    background: rgba(0, 164, 239, 0.1);
    border-color: rgba(0, 164, 239, 0.3);
    transform: translateX(8px);
    box-shadow: 0 12px 40px rgba(0, 164, 239, 0.3);
  }
  
  .timeline-item:last-child {
    margin-bottom: 0;
  }
  
  .timeline-item::before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #00a4ef;
    left: -48px;
    top: 30px;
    border: 4px solid #0f0c29;
    box-shadow: 0 0 0 3px #0067c0, 0 0 15px rgba(0, 164, 239, 0.7);
    z-index: 2;
    transition: all 0.3s ease;
  }
  
  .timeline-item:hover::before {
    transform: scale(1.2);
    background: #ffffff;
    box-shadow: 0 0 0 3px #00a4ef, 0 0 20px rgba(0, 164, 239, 1);
  }
  
  .year {
    font-weight: 600;
    color: #00a4ef;
    margin-bottom: 12px;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .year .icon-wrapper {
    width: 18px;
    height: 18px;
  }
  
  .year .icon-wrapper svg {
    width: 18px;
    height: 18px;
  }
  
  .event h4 {
    margin: 0 0 16px 0;
    font-weight: 500;
    font-size: 22px;
    color: #ffffff;
  }
  
  .event p {
    margin: 0;
    font-size: 18px;
    color: #d1d1e1;
    line-height: 1.6;
  }
  
  .interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 24px;
    margin: 32px 0;
  }
  
  .interest-card {
    background: linear-gradient(135deg, rgba(0, 103, 192, 0.2) 0%, rgba(0, 164, 239, 0.1) 100%);
    border-radius: 16px;
    padding: 32px 24px;
    text-align: center;
    border: 1px solid rgba(0, 164, 239, 0.2);
    transition: all 0.3s ease;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
  }
  
  .interest-card:hover {
    transform: scale(1.05) translateY(-5px);
    background: linear-gradient(135deg, rgba(0, 103, 192, 0.3) 0%, rgba(0, 164, 239, 0.2) 100%);
    border-color: rgba(0, 164, 239, 0.5);
    box-shadow: 0 12px 40px rgba(0, 164, 239, 0.3);
  }
  
  .interest-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #00a4ef, transparent);
  }
  
  .interest-icon {
    width: 50px;
    height: 50px;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 164, 239, 0.2);
    border-radius: 50%;
    border: 1px solid rgba(0, 164, 239, 0.4);
  }
  
  .interest-icon svg {
    width: 25px;
    height: 25px;
    stroke: #00a4ef;
  }
  
  .interest-card h3 {
    margin: 0 0 12px 0;
    font-weight: 500;
    font-size: 22px;
    color: #00a4ef;
  }
  
  .interest-card p {
    margin: 0;
    font-size: 18px;
    color: #b1b1ff;
    font-weight: 300;
  }
  
  .fun-facts {
    margin: 40px 0;
    padding: 32px;
    background: rgba(0, 164, 239, 0.07);
    border-radius: 16px;
    border: 1px solid rgba(0, 164, 239, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }
  
  .facts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-top: 24px;
  }
  
  .fact-card {
    background: rgba(255, 255, 255, 0.07);
    border-radius: 16px;
    padding: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }
  
  .fact-card:hover {
    background: rgba(0, 164, 239, 0.15);
    transform: translateY(-5px);
    border-color: rgba(0, 164, 239, 0.3);
    box-shadow: 0 8px 25px rgba(0, 164, 239, 0.2);
  }
  
  .fact-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00a4ef, transparent);
  }
  
  .fact-icon {
    width: 50px;
    height: 50px;
    min-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 164, 239, 0.2);
    border-radius: 12px;
    border: 1px solid rgba(0, 164, 239, 0.3);
    padding: 10px;
  }
  
  .fact-icon svg {
    width: 30px;
    height: 30px;
    stroke: #00a4ef;
  }
  
  .fact-content h3 {
    margin: 0 0 12px 0;
    font-weight: 500;
    font-size: 20px;
    color: #00a4ef;
  }
  
  .fact-content p {
    margin: 0;
    font-size: 18px;
    color: #e1e1ff;
    font-weight: 300;
    line-height: 1.6;
  }
  
  .highlight {
    color: #00a4ef;
    font-weight: 500;
  }
  
  .skills {
    margin: 40px 0;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 20px;
  }
  
  .skill {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 24px 16px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .skill:hover {
    background: rgba(0, 164, 239, 0.2);
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 164, 239, 0.3);
    border-color: rgba(0, 164, 239, 0.4);
  }
  
  .skill-icon {
    width: 50px;
    height: 50px;
    margin: 0 auto 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .skill-icon svg {
    width: 30px;
    height: 30px;
    stroke: #00a4ef;
  }
  
  .skill h4 {
    margin: 0;
    color: #00a4ef;
    font-size: 18px;
    font-weight: 500;
  }
  
  .languages {
    margin: 40px 0;
  }
  
  .languages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .language-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 24px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .language-card:hover {
    background: rgba(0, 164, 239, 0.15);
    transform: translateY(-5px);
    border-color: rgba(0, 164, 239, 0.3);
    box-shadow: 0 10px 25px rgba(0, 164, 239, 0.2);
  }
  
  .language-card h4 {
    margin: 0 0 8px 0;
    color: #00a4ef;
    font-size: 20px;
    font-weight: 500;
  }
  
  .language-level {
    color: #b1b1ff;
    font-size: 16px;
    font-weight: 300;
  }
  
  .badge {
    display: inline-block;
    padding: 4px 12px;
    background: rgba(0, 164, 239, 0.2);
    border-radius: 20px;
    font-size: 14px;
    color: #00a4ef;
    margin-top: 12px;
    border: 1px solid rgba(0, 164, 239, 0.3);
  }
  
  @media (max-width: 768px) {
    .header {
      padding: 24px;
    }
    
    .profile {
      flex-direction: column;
      text-align: center;
    }
    
    .info-grid {
      grid-template-columns: 1fr;
    }
    
    .interests-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .name-title h1 {
      font-size: 28px;
    }
    
    .facts-grid {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .interests-grid {
      grid-template-columns: 1fr;
    }
    
    .name-title h1 {
      font-size: 24px;
    }
    
    .tagline {
      font-size: 16px;
    }
    
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .fact-card {
      flex-direction: column;
      text-align: center;
    }
    
    .fact-icon {
      margin: 0 auto 16px;
    }
  }
`;

export default StyledAboutMeModern;