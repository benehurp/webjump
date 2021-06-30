import { Link } from 'react-router-dom';
import { MenuIconSVG } from './layout/MenuIconSVG';
import { SearchIconSVG } from './layout/SearchIconSVG';
import { Logo } from './layout/Logo';
import { NavMenu } from './NavMenu/NavMenu';
import { SearchBar } from './SearchBar';

export const Header = () => {
  return (
    <header>
      <div className="login-bar">
        <Link to="/">
          <b>Acesse sua Conta</b>
        </Link>{' '}
        ou{' '}
        <Link to="/">
          <b>Cadastre-se</b>
        </Link>
      </div>
      <div className="header-container">
        <MenuIconSVG />
        <Logo />
        <div className="x-gap"></div>
        <SearchBar />
        <SearchIconSVG />
      </div>
      <NavMenu className="menu-header" activeClassName="link-menu-ativo" />
    </header>
  );
};
