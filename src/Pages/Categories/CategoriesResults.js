import React from 'react';
import { UserContext } from './../../UserContext';

export const CategoriesResults = () => {
  const { data, color, select, setSelect, products } =
    React.useContext(UserContext);
  const [execute, setExecute] = React.useState(data.listAll());
  const [listColors, setListColors] = React.useState(data.listColors());

  React.useEffect(() => {
    if (listColors.includes(select)) {
      setExecute(data.filterColor());
    } else {
      setExecute(data.listAll());
      setSelect(null);
    }
  }, [setSelect, select, data, listColors]);

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
