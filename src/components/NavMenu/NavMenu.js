import React from 'react';
import { NavMenuListItens } from './NavMenuListItens';

export const NavMenu = ({ className, activeClassName }) => {
  return (
    <nav className={className}>
      <ul>
        <NavMenuListItens link="/" activeClassName={activeClassName}>
          Página Inicial
        </NavMenuListItens>
        <NavMenuListItens link="catalog" activeClassName={activeClassName}>
          Catálogo
        </NavMenuListItens>
        <NavMenuListItens link="camisetas" activeClassName={activeClassName}>
          Camisetas
        </NavMenuListItens>
        <NavMenuListItens link="calcas" activeClassName={activeClassName}>
          Calças
        </NavMenuListItens>
        <NavMenuListItens link="sapatos" activeClassName={activeClassName}>
          Sapatos
        </NavMenuListItens>
        <NavMenuListItens link="contato" activeClassName={activeClassName}>
          Contato
        </NavMenuListItens>
      </ul>
    </nav>
  );
};
