const isMobile = () => {
  const isMobile =
    window.matchMedia("(max-width: 768px) and (orientation: portrait)")
      .matches ||
    window.matchMedia("(max-width: 1024px) and (orientation: landscape)")
      .matches;

  return isMobile;
};

export default isMobile;
