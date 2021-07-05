import React from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from './../../UserContext';

export const NavMenuItems = ({
  name,
  path,
  id,
  className,
  activeClassName,
}) => {
  const { setOpenMenu, useWindowSize } = React.useContext(UserContext);

  const [width] = useWindowSize();

  return (
    <NavLink end to={path} activeClassName={activeClassName}>
      {width < 680 ? (
        <li key={id} className={className} onClick={() => setOpenMenu(false)}>
          {name}
        </li>
      ) : (
        <li key={id} className={className}>
          {name}
        </li>
      )}
    </NavLink>
  );
};
