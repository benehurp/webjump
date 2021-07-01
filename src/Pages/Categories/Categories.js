import React from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './../../UserContext';
import { MenuSidebar } from '../../Components/MenuSidebar/MenuSidebar';

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
      <div className="container-menu-sidebar">
        <p className="navigation">
          Página inicial &gt; <span className="navigation-point">{nav}</span>
        </p>
        <div className="menu-sidebar">
          <h2>Filtre por</h2>
          <h3>Categoria</h3>
          <ul>
            <li>Roupas</li>
            <li>Sapatos</li>
            <li>Acessórios</li>
          </ul>
          <h3>Cores</h3>
          <div className="color-pik">
            <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
          </div>
          <h3>Tipo</h3>
          <ul>Corrida</ul>
          <ul>Caminhada</ul>
          <ul>Casual</ul>
          <ul>Social</ul>
        </div>
      </div>
      <section>
        <h1>Sapatos</h1>
        <div className="filters">
          <div className="display-grid"></div>
          <div className="display-list"></div>
          <p>Ordenar por</p>
          <select name="" id="">
            <option value="preco">Preço</option>
          </select>
        </div>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </section>
    </div>
  );
};
