"use client";

const isMobile = () => {
  const isMobile =
    typeof window !== "undefined"
      ? window?.matchMedia("(max-width: 768px) and (orientation: portrait)")
          .matches ||
        window?.matchMedia("(max-width: 1024px) and (orientation: landscape)")
          .matches
      : false;

  return isMobile;
};

export default isMobile;
