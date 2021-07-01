import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavMenuItems = ({ name, path, activeClassName }) => {
  return (
    <NavLink end to={path} activeClassName={activeClassName}>
      <li>{name}</li>
    </NavLink>
  );
};
