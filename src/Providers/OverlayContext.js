import React, { createContext, useContext, useEffect, useState } from 'react';

const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };
  useEffect(() => {
    const body = document.body;

    if (overlayVisible) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }

    return () => {
      body.style.overflow = 'visible'; // Reset overflow when the component unmounts
    };
  }, [overlayVisible]);

  return (
    <OverlayContext.Provider value={{ overlayVisible, toggleOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  return useContext(OverlayContext);
};
