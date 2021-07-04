import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [categories, setCategories] = React.useState(null);
  const [products, setProducts] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [params, setParams] = React.useState(null);
  const [select, setSelect] = React.useState(null);

  React.useEffect(() => {
    async function apiFetch(url1, url2) {
      try {
        const response1 = await fetch(url1);
        const json1 = await response1.json(response1);
        setCategories(json1);
        const response2 = await fetch(url2);
        const json2 = await response2.json(response2);
        setProducts(json2);
        setError(null);
      } catch (erro) {
        console.log(erro);
      } finally {
        setLoading(false);
      }
    }
    apiFetch(`./api/V1/categories/list`, `./api/V1/categories/${params}`);
  }, [params]);

  const data = {
    categorieName: () => {
      if (categories) {
        return categories.items.filter((item) => item.id === params);
      }
    },
    filterGender: () => {
      if (products) {
        return products.items
          .filter(({ filter: [{ gender }] }) => gender === select)
          .map((gender) => gender);
      }
    },
    listColors: () => {
      if (products) {
        return products.items
          .filter((e) => e.filter)
          .map(({ id, filter: [{ color }] }) => color);
      }
    },
    filterColor: () => {
      if (products) {
        return products.items
          .filter(({ filter: [{ color }] }) => color === select)
          .map((color) => color);
      }
    },
    listGender: () => {
      if (products) {
        return products.items
          .filter((e) => e.filter)
          .map(({ id, filter: [{ gender }] }) => gender);
      }
    },
    listAll: () => {
      if (products) {
        return products.items.filter((items) => items);
      }
    },
  };

  function useWindowSize() {
    const [size, setSize] = React.useState([0, 0]);
    React.useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  return (
    <UserContext.Provider
      value={{
        categories,
        products,
        params,
        setParams,
        error,
        loading,
        select,
        setSelect,
        data,
        useWindowSize,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
