import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>ENERTROL S.A</h1>
          <h2>Energía y Control</h2>
          <p className="hero-subtitle">
            Manejo Seguro y Confiable de la Energía Eléctrica, adaptándola a su Medida
          </p>
          <div className="hero-buttons">
            <Link to="/productos" className="btn btn-primary">
              Ver Productos
            </Link>
            <Link to="/quienes-somos" className="btn btn-secondary">
              Conocer Más
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Nuestros Servicios</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Sistemas Auxiliares de Energía</h3>
              <p>Soluciones integrales para sistemas auxiliares de energía confiables y eficientes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Integración de Sistemas</h3>
              <p>Especialistas en la integración de sistemas eléctricos industriales.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Seguridad Eléctrica</h3>
              <p>Garantizamos el manejo seguro de la energía eléctrica en todas las instalaciones.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>¿Necesita una Solución Energética?</h2>
          <p>Contáctenos y permítanos adaptar la energía a su medida</p>
          <Link to="/contacto" className="btn btn-primary">
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
