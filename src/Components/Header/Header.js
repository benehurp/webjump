import { Link } from 'react-router-dom';

import { HeaderLogo } from './HeaderLogo';
import { HeaderSearchIconSVG } from './HeaderSearchIconSVG';
import { HeaderMenuIconSVG } from './HeaderMenuIconSVG';
import { SearchBar } from './../SearchBar';
import { NavMenu } from '../NavMenu/NavMenu';

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="login-bar">
          <Link to="/">
            <b>Acesse sua Conta</b>
          </Link>{' '}
          ou{' '}
          <Link to="/">
            <b>Cadastre-se</b>
          </Link>
        </div>
        <div className="header-content">
          <HeaderMenuIconSVG />
          <HeaderLogo />
          <div className="x-gap"></div>
          <SearchBar />
          <HeaderSearchIconSVG />
        </div>
        <NavMenu className="menu-header" activeClassName="link-menu-ativo" />
      </div>
    </header>
  );
};
