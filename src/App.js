function App() {
  return (
    <>
      <header>
        <div class="loginBar">
          <b>Acesse sua Conta</b> ou <b>Cadastre-se</b>
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
        <menu>
          <div class="menuContainer">
            <ul>
              <li>Página Inicial</li>
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Sapatos</li>
              <li>Contato</li>
            </ul>
          </div>
        </menu>
      </header>
    </>
  );
}

export default App;
