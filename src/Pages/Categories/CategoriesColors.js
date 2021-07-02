import React from 'react';
import { UserContext } from './../../UserContext';

export const CategoriesColors = ({ title, className }) => {
  const { products, setSelect } = React.useContext(UserContext);

  return (
    <>
      <h3 className="filter-subtitle">{title}</h3>
      <ul className={className}>
        <li onClick={() => setSelect(null)}>T</li>
        {products.items
          .filter((e) => e.filter)
          .map(({ id, filter: [{ color }] }) => (
            <li
              onClick={() => setSelect(color)}
              key={id}
              style={{
                backgroundColor: 'var(--color-' + color + ')',
              }}
            ></li>
          ))}
      </ul>
    </>
  );
};
