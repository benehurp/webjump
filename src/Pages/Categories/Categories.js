import React from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './../../UserContext';
import { CategoriesColors } from './CategoriesColors';
import { CategoriesGender } from './CategoriesGender';
import { GridIconSVG } from './CategoriesIcons/GridIconSVG';
import { ListIconSVG } from './CategoriesIcons/ListIconSVG';
import { CategoriesNavMenu } from './CategoriesNavMenu';
import { CategoriesResults } from './CategoriesResults';

export const Categories = () => {
  const { categories, products, loading, error, setParams, setSelect, data } =
    React.useContext(UserContext);

  const { id } = useParams();

  const idApi = parseInt(
    categories.items.filter((item) => item.path === id).map((id) => id.id)
  );

  React.useEffect(() => {
    setParams(idApi);
    setSelect(null);
  }, [id, idApi, setParams, setSelect]);

  const categorieName = data.categorieName();

  if (loading)
    return (
      <div className="content">
        <section>Carregando...</section>
      </div>
    );

  if (error) return <p>{error}</p>;

  if (products === null) return null;

  return (
    <div className="content">
      <div className="filter-sidebar-container">
        <p className="navigation">
          Página inicial »{' '}
          <span className="navigation-point">
            {categorieName.map((e) => e.name)}
          </span>
        </p>
        <div className="filter-sidebar">
          <h2 className="filter-title">FILTRE POR</h2>
          <h3 className="filter-subtitle">CATEGORIAS</h3>
          <ul>
            <CategoriesNavMenu />
          </ul>
          {idApi !== 2 ? (
            <CategoriesColors title="Cores" className="color-pick" />
          ) : (
            <CategoriesGender title="Gênero" className="gender" />
          )}

          <h3 className="filter-subtitle">Tipo</h3>
          <ul>
            <li className="filter-list-categories">Corrida</li>
            <li className="filter-list-categories">Caminhada</li>
            <li className="filter-list-categories">Casual</li>
            <li className="filter-list-categories">Social</li>
          </ul>
        </div>
      </div>
      <section>
        <h1 className="title-product">{categorieName.map((e) => e.name)}</h1>
        <div className="filters">
          <div className="view-icons-container">
            <div className="view-grid">
              <GridIconSVG />
            </div>
            <div className="view-list">
              <ListIconSVG />
            </div>
          </div>
          <div className="flex-line">
            <p className="filter-description">ORDENAR POR</p>
            <select name="" id="">
              <option value="preco">Preço</option>
            </select>
          </div>
        </div>
        <CategoriesResults />
      </section>
    </div>
  );
};
