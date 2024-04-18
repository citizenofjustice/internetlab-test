const useBodyScrollLock = () => {
  const bodyStyle = document.body.style;

  const lock = () => {
    bodyStyle.overflowY = "hidden";
  };

  const unlock = () => {
    bodyStyle.overflowY = "auto";
  };

  return { lock, unlock };
};

export { useBodyScrollLock };
