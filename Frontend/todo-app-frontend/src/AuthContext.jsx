// MyContext.js

import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState({
    data: null,
    updateData: (newData) => {
      setContextValue(() => ({
        data: newData,
      }));
    },
  });

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
