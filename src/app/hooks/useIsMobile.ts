import isMobile from "@src/utils/isMobile";
import { useCallback, useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobileState, setIsMobileState] = useState(isMobile());

  const handleResize = useCallback(() => {
    if (isMobile() !== isMobileState) setIsMobileState(isMobile());
  }, [setIsMobileState, isMobileState]);

  useEffect(() => {
    document.body.addEventListener("resize", handleResize);
    return () => {
      document.body.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return isMobileState;
};

export default useIsMobile;
