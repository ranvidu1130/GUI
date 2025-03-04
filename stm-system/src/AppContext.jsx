import React, { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState({});

  
    return (
      <AppContext.Provider value={{ user, setUser }}>
        {children}
      </AppContext.Provider>
    );
  };