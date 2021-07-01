import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [categories, setCategories] = React.useState(null);

  React.useEffect(() => {
    fetch('./api/V1/categories/list')
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <UserContext.Provider value={{ categories }}>
      {children}
    </UserContext.Provider>
  );
};
