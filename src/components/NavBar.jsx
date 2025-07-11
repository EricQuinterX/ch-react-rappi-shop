import logo from './../assets/logo_mini.png';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router';

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
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo-chef" style={styles.logo} />
              <span style={{ fontSize: 30 }}> Rappi Food</span>
            </Link>
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
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink to="/foods" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Comidas</NavLink>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/foods?q=parrilla">Parrilla</Link></li>
                  <li><Link className="dropdown-item" to="/foods?q=aperitivo">Aperitivo</Link></li>
                  <li><Link className="dropdown-item" to="/foods?q=pasta">Pasta</Link></li>
                  <li><Link className="dropdown-item" to="/foods?q=postre">Postre</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/orders" className="nav-link">Pedidos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
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
