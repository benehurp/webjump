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
  }, [params, setParams, data, select, setSelect, setExecute]);

  return (
    <ul className="products">
      {execute.map(({ id, image, name, price, specialPrice }) => (
        <li key={id}>
          <img className="product-img" src={image} alt={name} />
          <p className="product-title">{name}</p>

          <p className="product-price">
            {specialPrice
              ? [
                  <span className="product-price-special">
                    R$ {specialPrice.toFixed(2).replace('.', ',')}
                  </span>,
                  <span>R$ {price.toFixed(2).replace('.', ',')}</span>,
                ]
              : `R$ ${price.toFixed(2).replace('.', ',')}`}
          </p>

          <button className="product-buy">COMPRAR</button>
        </li>
      ))}
    </ul>
  );
};
