import { memo, useEffect } from "react";
import AppsLoader from "components/system/Apps/AppsLoader";
import Desktop from "components/system/Desktop";
import Taskbar from "components/system/Taskbar";
import StartupMessage from "components/custom/StartupMessage";
import BootLoader from "components/system/BootLoader";
import LockScreen from "components/system/LockScreen";
import useGlobalErrorHandler from "hooks/useGlobalErrorHandler";
import useGlobalKeyboardShortcuts from "hooks/useGlobalKeyboardShortcuts";
import useIFrameFocuser from "hooks/useIFrameFocuser";
import useUrlLoader from "hooks/useUrlLoader";

const Index = (): React.ReactElement => {
  useIFrameFocuser();
  useUrlLoader();
  useGlobalKeyboardShortcuts();
  useGlobalErrorHandler();

  useEffect(() => {
    // Clear boot complete flag on page load to ensure boot sequence runs
    localStorage.removeItem("bootComplete");
    localStorage.removeItem("lockScreenComplete");
    localStorage.removeItem("hasSeenStartupMessage");
  }, []);

  return (
    <Desktop>
      <BootLoader />
      <LockScreen />
      <Taskbar />
      <AppsLoader />
      <StartupMessage />
    </Desktop>
  );
};

export default memo(Index);