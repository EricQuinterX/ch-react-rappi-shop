const Footer = () => {

  const styles = {
    footer: {
      backgroundColor: '#343a40',
      color: '#ffffff',
      padding: '20px 0',
    },
    footerLink: {
      color: '#ffffff',
      textDecoration: 'none',
    }
  };

  return (
    <footer className="text-center text-lg-start" style={styles.footer}>
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Somos</h5>
            <p>
              El mejor lugar donde podes comprar desde cualquier lugar y llega super rápido.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white" style={styles.footerLink}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-white" style={styles.footerLink}>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-white" style={styles.footerLink}>
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-white" style={styles.footerLink}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Seguinos</h5>
            <a href="#" className="text-white me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}
      >
        © 2025 Mi Sitio. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;