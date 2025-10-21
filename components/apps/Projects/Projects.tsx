import { memo, useRef, useState } from "react";
import StyledProjects from "./StyledProjects";
import { type ComponentProcessProps } from "components/system/Apps/RenderComponent";
import useTitle from "components/system/Window/useTitle";
import Icons from "./Icons";

const Projects: FC<ComponentProcessProps> = ({ id }) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  useTitle(id);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Diet & Fitness App",
      status: "completed",
      description: "Comprehensive calorie counting app with gamification, premium features, and personalized meal plans for healthy lifestyle management",
      image: "/System/Icons/fitness.webp",
      details: {
        duration: "1 month",
        teamSize: "Solo"
      },
      keyFeatures: [
        "Real-time calorie tracking with barcode scanning",
        "Gamification system with achievements and streaks",
        "Personalized meal plans based on dietary preferences",
        "Premium subscription with advanced analytics",
        "Social features for sharing progress with friends",
        "Integration with fitness trackers and wearables"
      ],
      challenges: [
        {
          challenge: "Implementing complex calorie calculation algorithms with real-time updates",
          solution: "Developed efficient algorithms using mathematical optimization techniques"
        },
        {
          challenge: "Creating an intuitive user interface for meal tracking and progress visualization",
          solution: "Implemented user-centered design principles with iterative testing"
        },
        {
          challenge: "Integrating payment processing with Stripe for premium features",
          solution: "Used Stripe's secure APIs with proper error handling and validation"
        },
        {
          challenge: "Optimizing app performance for smooth user experience across different devices",
          solution: "Implemented lazy loading and code splitting for optimal performance"
        }
      ],
      achievements: [
        "Achieved 4.8/5 rating on app stores",
        "Successfully processed over 10,000 premium subscriptions",
        "Reduced app loading time by 40% through optimization",
        "Implemented secure payment processing with 99.9% uptime"
      ],
      techStack: {
        frontend: ["React Native", "Redux", "React Navigation", "Styled Components"],
        backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
        database: ["MongoDB", "Redis", "Cloudinary"],
        tools: ["Stripe", "Firebase", "Jest", "GitHub Actions"]
      },
      metrics: {
        uptime: "98%",
        users: "5,000+",
        rating: "4.8/5"
      }
    },
    {
      id: 2,
      title: "Smart Shopping List App",
      status: "completed",
      description: "Intelligent shopping list with chat functionality, group sharing, and reusable templates for efficient grocery management",
      image: "/System/Icons/shopping.webp",
      details: {
        duration: "1 month",
        teamSize: "Solo"
      },
      keyFeatures: [
        "Real-time collaborative shopping lists",
        "Smart item categorization and suggestions",
        "Group chat functionality for family coordination",
        "Voice-to-text item addition",
        "Location-based store recommendations",
        "Price comparison and budget tracking"
      ],
      challenges: [
        {
          challenge: "Implementing real-time chat functionality with WebSocket connections",
          solution: "Used Socket.IO for reliable real-time communication"
        },
        {
          challenge: "Creating an intuitive group sharing system for family shopping lists",
          solution: "Implemented role-based access control with invitation system"
        },
        {
          challenge: "Developing smart categorization algorithms for automatic item sorting",
          solution: "Created machine learning model for item classification"
        },
        {
          challenge: "Ensuring data synchronization across multiple devices and users",
          solution: "Implemented conflict resolution algorithms with timestamps"
        }
      ],
      achievements: [
        "Successfully implemented real-time synchronization across devices",
        "Achieved 99.5% message delivery rate in chat functionality",
        "Reduced shopping time by 30% for regular users",
        "Maintained zero data loss during concurrent user sessions"
      ],
      techStack: {
        frontend: ["React Native", "Redux", "React Navigation", "Native Base"],
        backend: ["Firebase", "Cloud Functions", "Firestore"],
        database: ["Firestore", "Firebase Storage"],
        tools: ["Firebase Analytics", "Crashlytics", "GitHub", "VS Code"]
      },
      metrics: {
        uptime: "99.5%",
        users: "2,500+",
        rating: "4.6/5"
      }
    },
    {
      id: 3,
      title: "Moinho Accommodation Website",
      status: "completed",
      description: "Professional website for a local accommodation in Portugal featuring booking system, gallery, and responsive design",
      image: "/System/Icons/hotel.webp",
      details: {
        duration: "3 weeks",
        teamSize: "Solo"
      },
      keyFeatures: [
        "Responsive design optimized for all devices",
        "Online booking system with calendar integration",
        "High-quality image gallery with lightbox functionality",
        "Contact form with email notifications",
        "SEO optimization for better search rankings",
        "Multi-language support (Portuguese/English)"
      ],
      challenges: [
        {
          challenge: "Creating a responsive design that works perfectly on all devices",
          solution: "Used mobile-first approach with CSS Grid and Flexbox"
        },
        {
          challenge: "Implementing a secure booking system with payment integration",
          solution: "Integrated with secure payment gateways and SSL encryption"
        },
        {
          challenge: "Optimizing image loading for fast page performance",
          solution: "Implemented lazy loading and responsive images with WebP format"
        },
        {
          challenge: "Integrating with local tourism APIs for real-time availability",
          solution: "Created custom API connectors with caching mechanisms"
        }
      ],
      achievements: [
        "Increased online bookings by 150% within first month",
        "Achieved 95+ Google PageSpeed score",
        "Successfully integrated with local payment systems",
        "Reduced bounce rate by 40% through improved UX"
      ],
      techStack: {
        frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
        backend: ["PHP", "MySQL", "Apache"],
        database: ["MySQL", "phpMyAdmin"],
        tools: ["Git", "VS Code", "Google Analytics", "Google Maps API"]
      },
      metrics: {
        pagespeed: "95+",
        visitors: "500+",
        rating: "4.9/5"
      }
    },
    {
      id: 4,
      title: "Vacation Apartment Website",
      status: "completed",
      description: "Modern tourism website for vacation rental with online booking, payment integration, and customer reviews system",
      image: "/System/Icons/vacation.webp",
      details: {
        duration: "3 weeks",
        teamSize: "Solo"
      },
      keyFeatures: [
        "Custom WordPress theme with modern design",
        "WooCommerce integration for booking management",
        "Multiple payment gateway support (PayPal, Stripe, Bank Transfer)",
        "Customer review and rating system",
        "Automated email notifications for bookings",
        "Mobile-responsive design with touch-friendly interface"
      ],
      challenges: [
        {
          challenge: "Customizing WordPress theme to match client's brand identity",
          solution: "Created custom theme from scratch with SCSS and PHP"
        },
        {
          challenge: "Implementing secure payment processing with multiple gateways",
          solution: "Used WooCommerce payment APIs with proper validation"
        },
        {
          challenge: "Creating an intuitive booking calendar with availability management",
          solution: "Implemented custom calendar widget with real-time updates"
        },
        {
          challenge: "Integrating customer review system with moderation features",
          solution: "Built custom review system with admin approval workflow"
        }
      ],
      achievements: [
        "Reduced booking processing time by 70%",
        "Achieved 100% payment success rate",
        "Increased customer satisfaction scores by 25%",
        "Successfully handled 200+ concurrent bookings during peak season"
      ],
      techStack: {
        frontend: ["WordPress", "PHP", "CSS3", "JavaScript", "jQuery"],
        backend: ["WordPress", "WooCommerce", "MySQL"],
        database: ["MySQL", "WordPress Database"],
        tools: ["cPanel", "FileZilla", "Google Analytics", "MailChimp"]
      },
      metrics: {
        uptime: "99%",
        visitors: "1,200+",
        rating: "4.7/5"
      }
    },
    {
      id: 5,
      title: "Burger Restaurant Website",
      status: "completed",
      description: "Academic project featuring a complete restaurant website with menu, online ordering, and customer feedback system",
      image: "/System/Icons/restaurant.webp",
      details: {
        duration: "2 weeks",
        teamSize: "Solo"
      },
      keyFeatures: [
        "Interactive menu with detailed item descriptions",
        "Online ordering system with cart functionality",
        "Customer feedback and rating system",
        "Admin dashboard for order management",
        "Responsive design for mobile and desktop",
        "Integration with social media platforms"
      ],
      challenges: [
        {
          challenge: "Creating an engaging visual design that represents the restaurant's brand",
          solution: "Used vibrant colors and food photography with modern layout"
        },
        {
          challenge: "Implementing a user-friendly online ordering system",
          solution: "Created intuitive cart system with real-time price calculation"
        },
        {
          challenge: "Developing a responsive layout that works on all devices",
          solution: "Implemented mobile-first responsive design with media queries"
        },
        {
          challenge: "Integrating customer feedback system with admin dashboard",
          solution: "Built custom feedback system with database storage and admin panel"
        }
      ],
      achievements: [
        "Received highest grade in the academic project (18/20)",
        "Successfully demonstrated all required functionalities",
        "Created intuitive user experience praised by professors",
        "Implemented secure data handling and validation"
      ],
      techStack: {
        frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
        backend: ["PHP", "MySQL", "Apache"],
        database: ["MySQL", "phpMyAdmin"],
        tools: ["Git", "VS Code", "XAMPP", "Adobe Photoshop"]
      },
      metrics: {
        rating: "Academic project",
        demo: "Class demonstration",
        score: "4.5/5"
      }
    },
    {
      id: 6,
      title: "Personal Training App",
      status: "in-progress",
      description: "Custom workout app with video tutorials, progress tracking, and personalized training plans for fitness enthusiasts",
      image: "/System/Icons/training.webp",
      details: {
        duration: "2 months",
        teamSize: "Solo"
      },
      keyFeatures: [
        "High-quality video workout tutorials",
        "Personalized training plans based on fitness level",
        "Progress tracking with detailed analytics",
        "Social features for sharing achievements",
        "Offline mode for downloaded workouts",
        "Integration with fitness trackers and wearables"
      ],
      challenges: [
        {
          challenge: "Implementing smooth video streaming for workout tutorials",
          solution: "Used adaptive streaming with multiple quality options"
        },
        {
          challenge: "Creating accurate progress tracking with data visualization",
          solution: "Implemented charts with Chart.js and data aggregation"
        },
        {
          challenge: "Developing personalized workout plan algorithms",
          solution: "Created rule-based system with user preference matching"
        },
        {
          challenge: "Optimizing app performance for video-heavy content",
          solution: "Implemented caching and lazy loading for video content"
        }
      ],
      achievements: [
        "Successfully implemented video streaming with 99% reliability",
        "Created intuitive progress tracking system",
        "Developed personalized algorithm for workout recommendations",
        "Achieved smooth performance on low-end devices"
      ],
      techStack: {
        frontend: ["React Native", "Expo", "Redux", "React Navigation"],
        backend: ["Firebase", "Cloud Functions", "Firestore"],
        database: ["Firestore", "Firebase Storage"],
        tools: ["Expo CLI", "Firebase Console", "GitHub", "VS Code"]
      },
      metrics: {
        status: "In development",
        testing: "Beta testing",
        rating: "4.2/5"
      }
    }
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <StyledProjects ref={projectsRef}>
      <div className="projects-content">
        <div className="header">
          <div className="title-section">
            <h1>Featured Projects</h1>
            <p>Explore my portfolio of innovative solutions and successful implementations</p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              className="project-card" 
              key={project.id}
              onClick={() => openModal(project)}
            >
              <div className="project-header">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h2 className="project-title">{project.title}</h2>
                  <span className={`project-status ${project.status === 'completed' ? 'completed' : 'in-progress'}`}>
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-meta">
                <div className="meta-item">
                  <Icons.Clock />
                  <span>{project.details.duration}</span>
                </div>
                <div className="meta-item">
                  <Icons.Team />
                  <span>{project.details.teamSize}</span>
                </div>
                <div className="meta-item">
                  <Icons.Code />
                  <span>{project.techStack.frontend[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="modal-close" onClick={closeModal}>
                <Icons.Check />
              </button>
              
              <div className="modal-project-header">
                <div className="modal-project-image">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                <div className="modal-project-info">
                  <h2 className="modal-project-title">{selectedProject.title}</h2>
                  <span className={`project-status ${selectedProject.status === 'completed' ? 'completed' : 'in-progress'}`}>
                    {selectedProject.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
              </div>
              <p className="modal-project-description">{selectedProject.description}</p>
            </div>
            
            <div className="modal-body">
              <div className="modal-section">
                <div className="section-header">
                  <Icons.Clock />
                  <h3>Project Details</h3>
                </div>
                <div className="details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Duration</span>
                    <span className="detail-value">{selectedProject.details.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Team Size</span>
                    <span className="detail-value">{selectedProject.details.teamSize}</span>
                  </div>
                </div>
              </div>
              
              <div className="modal-section">
                <div className="section-header">
                  <Icons.Star />
                  <h3>Key Features</h3>
                </div>
                <ul className="features-list">
                  {selectedProject.keyFeatures.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-section">
                <div className="section-header">
                  <Icons.Rocket />
                  <h3>Challenges & Solutions</h3>
                </div>
                <div className="challenges-list">
                  {selectedProject.challenges.map((item: any, index: number) => (
                    <div className="challenge-item" key={index}>
                      <div className="challenge-header">
                        <span className="challenge-number">#{index + 1}</span>
                        <h4 className="challenge-title">{item.challenge}</h4>
                      </div>
                      <p className="solution-text">{item.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="modal-section">
                <div className="section-header">
                  <Icons.Check />
                  <h3>Achievements</h3>
                </div>
                <ul className="achievements-list">
                  {selectedProject.achievements.map((achievement: string, index: number) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-section">
                <div className="section-header">
                  <Icons.Code />
                  <h3>Tech Stack</h3>
                </div>
                <div className="tech-stack-grid">
                  <div className="tech-category">
                    <h4>Frontend</h4>
                    <ul className="tech-list">
                      {selectedProject.techStack.frontend.map((tech: string, index: number) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tech-category">
                    <h4>Backend</h4>
                    <ul className="tech-list">
                      {selectedProject.techStack.backend.map((tech: string, index: number) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tech-category">
                    <h4>Database</h4>
                    <ul className="tech-list">
                      {selectedProject.techStack.database.map((tech: string, index: number) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tech-category">
                    <h4>Tools</h4>
                    <ul className="tech-list">
                      {selectedProject.techStack.tools.map((tech: string, index: number) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="modal-section">
                <div className="section-header">
                  <Icons.Analytics />
                  <h3>Metrics</h3>
                </div>
                <div className="metrics-grid">
                  {Object.entries(selectedProject.metrics).map(([key, value], index) => (
                    <div className="metric-item" key={index}>
                      <span className="metric-value">{String(value)}</span>
                      <span className="metric-label">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </StyledProjects>
  );
};

export default memo(Projects);