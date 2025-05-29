"use client";

const isMobile = () => {
  const isMobile =
    typeof window !== "undefined"
      ? window?.matchMedia("(max-width: 768px)").matches
      : false;

  return isMobile;
};

export default isMobile;
