import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { MenuSidebar } from './components/MenuSidebar';
import { Catalog } from './pages/Catalog';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <MenuSidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
