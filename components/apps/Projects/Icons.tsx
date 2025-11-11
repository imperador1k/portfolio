import type React from "react";

// Simple icon component with Unicode symbols for demonstration
// In a real implementation, you would use actual icon libraries
const Icons = {
  Analytics: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <line x1="18" x2="18" y1="20" y2="10" />
      <line x1="12" x2="12" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="14" />
    </svg>
  ),
  
  Calendar: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  ),
  
  Check: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  
  Clock: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  
  Cloud: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  
  Code: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  
  Database: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  
  Mobile: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <rect height="20" rx="2" ry="2" width="14" x="5" y="2" />
      <line x1="12" x2="12" y1="18" y2="18" />
    </svg>
  ),
  
  Payment: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <rect height="16" rx="2" ry="2" width="22" x="1" y="4" />
      <line x1="1" x2="23" y1="10" y2="10" />
    </svg>
  ),
  
  Rocket: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <path d="M12 2L3 9l9 7 9-7-9-7z" />
      <path d="M12 22l-9-7" />
      <path d="M12 22l9-7" />
      <line x1="12" x2="12" y1="12" y2="22" />
    </svg>
  ),
  
  Server: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <rect height="8" rx="2" ry="2" width="20" x="2" y="2" />
      <rect height="8" rx="2" ry="2" width="20" x="2" y="14" />
      <line x1="6" x2="6" y1="6" y2="6" />
      <line x1="6" x2="6" y1="18" y2="18" />
    </svg>
  ),
  
  Star: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  
  Team: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  
  Users: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  
  Web: (): React.ReactElement => (
    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
};

export default Icons;