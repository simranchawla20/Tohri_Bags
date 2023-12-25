import React, { createContext, useContext, useEffect, useState } from 'react';

const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };
  useEffect(() => {
    if (window.location.pathname !== "/") {
      var overlay = document.getElementsByClassName("overlay");
      var sidebar = document.getElementsByClassName("sidebar");
      if (overlay.length > 0 && sidebar.length>0) {
        overlay[0].style.top = "66px";
        sidebar[0].style.top = "67px";
        sidebar[0].style.height = "92%";
      }
    }
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
