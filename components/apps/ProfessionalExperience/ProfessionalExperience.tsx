import { memo, useRef } from "react";
import StyledProfessionalExperience from "components/apps/ProfessionalExperience/StyledProfessionalExperience";
import { type ComponentProcessProps } from "components/system/Apps/RenderComponent";
import useTitle from "components/system/Window/useTitle";

const ProfessionalExperience = ({ id }: ComponentProcessProps) => {
  const professionalExperienceRef = useRef<HTMLDivElement>(null);
  useTitle(id);

  return (
    <StyledProfessionalExperience ref={professionalExperienceRef}>
      <div className="about-content">
        <div className="header">
          <div className="profile">
            <div className="avatar-placeholder">
              <div className="windows-logo">
                <div className="logo-square" />
                <div className="logo-square" />
                <div className="logo-square" />
                <div className="logo-square" />
              </div>
            </div>
            <div className="name-title">
              <h1>Professional Experience</h1>
              <p>Showcasing my career journey and achievements</p>
            </div>
          </div>
        </div>
        
        <div className="sections">
          <div className="intro">
            <p>
              Welcome to my professional experience portfolio. Here you'll find detailed information 
              about my career journey, key projects, and the skills I've developed over time.
            </p>
          </div>
          
          <section className="story">
            <h2>My Professional Journey</h2>
            <p>
              My career in technology began with my studies in Computer Engineering. Since then, 
              I've worked on various projects ranging from web development to mobile applications, 
              gaining valuable experience in multiple technologies and methodologies.
            </p>
          </section>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Web Development</h3>
              <p>Specialized in creating responsive websites and web applications</p>
            </div>
            <div className="info-card">
              <h3>Mobile Apps</h3>
              <p>Experience in developing cross-platform mobile applications</p>
            </div>
            <div className="info-card">
              <h3>UI/UX Design</h3>
              <p>Focused on creating intuitive and engaging user experiences</p>
            </div>
          </div>
          
          <section className="timeline">
            <h2>Career Timeline</h2>
            <div className="timeline-item">
              <div className="year">2025</div>
              <div className="event">
                <h4>Freelance Developer</h4>
                <p>Started offering web development services to clients</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="year">2025</div>
              <div className="event">
                <h4>First Commercial Projects</h4>
                <p>Developed websites for local businesses</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="year">2025</div>
              <div className="event">
                <h4>Advanced Web Development</h4>
                <p>Started learning React, Node.js, and modern web technologies</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="year">2024</div>
              <div className="event">
                <h4>Computer Engineering Student</h4>
                <p>Began university studies in Computer Engineering</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </StyledProfessionalExperience>
  );
};

export default memo(ProfessionalExperience);