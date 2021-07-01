import React from 'react';
import { NavMenuItems } from '../../Components/NavMenu/NavMenuItems';
import { UserContext } from './../../UserContext';

export const CategoriesNavMenu = () => {
  const { categories } = React.useContext(UserContext);

  return (
    <div>
      {categories.items.map(({ id, name, path }) => (
        <NavMenuItems
          key={id}
          name={name}
          path={`/categories/${path}`}
          activeClassName=""
          className="filter-list-categories"
        />
      ))}
    </div>
  );
};
