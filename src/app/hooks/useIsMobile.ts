import isMobile from "@src/utils/isMobile";
import { useCallback, useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobileState, setIsMobileState] = useState(isMobile());

  const handleResize = useCallback(() => {
    if (isMobile() !== isMobileState) setIsMobileState(isMobile());
  }, [setIsMobileState, isMobileState]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return isMobileState;
};

export default useIsMobile;
