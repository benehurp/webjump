import React from 'react';
import { UserContext } from './../../UserContext';

export const CategoriesGender = ({ title, className }) => {
  const { setSelect } = React.useContext(UserContext);

  return (
    <>
      <h3 className="filter-subtitle">{title}</h3>
      <ul className={className}>
        <li onClick={() => setSelect('Masculina')}>M</li>
        <li onClick={() => setSelect('Feminina')}>F</li>
        <li onClick={() => setSelect(null)}>T</li>
      </ul>
    </>
  );
};
