import { memo, useEffect, useRef, useState } from "react";
import StyledLockScreen from "./StyledLockScreen";

const LockScreen = () => {
  const lockScreenRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [stage, setStage] = useState<number>(1); // 1 = time/date only, 2 = user info visible

  useEffect(() => {
    // Update time and date
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setDate(now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const lockScreen = lockScreenRef.current;
    if (!lockScreen) return;

    // Listen for boot completion to show lock screen
    const handleBootComplete = () => {
      // Show lock screen immediately after boot loader with smooth transition
      if (lockScreen) {
        // Ensure it's visible but start with 0 opacity for fade-in effect
        lockScreen.style.opacity = "0";
        lockScreen.style.pointerEvents = "auto";
        
        // Trigger fade-in animation
        setTimeout(() => {
          lockScreen.style.transition = "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          lockScreen.style.opacity = "1";
        }, 10);
      }
    };

    // Handle keyboard events for stage transitions
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore modifier keys alone
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      
      // Move to next stage or unlock
      if (e.key && e.key.length === 1 || e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') {
        if (stage === 1) {
          setStage(2); // Move to user info stage
        } else if (stage === 2) {
          handleUnlock(); // Unlock on second interaction
        }
      }
    };

    window.addEventListener("bootComplete", handleBootComplete);
    window.addEventListener("keydown", handleKeyDown);

    // Check if boot already completed
    if (localStorage.getItem("bootComplete") === "true") {
      handleBootComplete();
    }

    return () => {
      window.removeEventListener("bootComplete", handleBootComplete);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [stage]);

  const handleStageTransition = () => {
    if (stage === 1) {
      setStage(2); // Move to user info stage
    } else if (stage === 2) {
      handleUnlock(); // Unlock on second interaction
    }
  };

  const handleUnlock = () => {
    const lockScreen = lockScreenRef.current;
    if (!lockScreen) return;

    // Add a smooth fade-out effect
    lockScreen.style.transition = "opacity 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53)";
    lockScreen.style.opacity = "0";
    
    setTimeout(() => {
      // Restore taskbar and desktop
      const taskbar = document.querySelector('nav');
      const desktop = document.getElementById("desktop");
      
      if (taskbar) {
        (taskbar as HTMLElement).style.display = "";
        (taskbar as HTMLElement).style.opacity = "0";
        // Fade in taskbar
        setTimeout(() => {
          (taskbar as HTMLElement).style.transition = "opacity 0.5s ease";
          (taskbar as HTMLElement).style.opacity = "1";
        }, 50);
      }
      
      if (desktop) {
        desktop.style.display = "";
        desktop.style.opacity = "0";
        // Fade in desktop
        setTimeout(() => {
          desktop.style.transition = "opacity 0.5s ease";
          desktop.style.opacity = "1";
        }, 50);
      }
      
      // Remove lock screen from DOM
      if (lockScreen.parentNode) {
        lockScreen.parentNode.removeChild(lockScreen);
      }
      
      // Set a flag in localStorage to indicate lock screen is complete
      localStorage.setItem("lockScreenComplete", "true");
      
      // Dispatch a custom event to notify that lock screen is complete
      window.dispatchEvent(new CustomEvent("lockScreenComplete"));
    }, 600);
  };

  return (
    <StyledLockScreen 
      ref={lockScreenRef} 
      id="lock-screen" 
      onClick={handleStageTransition}
      className={stage === 2 ? "stage-2" : "stage-1"}
    >
      <div className="lock-screen-content">
        <div className="time-display">
          <div className="time">{time}</div>
          <div className="date">{date}</div>
        </div>
        
        <div className="user-info">
          <div className="user-avatar">
            <img 
              src="/Users/Public/Pictures/about-me.png" 
              alt="User Avatar" 
              draggable="false"
              loading="eager"
              width="140"
              height="140"
            />
          </div>
          <div className="unlock-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      
      {stage === 1 && (
        <div className="unlock-hint">Click or press any key</div>
      )}
    </StyledLockScreen>
  );
};

export default memo(LockScreen);