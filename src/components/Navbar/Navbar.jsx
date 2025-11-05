import logo from "../../assets/logo-iara-games-60x60.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg p-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="./index.html">
          <img
            src={logo}
            alt="Iara Games, atualizar página"
            width="45"
            height="auto"
          />
          <span className="navbar-brand heading">Iara Games</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 menu">
            <li className="nav-item menu-link mx-3">
              <a className="nav-link" aria-current="page" href="./index.html">
                Home
              </a>
            </li>
            <li className="nav-item menu-link mx-3">
              <a className="nav-link" href="./index.html#lancamentos">
                Lançamentos
              </a>
            </li>
            <li className="nav-item menu-link mx-3">
              <a className="nav-link" href="./index.html#ofertas">
                Ofertas
              </a>
            </li>
            <li className="nav-item menu-link mx-3">
              <a className="nav-link" href="./listing-games.html">
                Lista de Jogos
              </a>
            </li>
          </ul>

          <a href="./login.html" className="btn-menu decorated-btn btn-active">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
