import './App.css';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './UserContext';
import React from 'react';

import { Footer } from './Components/Footer';
import { Header } from './Components/Header/Header';
import { Home } from './Pages/Home/Home';
import { Categories } from './Pages/Categories/Categories';

function App() {
  const { categories } = React.useContext(UserContext);

  if (categories === null) return null;

  return (
    <>
      <Header />
      <Routes>
        <Route end path="/" element={<Home />} />
        <Route end path="/categories/:id" element={<Categories />} />
        {categories.items.map(({ id, path }) => (
          <Route
            end
            key={id}
            path={`/categories/:${path}`}
            element={<Categories />}
          />
        ))}
        <Route end path="/contato" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
