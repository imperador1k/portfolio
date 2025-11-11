import { memo, useEffect } from "react";
import { useSession } from "contexts/session";

const StartupMessage: FC = () => {
  const { sessionLoaded } = useSession();

  useEffect(() => {
    // Check if lock screen is complete or wait for the event
    const checkLockScreenStatus = () => {
      if (sessionLoaded && localStorage.getItem("lockScreenComplete") === "true") {
        showStartupMessage();
      }
    };

    const showStartupMessage = () => {
      const hasSeenMessage = localStorage.getItem("hasSeenStartupMessage");
      if (!hasSeenMessage) {
        // Create the modal container
        const modal = document.createElement("div");
        modal.id = "startup-modal";
        modal.style.opacity = "0";
        modal.style.transition = "opacity 0.3s ease";
        modal.innerHTML = `
          <div id="startup-message">
            <div class="header">
              <div class="windows-logo">
                <div class="logo-square"></div>
                <div class="logo-square"></div>
                <div class="logo-square"></div>
                <div class="logo-square"></div>
              </div>
              <h2>Engineering Portfolio</h2>
            </div>
            
            <div class="content">
              <p>This is a customized version of the extraordinary <span class="highlight">daedalOS</span> project by <a href="https://github.com/DustinBrett" target="_blank" rel="noopener noreferrer">Dustin Brett</a>, a true master of his craft whose <a href="https://dustinbrett.com/" target="_blank" rel="noopener noreferrer">official website</a> showcases his remarkable talent and dedication.</p>
              
              <div class="engineering-note">
                <p class="philosophy"><strong>Engineering Philosophy:</strong> The highest form of engineering excellence is recognizing exceptional work and building upon it with thoughtful enhancements that honor the original vision while adding unique value.</p>
                <p class="quote">"Great engineers don't diminish the brilliance of others - they illuminate it through their own contributions."</p>
              </div>
              
              <div class="abilities">
                <p>This implementation demonstrates my ability to:</p>
                <ul>
                  <li>Identify and appreciate outstanding existing solutions</li>
                  <li>Thoughtfully extend complex systems while preserving their integrity</li>
                  <li>Create polished, production-ready customizations that enhance user experience</li>
                  <li>Demonstrate professional engineering judgment in building upon exceptional work</li>
                </ul>
              </div>
            </div>
            
            <div class="footer">
              <div class="credits">
                <div class="original-author">
                  Original: <a href="https://github.com/DustinBrett/daedalOS" target="_blank" rel="noopener noreferrer">daedalOS</a>
                </div>
                <div class="your-modifications">
                  Thoughtfully Enhanced for Portfolio
                </div>
              </div>
              
              <div class="buttons">
                <button id="close-message">Close</button>
                <button id="explore-btn">Explore Enhancements</button>
              </div>
            </div>
          </div>
        `;
        
        // Add styles
        const style = document.createElement("style");
        style.textContent = `
          #startup-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
          }
          
          #startup-message {
            background: rgba(32, 32, 32, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            padding: 0;
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05);
            max-width: 540px;
            width: 90%;
            max-height: 85vh;
            overflow: hidden;
            font-family: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, sans-serif;
            color: #ffffff;
            display: flex;
            flex-direction: column;
          }
          
          #startup-message .header {
            padding: 24px 24px 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            gap: 16px;
          }
          
          #startup-message .windows-logo {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 3px;
            width: 40px;
            height: 40px;
          }
          
          #startup-message .logo-square {
            background: #00adef;
            border-radius: 2px;
          }
          
          #startup-message h2 {
            margin: 0;
            color: #ffffff;
            font-weight: 300;
            font-size: 20px;
            letter-spacing: -0.02em;
          }
          
          #startup-message .content {
            padding: 16px 24px;
            overflow-y: auto;
            flex: 1;
          }
          
          #startup-message p {
            margin: 12px 0;
            line-height: 1.5;
            font-size: 14px;
            color: #e1e1e1;
          }
          
          #startup-message .highlight {
            color: #00a4ef;
            font-weight: 500;
          }
          
          #startup-message a {
            color: #4fc1ff;
            text-decoration: none;
            transition: color 0.2s ease;
          }
          
          #startup-message a:hover {
            color: #00a4ef;
            text-decoration: underline;
          }
          
          #startup-message ul {
            padding-left: 20px;
            margin: 12px 0;
          }
          
          #startup-message li {
            margin: 8px 0;
            line-height: 1.4;
            font-size: 14px;
          }
          
          #startup-message .engineering-note {
            background: rgba(0, 120, 215, 0.1);
            border-left: 2px solid #0078d7;
            padding: 16px;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
          }
          
          #startup-message .engineering-note .philosophy {
            margin: 0 0 10px 0;
            font-size: 13px;
            color: #d1d1d1;
          }
          
          #startup-message .engineering-note .quote {
            font-style: italic;
            color: #b1b1b1;
            margin: 0;
            padding-top: 10px;
            border-top: 1px dashed rgba(255, 255, 255, 0.1);
            font-size: 13px;
          }
          
          #startup-message .abilities p {
            margin-top: 20px;
          }
          
          #startup-message .footer {
            padding: 16px 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }
          
          #startup-message .credits {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            font-size: 12px;
            color: #a0a0a0;
          }
          
          #startup-message .original-author {
            display: flex;
            align-items: center;
            gap: 6px;
          }
          
          #startup-message .your-modifications {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #00a4ef;
          }
          
          #startup-message .buttons {
            display: flex;
            justify-content: flex-end;
            gap: 12px;
          }
          
          #startup-message button {
            background: #0078d7;
            color: white;
            border: none;
            padding: 8px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.2s ease;
            font-size: 13px;
          }
          
          #startup-message button:hover {
            background: #005a9e;
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          }
          
          #startup-message #close-message {
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #ccc;
          }
          
          #startup-message #close-message:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.3);
          }
          
          /* Scrollbar styling */
          #startup-message .content::-webkit-scrollbar {
            width: 6px;
          }
          
          #startup-message .content::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 3px;
          }
          
          #startup-message .content::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
          }
          
          #startup-message .content::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `;
        
        document.head.append(style);
        document.body.append(modal);
        
        // Fade in the modal
        setTimeout(() => {
          if (modal) {
            modal.style.opacity = "1";
          }
        }, 10);
        
        // Add event listeners for buttons
        const closeBtn = document.querySelector("#close-message");
        const exploreBtn = document.querySelector("#explore-btn");
        
        const handleClose = () => {
          // Fade out before removing
          if (modal) {
            modal.style.opacity = "0";
          }
          
          setTimeout(() => {
            localStorage.setItem("hasSeenStartupMessage", "true");
            if (modal && modal.parentNode) {
              modal.remove();
            }
            if (style && style.parentNode) {
              style.remove();
            }
          }, 300);
        };
        
        if (closeBtn) {
          closeBtn.addEventListener("click", handleClose);
        }
        
        if (exploreBtn) {
          exploreBtn.addEventListener("click", handleClose);
        }
      }
    };

    // Check immediately in case lock screen already completed
    checkLockScreenStatus();

    // Listen for lock screen completion event
    const handleLockScreenComplete = () => {
      // Add a small delay to ensure proper sequencing
      setTimeout(showStartupMessage, 100);
    };

    window.addEventListener("lockScreenComplete", handleLockScreenComplete);

    return () => {
      window.removeEventListener("lockScreenComplete", handleLockScreenComplete);
    };
  }, [sessionLoaded]);

  return null;
};

export default memo(StartupMessage);