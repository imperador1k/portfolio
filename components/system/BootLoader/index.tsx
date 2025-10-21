import { memo, useEffect, useRef } from "react";
import StyledBootLoader from "./StyledBootLoader";

const BootLoader = () => {
  const bootLoaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bootLoader = bootLoaderRef.current;
    if (!bootLoader) return;

    // Hide the entire taskbar container during boot
    const taskbar = document.querySelector('nav'); // Taskbar is a nav element
    const desktop = document.getElementById("desktop");
    
    // Store original styles for restoration
    let originalTaskbarStyle = '';
    if (taskbar) {
      originalTaskbarStyle = (taskbar as HTMLElement).style.display;
      (taskbar as HTMLElement).style.display = "none";
    }
    
    let originalDesktopStyle = '';
    if (desktop) {
      originalDesktopStyle = desktop.style.display;
      desktop.style.display = "none";
    }

    const timer = setTimeout(() => {
      bootLoader.style.opacity = "0";
      bootLoader.style.pointerEvents = "none";
      
      setTimeout(() => {
        // Set a flag in localStorage to indicate boot is complete
        localStorage.setItem("bootComplete", "true");
        
        // Dispatch a custom event to notify that boot is complete
        window.dispatchEvent(new CustomEvent("bootComplete"));
        
        // IMPORTANT: Do not restore desktop/taskbar here
        // Keep them hidden until lock screen is unlocked
        // The lock screen will handle restoration when unlocked
        
        if (bootLoader.parentNode) {
          bootLoader.parentNode.removeChild(bootLoader);
        }
        // Remove the styles when the boot loader is removed
        const bootStyles = document.getElementById("boot-loader-styles");
        if (bootStyles && bootStyles.parentNode) {
          bootStyles.parentNode.removeChild(bootStyles);
        }
      }, 500);
    }, 5000);

    // Clean up function to ensure desktop stays hidden
    return () => {
      clearTimeout(timer);
      // Ensure desktop remains hidden until lock screen is unlocked
      if (desktop) {
        desktop.style.display = "none";
      }
      if (taskbar) {
        (taskbar as HTMLElement).style.display = "none";
      }
    };
  }, []);

  return (
    <StyledBootLoader ref={bootLoaderRef} id="boot-loader">
      <div className="boot-content">
        <div className="windows-logo">
          <div className="logo-square"></div>
          <div className="logo-square"></div>
          <div className="logo-square"></div>
          <div className="logo-square"></div>
        </div>
        <div className="loading-text">Windows is loading...</div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <div className="advice-text">
          Press F11 for full resolution and immersive experience
        </div>
      </div>
    </StyledBootLoader>
  );
};

export default memo(BootLoader);