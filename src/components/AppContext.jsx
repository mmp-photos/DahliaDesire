import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [initialRender, setInitialRender] = useState(true);

  const navigate = useNavigate();

  const updateName = (newName) => {
      setName(newName);
      if (newName) {
          navigate(`/${newName}`);
      } else {
          navigate('/');
      }
  };


  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    if (nameParam) {
      setName(nameParam);
    }
  }, []);

  return (
    <AppContext.Provider value={{ name, setName: updateName, initialRender, setInitialRender }}>
      {children}
    </AppContext.Provider>
  );
};
