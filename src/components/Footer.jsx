import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ENERTROL S.A</h3>
          <p>Energía y Control</p>
          <p>Manejo Seguro y Confiable de la Energía Eléctrica</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/quienes-somos">Quiénes Somos</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@enertrol.com</p>
          <p>Teléfono: +57 (1) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ENERTROL S.A. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
