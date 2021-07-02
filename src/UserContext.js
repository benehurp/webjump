import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [categories, setCategories] = React.useState(null);
  const [products, setProducts] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [params, setParams] = React.useState(null);
  const [colors, setColors] = React.useState();
  const [gender, setGender] = React.useState(null);
  const [select, setSelect] = React.useState(null);

  //   const filterColor = React.useCallback(
  //     async function () {
  //       return products.items[1]
  // .filter((item) => item.path === params).map((e) => e.id);
  //     },
  //     [id],
  //   );

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

    function filtersItems() {
      if (params === 1) {
        setColors(['Preta', 'Laranja', 'Amarela', 'Rosa']);
      } else if (params === 2) {
        setGender(['Masculino', 'Feminino']);
      }
      if (params === 3) {
        setColors([
          'Preta',
          'Laranja',
          'Amarela',
          'Cinza',
          'Azul',
          'Preto',
          'Bege',
        ]);
      }
    }
    filtersItems();
  }, [params]);

  const data = {
    categorieName: () => {
      if (categories) {
        return categories.items.filter((item) => item.id === params);
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
    listAll: () => {
      if (products) {
        return products.items.filter((items) => items);
      }
    },
  };

  return (
    <UserContext.Provider
      value={{
        categories,
        products,
        params,
        setParams,
        error,
        loading,
        colors,
        gender,
        select,
        setSelect,
        data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
