import { NavLink } from 'react-router-dom';

export const HeaderLogo = () => {
  return (
    <div className="logo">
      <NavLink to="/">
        <img
          src="./assets/logo_header.jpg"
          alt="Logo: Webump! More than just a plataform"
        />
      </NavLink>
    </div>
  );
};
