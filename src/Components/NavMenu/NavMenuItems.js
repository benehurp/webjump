import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavMenuItems = ({ name, path, className, activeClassName }) => {
  return (
    <NavLink end to={path} activeClassName={activeClassName}>
      <li className={className}>{name}</li>
    </NavLink>
  );
};
