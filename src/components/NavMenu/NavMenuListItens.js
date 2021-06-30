import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavMenuListItens = ({ link, children, activeClassName }) => {
  return (
    <NavLink end to={link} activeClassName={activeClassName}>
      {' '}
      <li>{children} </li>
    </NavLink>
  );
};
