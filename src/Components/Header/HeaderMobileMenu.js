import React from 'react';
import { UserContext } from './../../UserContext';
import { NavMenuItems } from './../NavMenu/NavMenuItems';

export const HeaderMobileMenu = () => {
  const { categories, openMenu, setOpenMenu } = React.useContext(UserContext);

  return (
    <>
      <nav key="1" className="animeTop menu-mobile">
        <ul>
          <NavMenuItems key="pagina-inicial" name="Página Inicial" path="/" />
          {categories.items.map(({ id, name, path }) => (
            <NavMenuItems key={id} name={name} path={`/categories/${path}`} />
          ))}
          <NavMenuItems key="contato" name="Contato" path="/contato" />
        </ul>

        <div className="menu-close" onClick={() => setOpenMenu(!openMenu)}>
          Fechar
        </div>
      </nav>
      <div
        className="animeTop menu-mobile-after"
        onClick={() => setOpenMenu(false)}
      ></div>
    </>
  );
};
