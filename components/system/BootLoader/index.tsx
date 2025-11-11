import { memo, useEffect, useRef } from "react";
import StyledBootLoader from "components/system/BootLoader/StyledBootLoader";

const BootLoader = (): React.ReactElement => {
  const bootLoaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Query elements once; style mutations are guarded where used
    const taskbar = document.querySelector<HTMLElement>("nav"); // Taskbar is a nav element
    const desktop = document.querySelector<HTMLElement>("#desktop");

    // Hide them now if present
    if (taskbar?.style) {
      taskbar.style.display = "none";
    }

    if (desktop?.style) {
      desktop.style.display = "none";
    }

    // Use a timer variable we can clear in cleanup whether or not bootLoader exists now
    let timer: ReturnType<typeof setTimeout> | undefined;

    const bootLoader = bootLoaderRef.current;
    if (bootLoader?.style) {
      timer = setTimeout(() => {
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

          bootLoader?.remove();

          // Remove the styles when the boot loader is removed
          const bootStyles = document.querySelector<HTMLElement>("#boot-loader-styles");
          if (bootStyles) {
            bootStyles.remove();
          }
        }, 500);
      }, 5000);
    }

    // Clean up function to ensure desktop stays hidden
    return () => {
      if (timer) clearTimeout(timer);
      // Ensure desktop remains hidden until lock screen is unlocked
      if (desktop?.style) {
        desktop.style.display = "none";
      }
      if (taskbar?.style) {
        taskbar.style.display = "none";
      }
    };
  }, []);

  return (
    <StyledBootLoader 
      ref={bootLoaderRef}
      id="boot-loader" 
    >
      <div className="boot-content">
        <div className="windows-logo">
          <div className="logo-square" />
          <div className="logo-square" />
          <div className="logo-square" />
          <div className="logo-square" />
        </div>
        <div className="loading-text">Windows is loading...</div>
        <div className="progress-bar">
          <div className="progress" />
        </div>
        <div className="advice-text">
          Press F11 for full resolution and immersive experience
        </div>
      </div>
    </StyledBootLoader>
  );
};

export default memo(BootLoader);