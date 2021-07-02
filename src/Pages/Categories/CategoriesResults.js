import React from 'react';
import { UserContext } from './../../UserContext';

export const CategoriesResults = () => {
  const { setSelect, select, data, params, setParams } =
    React.useContext(UserContext);

  const [execute, setExecute] = React.useState(data.listAll());

  React.useEffect(() => {
    if (select) {
      if (params !== 2) {
        setExecute(data.filterColor());
      } else {
        setExecute(data.filterGender());
      }
    } else {
      setExecute(data.listAll());
      setSelect(null);
    }

    // if (listC olors.includes(select) && params === 1) {
    //   setExecute(data.filterColor());
    // } else if (listGender.includes(select) && params === 2) {
    //   setExecute(data.filterGender());
    // } else {
    //   setExecute(data.listAll());
    //   setSelect(null);
    // }
  }, [params, setParams, data, select, setSelect, setExecute]);

  return (
    <ul className="products">
      {execute.map(({ id, image, name, price }) => (
        <li key={id}>
          <img className="product-img" src={image} alt={name} />
          <p className="product-title">{name}</p>
          <p className="product-price">{price}</p>
          <button className="product-buy">COMPRAR</button>
        </li>
      ))}
    </ul>
  );
};
