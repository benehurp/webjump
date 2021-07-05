import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './../../UserContext';

import { HeaderLogo } from './HeaderLogo';
import { HeaderSearchIconSVG } from './HeaderSearchIconSVG';
import { HeaderMenuIconSVG } from './HeaderMenuIconSVG';
import { HeaderMobileMenu } from './HeaderMobileMenu';
import { SearchBar } from './../SearchBar';
import { NavMenu } from '../NavMenu/NavMenu';

export const Header = () => {
  const { useWindowSize, openMenu, setOpenMenu } =
    React.useContext(UserContext);

  const [width] = useWindowSize();

  return (
    <header>
      <div className="header-container">
        <div className="login-bar-container">
          {' '}
          <div className="login-bar">
            <Link to="/">
              <b>Acesse sua Conta</b>
            </Link>{' '}
            ou{' '}
            <Link to="/">
              <b>Cadastre-se</b>
            </Link>
          </div>
        </div>
        <div className="header-content">
          {width < 680 ? (
            <>
              <div className="menu-icon" onClick={() => setOpenMenu(!openMenu)}>
                <HeaderMenuIconSVG key="2" />
              </div>
              {openMenu && <HeaderMobileMenu />}
              <HeaderLogo key="3" />
              <HeaderSearchIconSVG key="4" />
            </>
          ) : (
            <>
              <HeaderLogo key="1" />
              <SearchBar key="2" />
            </>
          )}
        </div>
      </div>
      <div className="menu-header-container">
        <NavMenu className="menu-header" activeClassName="link-menu-ativo" />
      </div>
    </header>
  );
};
