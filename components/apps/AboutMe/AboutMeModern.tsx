import { memo, useRef, useEffect, useState } from "react";
import StyledAboutMeModern from "./StyledAboutMeModern";
import { type ComponentProcessProps } from "components/system/Apps/RenderComponent";
import useTitle from "components/system/Window/useTitle";
import Icons from "./Icons";

const AboutMeModern: FC<ComponentProcessProps> = ({ id }) => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  useTitle(id);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Check if the image exists
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = "/Users/Public/Pictures/about-me.png";
  }, []);

  return (
    <StyledAboutMeModern ref={aboutMeRef}>
      <div className="about-content">
        <div className="header">
          <div className="profile">
            <div className="avatar-container">
              {imageLoaded && !imageError ? (
                <img 
                  src="/Users/Public/Pictures/about-me.png" 
                  alt="Profile" 
                  className="avatar-image"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="avatar-placeholder">
                  <div className="windows-logo">
                    <div className="logo-square"></div>
                    <div className="logo-square"></div>
                    <div className="logo-square"></div>
                    <div className="logo-square"></div>
                  </div>
                </div>
              )}
            </div>
            <div className="name-title">
              <h1>Passionate Developer</h1>
              <p>Creating amazing websites and mobile apps</p>
              <p className="tagline">
                <span className="icon-wrapper"><Icons.Rocket /></span>
                Engineering Excellence Through Innovation
              </p>
            </div>
          </div>
        </div>

        <div className="sections">
          <div className="intro">
            <p>
              Passionate <span className="highlight">20-year-old developer</span> creating amazing websites and mobile apps. 
              Love challenges, adventures, and turning ideas into reality through innovative solutions.
            </p>
          </div>

          <section className="story">
            <h2>
              <span className="icon-wrapper"><Icons.User /></span>
              My Story
            </h2>
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
              <div className="info-icon">
                <Icons.Location />
              </div>
              <h3>Location</h3>
              <p>Portugal 🇵🇹</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <Icons.Calendar />
              </div>
              <h3>Age</h3>
              <p>20 years old</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <Icons.Graduation />
              </div>
              <h3>Education</h3>
              <p>Computer Engineering</p>
            </div>
          </div>

          <section className="skills">
            <h2>
              <span className="icon-wrapper"><Icons.Code /></span>
              Technical Skills
            </h2>
            <div className="skills-grid">
              <div className="skill">
                <div className="skill-icon">
                  <Icons.Code />
                </div>
                <h4>HTML/CSS</h4>
              </div>
              <div className="skill">
                <div className="skill-icon">
                  <Icons.Javascript />
                </div>
                <h4>JavaScript</h4>
              </div>
              <div className="skill">
                <div className="skill-icon">
                  <Icons.React />
                </div>
                <h4>React</h4>
              </div>
              <div className="skill">
                <div className="skill-icon">
                  <Icons.Node />
                </div>
                <h4>Node.js</h4>
              </div>
              <div className="skill">
                <div className="skill-icon">
                  <Icons.Mobile />
                </div>
                <h4>Mobile Apps</h4>
              </div>
              <div className="skill">
                <div className="skill-icon">
                  <Icons.Design />
                </div>
                <h4>UI/UX</h4>
              </div>
            </div>
          </section>

          <section className="languages">
            <h2>
              <span className="icon-wrapper"><Icons.Language /></span>
              Languages
            </h2>
            <div className="languages-grid">
              <div className="language-card">
                <h4>Portuguese</h4>
                <div className="language-level">Native</div>
                <div className="badge">Fluent</div>
              </div>
              <div className="language-card">
                <h4>English</h4>
                <div className="language-level">Fluent</div>
                <div className="badge">Professional</div>
              </div>
              <div className="language-card">
                <h4>Spanish</h4>
                <div className="language-level">Intermediate</div>
                <div className="badge">Conversational</div>
              </div>
              <div className="language-card">
                <h4>French</h4>
                <div className="language-level">Learning</div>
                <div className="badge">Beginner</div>
              </div>
            </div>
          </section>

          <section className="journey">
            <h2>
              <span className="icon-wrapper"><Icons.Timeline /></span>
              My Journey
            </h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="year">
                  <span className="icon-wrapper"><Icons.Briefcase /></span>
                  2025
                </div>
                <div className="event">
                  <h4>Freelance Developer</h4>
                  <p>Started offering web development services on Fiverr, specializing in business websites and mobile apps</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="year">
                  <span className="icon-wrapper"><Icons.Project /></span>
                  2025
                </div>
                <div className="event">
                  <h4>First Commercial Projects</h4>
                  <p>Developed websites for local businesses including accommodation and restaurant websites</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="year">
                  <span className="icon-wrapper"><Icons.Explore /></span>
                  2025
                </div>
                <div className="event">
                  <h4>Exploring More...</h4>
                  <p>Started learning more web development with React, Node.js, and more. Not satisfied, I started doing some basic mobile apps for me</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="year">
                  <span className="icon-wrapper"><Icons.Code /></span>
                  2025
                </div>
                <div className="event">
                  <h4>Programming Journey Begins</h4>
                  <p>Started learning web development with HTML, CSS, and JavaScript, building personal projects</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="year">
                  <span className="icon-wrapper"><Icons.School /></span>
                  2024
                </div>
                <div className="event">
                  <h4>Computer Engineering Student</h4>
                  <p>Currently pursuing Bachelor's in Computer Engineering, focusing on software development and system architecture</p>
                </div>
              </div>
            </div>
          </section>

          <div className="interests-grid">
            <div className="interest-card">
              <div className="interest-icon">
                <Icons.Code />
              </div>
              <h3>Code</h3>
              <p>My passion</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">
                <Icons.Motorcycle />
              </div>
              <h3>Motorcycles</h3>
              <p>My thrill</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">
                <Icons.Language />
              </div>
              <h3>Languages</h3>
              <p>My curiosity</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">
                <Icons.Fitness />
              </div>
              <h3>Fitness</h3>
              <p>My energy</p>
            </div>
          </div>

          <section className="fun-facts">
            <h2>
              <span className="icon-wrapper"><Icons.Star /></span>
              Fun Facts About Me
            </h2>
            <div className="facts-grid">
              <div className="fact-card">
                <div className="fact-icon">
                  <Icons.Mountain />
                </div>
                <div className="fact-content">
                  <h3>Mountain Climber</h3>
                  <p>⛰️ I've climbed the highest mountain in Portugal (<span className="highlight">Serra da Estrela</span>)</p>
                </div>
              </div>
              <div className="fact-card">
                <div className="fact-icon">
                  <Icons.Motorcycle />
                </div>
                <div className="fact-content">
                  <h3>Motorcycle Enthusiast</h3>
                  <p>🏍️ I love motorcycles and enjoy riding them on scenic routes</p>
                </div>
              </div>
              <div className="fact-card">
                <div className="fact-icon">
                  <Icons.Language />
                </div>
                <div className="fact-content">
                  <h3>Polyglot</h3>
                  <p>🗣️ I speak 4 languages: Portuguese (native), English (fluent), Spanish (intermediate) and French (learning)</p>
                </div>
              </div>
              <div className="fact-card">
                <div className="fact-icon">
                  <Icons.Code />
                </div>
                <div className="fact-content">
                  <h3>Coding Marathon</h3>
                  <p>💻 I once coded for <span className="highlight">12 hours straight</span> without breaks (not recommended!)</p>
                </div>
              </div>
              <div className="fact-card">
                <div className="fact-icon">
                  <Icons.Fitness />
                </div>
                <div className="fact-content">
                  <h3>Fitness Enthusiast</h3>
                  <p>🏋️ I'm a certified fitness enthusiast and love extreme sports</p>
                </div>
              </div>
              <div className="fact-card">
                <div className="fact-icon">
                  <Icons.Rocket />
                </div>
                <div className="fact-content">
                  <h3>Engineering Philosophy</h3>
                  <p>🚀 I believe that reusing and improving existing work is a valuable engineering skill - it's not about reinventing the wheel, it's about making it better!</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </StyledAboutMeModern>
  );
};

export default memo(AboutMeModern);