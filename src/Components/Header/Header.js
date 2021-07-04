import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './../../UserContext';

import { HeaderLogo } from './HeaderLogo';
import { HeaderSearchIconSVG } from './HeaderSearchIconSVG';
import { HeaderMenuIconSVG } from './HeaderMenuIconSVG';
import { SearchBar } from './../SearchBar';
import { NavMenu } from '../NavMenu/NavMenu';

export const Header = () => {
  const { useWindowSize } = React.useContext(UserContext);

  const [width, height] = useWindowSize();

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
          {width < 768 ? (
            [<HeaderMenuIconSVG />, <HeaderLogo />]
          ) : (
            <HeaderLogo />
          )}

          {width < 768 ? <HeaderSearchIconSVG /> : <SearchBar />}
        </div>
      </div>
      <div className="menu-header-container">
        <NavMenu className="menu-header" activeClassName="link-menu-ativo" />
      </div>
    </header>
  );
};
