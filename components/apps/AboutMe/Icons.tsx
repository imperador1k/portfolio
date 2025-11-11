
// Simple icon component with Unicode symbols for demonstration
// In a real implementation, you would use actual icon libraries
const Icons = {
  Calendar: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  ),
  
  Code: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  
  Design: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="16" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  ),
  
  Briefcase: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <rect height="14" rx="2" ry="2" width="20" x="2" y="7" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  
  Graduation: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <path d="M12 2L3 9l9 7 9-7-9-7z" />
      <path d="M12 22l-9-7" />
      <path d="M12 22l9-7" />
    </svg>
  ),
  
  Explore: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16l4-4-4-4-4 4 4 4z" />
    </svg>
  ),
  
  Javascript: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <text fontSize="14" fontWeight="bold" x="5" y="16">JS</text>
    </svg>
  ),
  
  Language: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  ),
  
  Fitness: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
      <path d="M19 5L5 19" />
    </svg>
  ),
  
  Location: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  
  Mobile: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <rect height="20" rx="2" ry="2" width="14" x="5" y="2" />
      <line x1="12" x2="12" y1="18" y2="18" />
    </svg>
  ),
  
  Motorcycle: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <circle cx="12" cy="12" r="3" />
      <circle cx="18" cy="12" r="3" />
      <path d="M6 12h2l2-4 4 8 2-4h4" />
    </svg>
  ),
  
  Mountain: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <path d="M12 3L2 21h20L12 3z" />
      <path d="M12 7L8 15h8l-4-8z" />
    </svg>
  ),
  
  Node: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="8" />
      <line x1="12" x2="12" y1="4" y2="1" />
      <line x1="12" x2="12" y1="23" y2="20" />
      <line x1="20" x2="23" y1="12" y2="12" />
      <line x1="1" x2="4" y1="12" y2="12" />
      <line x1="17.66" x2="19.07" y1="6.34" y2="4.93" />
      <line x1="4.93" x2="6.34" y1="19.07" y2="17.66" />
      <line x1="17.66" x2="19.07" y1="17.66" y2="19.07" />
      <line x1="4.93" x2="6.34" y1="4.93" y2="6.34" />
    </svg>
  ),
  
  Project: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  
  React: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <path d="M12 22l-9-7" />
      <path d="M12 22l9-7" />
    </svg>
  ),
  
  Rocket: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <path d="M12 2L3 9l9 7 9-7-9-7z" />
      <path d="M12 22l-9-7" />
      <path d="M12 22l9-7" />
      <line x1="12" x2="12" y1="12" y2="22" />
    </svg>
  ),
  
  School: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <polyline points="16 13 12 17 8 13" />
    </svg>
  ),
  
  Star: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  
  Timeline: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <path d="M3 12h18" />
      <path d="M3 6h18" />
      <path d="M3 18h18" />
    </svg>
  ),
  
  User: () => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
};

export default Icons;