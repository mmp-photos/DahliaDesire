import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [presentation, setPresentation] = useState(null);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    // Example logic to set presentation from URL params or other source
    const urlParams = new URLSearchParams(window.location.search);
    const presentationParam = urlParams.get('presentation');
    if (presentationParam) {
      setPresentation(presentationParam);
    }
  }, []);

  return (
    <AppContext.Provider value={{ presentation, setPresentation, initialRender, setInitialRender }}>
      {children}
    </AppContext.Provider>
  );
};
