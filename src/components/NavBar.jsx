import logo from './../assets/logo_mini.png';
import CartWidget from './CartShopping';

const styles = {
  nav: {
    backgroundColor: '#fada7a',
  },
  logo: {
    width: '50px',
    height: '50px',
  },
  ul: {
    width: '100%',
    fontSize: '1.1rem',
    fontWeight: '600',
  },
};

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={styles.nav}>
        <div className="container">
          <div className="logo">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo-chef" style={styles.logo} />
              <span style={{ fontSize: 30 }}> Rappi Food</span>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav d-flex justify-content-end"
              style={styles.ul}
            >
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Comidas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pedidos">
                  Pedidos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
