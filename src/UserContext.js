import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
