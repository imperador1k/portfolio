import { memo, useRef } from "react";
import StyledAboutMe from "components/apps/AboutMe/StyledAboutMe";
import { type ComponentProcessProps } from "components/system/Apps/RenderComponent";
import useTitle from "components/system/Window/useTitle";

const AboutMe: FC<ComponentProcessProps> = ({ id }) => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  useTitle(id);

  return (
    <StyledAboutMe ref={aboutMeRef}>
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
              <h1>Passionate Developer</h1>
              <p>Creating amazing websites and mobile apps</p>
            </div>
          </div>
        </div>

        <div className="sections">
          <section className="intro">
            <p>
              Passionate 20-year-old developer creating amazing websites and mobile apps. 
              Love challenges, adventures, and turning ideas into reality.
            </p>
          </section>

          <section className="story">
            <h2>My Story</h2>
            <p>
              My journey into the world of technology began in 2024 when I entered university 
              to study Computer Engineering. In April 2025, I took my first steps into web 
              development and discovered my passion for creating digital experiences. In just 
              5 months, I've built numerous projects, from local accommodation websites to diet 
              tracking apps and smart shopping lists. Today, I work as a freelancer, bringing 
              my rapidly acquired skills to help clients turn their ideas into reality through 
              innovative web solutions.
            </p>
          </section>

          <div className="info-grid">
            <div className="info-card">
              <h3>Location</h3>
              <p>Portugal 🇵🇹</p>
            </div>
            <div className="info-card">
              <h3>Age</h3>
              <p>20 years old</p>
            </div>
            <div className="info-card">
              <h3>Education</h3>
              <p>Computer Engineering</p>
            </div>
          </div>

          <section className="journey">
            <h2>My Journey</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="year">2025</div>
                <div className="event">
                  <h4>Freelance Developer</h4>
                  <p>Started offering web development services on Fiverr, specializing in business websites and mobile apps</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="year">2025</div>
                <div className="event">
                  <h4>First Commercial Projects</h4>
                  <p>Developed websites for local businesses including accommodation and restaurant websites</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="year">2025</div>
                <div className="event">
                  <h4>Exploring More...</h4>
                  <p>Started learning more web development with React, Node.js, and more. Not satisfied, I started doing some basic mobile apps for me</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="year">2025</div>
                <div className="event">
                  <h4>Programming Journey Begins</h4>
                  <p>Started learning web development with HTML, CSS, and JavaScript, building personal projects</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="year">2024</div>
                <div className="event">
                  <h4>Computer Engineering Student</h4>
                  <p>Currently pursuing Bachelor's in Computer Engineering, focusing on software development and system architecture</p>
                </div>
              </div>
            </div>
          </section>

          <div className="interests-grid">
            <div className="interest-card">
              <h3>Code</h3>
              <p>My passion</p>
            </div>
            <div className="interest-card">
              <h3>Adventure</h3>
              <p>My escape</p>
            </div>
            <div className="interest-card">
              <h3>Languages</h3>
              <p>My curiosity</p>
            </div>
            <div className="interest-card">
              <h3>Fitness</h3>
              <p>My energy</p>
            </div>
          </div>

          <section className="fun-facts">
            <h2>Fun Facts About Me</h2>
            <div className="fact">
              <p>🍔🍕I've already eaten 10.000kcal in one day!</p>
            </div>
          </section>
        </div>
      </div>
    </StyledAboutMe>
  );
};

export default memo(AboutMe);