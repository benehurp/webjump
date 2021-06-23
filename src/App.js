import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header>
        <div class="loginBar">
          <Link to="/">
            <b>Acesse sua Conta</b>
          </Link>{' '}
          ou{' '}
          <Link to="/">
            <b>Cadastre-se</b>
          </Link>
        </div>
        <div class="headerContainer">
          <div class="logo">
            <img
              src="./assets/logo_header.jpg"
              alt="Logo: Webump! More than just a plataform"
            />
          </div>
          <div class="searchBar">
            <input type="text" />
            <button>BUSCAR</button>
          </div>
        </div>
        <nav className="menuHeader">
          <ul>
            <li>Página Inicial</li>
            <li>Camisetas</li>
            <li>Calças</li>
            <li>Sapatos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
      <div className="main">
        <div className="menuSidebar">
          <nav>
            <ul>
              <li>Página Inicial</li>
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Sapatos</li>
              <li>Contato</li>
            </ul>
          </nav>
        </div>
        <section>
          <div className="banner"></div>
          <h1>Seja bem-vindo!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            voluptate, provident aliquid blanditiis unde vitae eaque molestias
            iusto debitis ullam quam vero ipsam quae dolorum ea corrupti
            possimus? Ut, expedita. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Hic dicta in, at veritatis minus, ab molestias
            velit architecto repudiandae aliquid nemo reprehenderit delectus,
            consequatur necessitatibus? Beatae, quidem commodi. Iste, quos!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aliquam
            sunt! Earum necessitatibus, labore inventore dolorem sunt adipisci,
            expedita laborum incidunt beatae cumque quas odio quisquam maxime
            quod, esse officia!
          </p>
          <p>
            Provident aliquid blanditiis unde vitae eaque molestias iusto
            debitis ullam quam vero ipsam quae dolorum ea corrupti possimus? Ut,
            expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Hic dicta in, at veritatis minus, ab molestias velit architecto
            repudiandae aliquid nemo reprehenderit delectus, consequatur
            necessitatibus? Beatae, quidem commodi.
          </p>
          <p>
            Officia voluptate, provident aliquid blanditiis unde vitae eaque
            molestias iusto debitis ullam quam vero ipsam quae dolorum ea
            corrupti possimus? Ut, expedita. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Hic dicta in, at veritatis minus, ab
            molestias velit architecto repudiandae aliquid nemo reprehenderit
            delectus, consequatur necessitatibus? Beatae, quidem commodi. Iste,
            quos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            aliquam sunt!
          </p>
        </section>
      </div>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
