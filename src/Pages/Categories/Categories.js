import React from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './../../UserContext';
import { MenuSidebar } from '../../Components/MenuSidebar/MenuSidebar';
import { GridIconSVG } from './CategoriesIcons/GridIconSVG';
import { ListIconSVG } from './CategoriesIcons/ListIconSVG';
import { CategoriesNavMenu } from './CategoriesNavMenu';

export const Categories = () => {
  const { categories } = React.useContext(UserContext);
  const [products, setProducts] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const { id } = useParams();

  const idApi = parseInt(
    categories.items.filter((item) => item.path === id).map((id) => id.id)
  );
  const nav = categories.items
    .filter((item) => item.path === id)
    .map((id) => id.name);

  React.useEffect(() => {
    async function fetchCategories(url) {
      try {
        const response = await fetch(url);
        const json = await response.json(response);
        setProducts(json);
        console.log(json);
      } catch (erro) {
        setError('Um erro ocorreu');
      } finally {
        setLoading(false);
      }
    }
    fetchCategories(`./api/V1/categories/${idApi}`);
  }, [idApi]);

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
          Página inicial » <span className="navigation-point">{nav}</span>
        </p>
        <div className="filter-sidebar">
          <h2 className="filter-title">FILTRE POR</h2>
          <h3 className="filter-subtitle">CATEGORIAS</h3>
          <ul>
            <CategoriesNavMenu />
          </ul>
          <h3 className="filter-subtitle">Cores</h3>
          <ul className="color-pick">
            <li></li>
            <li></li>
            <li></li>
          </ul>
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
        <h1 className="title-product">{nav}</h1>
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
        <ul className="products">
          {products.items.map(({ id, image, name, price }) => (
            <li key={id}>
              <img className="product-img" src={image} alt={name} />
              <p className="product-title">{name}</p>
              <p className="product-price">{`R$ ${price}`}</p>
              <button className="product-buy">COMPRAR</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
