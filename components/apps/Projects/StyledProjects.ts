import styled from "styled-components";

const StyledProjects = styled.div`
  background: #202020;
  color: #ffffff;
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
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    z-index: 10;
  }
  
  .projects-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
  }
  
  .header {
    padding: 32px;
    background: #1b1b1b;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }
  
  .title-section {
    position: relative;
    z-index: 1;
    text-align: center;
  }
  
  .title-section h1 {
    margin: 0 0 12px 0;
    font-weight: 600;
    font-size: 32px;
    color: #ffffff;
  }
  
  .title-section p {
    margin: 0 auto;
    color: #cccccc;
    font-size: 18px;
    font-weight: 400;
    max-width: 600px;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    padding: 32px;
    overflow-y: auto;
    flex: 1;
    background: #202020;
  }
  
  .projects-grid::-webkit-scrollbar {
    width: 8px;
  }
  
  .projects-grid::-webkit-scrollbar-track {
    background: #2d2d2d;
  }
  
  .projects-grid::-webkit-scrollbar-thumb {
    background: #404040;
    border-radius: 4px;
  }
  
  .projects-grid::-webkit-scrollbar-thumb:hover {
    background: #505050;
  }
  
  .project-card {
    background: #2d2d2d;
    border-radius: 8px;
    padding: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  
  .project-card:hover {
    border-color: #0078d4;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    background: #333333;
  }
  
  .project-header {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
  }
  
  .project-image {
    width: 48px;
    height: 48px;
    min-width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3a3a3a;
    border-radius: 6px;
    padding: 8px;
    overflow: hidden;
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .project-info {
    flex: 1;
  }
  
  .project-title {
    margin: 0 0 8px 0;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
  }
  
  .project-status {
    display: inline-block;
    padding: 2px 8px;
    background: #3a3a3a;
    border-radius: 4px;
    font-size: 12px;
    color: #cccccc;
    font-weight: 500;
  }
  
  .project-status.completed {
    background: #2d4a2d;
    color: #a0d1a0;
  }
  
  .project-status.in-progress {
    background: #4a3a2d;
    color: #d1c0a0;
  }
  
  .project-description {
    margin: 0 0 20px 0;
    font-size: 16px;
    line-height: 1.6;
    color: #e0e0e0;
    font-weight: 400;
    flex: 1;
  }
  
  .project-meta {
    display: flex;
    gap: 16px;
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  .meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: #aaaaaa;
  }
  
  .meta-item svg {
    width: 16px;
    height: 16px;
  }
  
  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
  }
  
  .modal-content {
    background: #2d2d2d;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    max-width: 800px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: modalAppear 0.2s ease-out;
  }
  
  .modal-content::-webkit-scrollbar {
    width: 10px;
  }
  
  .modal-content::-webkit-scrollbar-track {
    background: #202020;
  }
  
  .modal-content::-webkit-scrollbar-thumb {
    background: #404040;
    border-radius: 5px;
  }
  
  .modal-content::-webkit-scrollbar-thumb:hover {
    background: #505050;
  }
  
  @keyframes modalAppear {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  .modal-header {
    padding: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background: #252525;
  }
  
  .modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    background: #3a3a3a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .modal-close:hover {
    background: #4a4a4a;
  }
  
  .modal-close svg {
    width: 16px;
    height: 16px;
    stroke: #cccccc;
  }
  
  .modal-project-header {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
  }
  
  .modal-project-image {
    width: 56px;
    height: 56px;
    min-width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3a3a3a;
    border-radius: 6px;
    padding: 10px;
    overflow: hidden;
  }
  
  .modal-project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .modal-project-info {
    flex: 1;
  }
  
  .modal-project-title {
    margin: 0 0 8px 0;
    font-weight: 600;
    font-size: 24px;
    color: #ffffff;
  }
  
  .modal-project-description {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
    color: #e0e0e0;
    font-weight: 400;
  }
  
  .modal-body {
    padding: 24px;
  }
  
  .modal-section {
    margin-bottom: 32px;
  }
  
  .modal-section:last-child {
    margin-bottom: 0;
  }
  
  .section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }
  
  .section-header svg {
    width: 20px;
    height: 20px;
    stroke: #0078d4;
  }
  
  .section-header h3 {
    margin: 0;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
  }
  
  .details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
  }
  
  .detail-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  
  .detail-label {
    font-size: 14px;
    color: #aaaaaa;
    font-weight: 500;
  }
  
  .detail-value {
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
  }
  
  .features-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .features-list li {
    padding: 10px 0 10px 24px;
    position: relative;
    font-size: 16px;
    color: #e0e0e0;
    font-weight: 400;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    line-height: 1.6;
  }
  
  .features-list li:last-child {
    border-bottom: none;
  }
  
  .features-list li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #0078d4;
    font-size: 20px;
    line-height: 1;
  }
  
  .challenges-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .challenge-item {
    background: #252525;
    border-radius: 6px;
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  .challenge-header {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 12px;
  }
  
  .challenge-number {
    background: #0078d4;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    flex-shrink: 0;
  }
  
  .challenge-title {
    margin: 0;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    flex: 1;
    line-height: 1.4;
  }
  
  .solution-text {
    margin: 0;
    font-size: 16px;
    color: #e0e0e0;
    font-weight: 400;
    line-height: 1.6;
  }
  
  .achievements-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .achievements-list li {
    padding: 10px 0 10px 24px;
    position: relative;
    font-size: 16px;
    color: #e0e0e0;
    font-weight: 400;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    line-height: 1.6;
  }
  
  .achievements-list li:last-child {
    border-bottom: none;
  }
  
  .achievements-list li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #4caf50;
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
  }
  
  .tech-stack-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
  }
  
  .tech-category {
    background: #252525;
    border-radius: 6px;
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  .tech-category h4 {
    margin: 0 0 12px 0;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
  }
  
  .tech-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .tech-list li {
    padding: 6px 0;
    font-size: 14px;
    color: #e0e0e0;
    font-weight: 400;
    position: relative;
    padding-left: 16px;
    line-height: 1.5;
  }
  
  .tech-list li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #0078d4;
    font-size: 14px;
  }
  
  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 16px;
  }
  
  .metric-item {
    background: #252525;
    border-radius: 6px;
    padding: 16px;
    text-align: center;
    border: 1px solid rgba(0, 120, 212, 0.2);
  }
  
  .metric-value {
    display: block;
    font-weight: 600;
    font-size: 20px;
    color: #0078d4;
    margin-bottom: 4px;
  }
  
  .metric-label {
    display: block;
    font-size: 14px;
    color: #aaaaaa;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
      padding: 20px;
    }
    
    .header {
      padding: 20px;
    }
    
    .title-section h1 {
      font-size: 28px;
    }
    
    .tech-stack-grid {
      grid-template-columns: 1fr;
    }
    
    .metrics-grid {
      grid-template-columns: 1fr 1fr;
    }
    
    .modal-content {
      margin: 10px;
    }
    
    .modal-header,
    .modal-body {
      padding: 20px;
    }
    
    .modal-project-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
  
  @media (max-width: 480px) {
    .projects-grid {
      padding: 16px;
    }
    
    .project-card {
      padding: 20px;
    }
    
    .title-section h1 {
      font-size: 24px;
    }
    
    .title-section p {
      font-size: 16px;
    }
    
    .modal-project-title {
      font-size: 20px;
    }
    
    .metrics-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default StyledProjects;