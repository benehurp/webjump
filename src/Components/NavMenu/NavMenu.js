import React from 'react';
import { NavMenuItems } from './NavMenuItems';
import { UserContext } from '../../UserContext';

export const NavMenu = ({ className, activeClassName }) => {
  const { categories } = React.useContext(UserContext);

  if (categories === null) return null;

  return (
    <nav className={className}>
      <ul>
        <NavMenuItems
          key="pagina-inicial"
          name="Página Inicial"
          path="/"
          activeClassName={activeClassName}
        />
        {categories.items.map(({ id, name, path }) => (
          <NavMenuItems
            key={id}
            name={name}
            path={`/categories/${path}`}
            activeClassName={activeClassName}
          />
        ))}
        <NavMenuItems
          key="contato"
          name="Contato"
          path="/contato"
          activeClassName={activeClassName}
        />
      </ul>
    </nav>
  );
};
