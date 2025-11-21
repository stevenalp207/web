import './QuienesSomos.css';

function QuienesSomos() {
  return (
    <div className="quienes-somos">
      <section className="about-hero">
        <div className="container">
          <h1>Quiénes Somos</h1>
          <p className="subtitle">Conoce más sobre ENERGÍA Y CONTROL S.A</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>ENERGÍA Y CONTROL S.A</h2>
            <p>
              Energía y Control, ENERTROL S.A. se crea en el año <strong>2004</strong> ante 
              la necesidad identificada en el mercado de un integrador para sistemas 
              auxiliares de energía.
            </p>
          </div>

          <div className="about-section mission">
            <h2>Nuestra Misión</h2>
            <blockquote>
              "Manejo Seguro y Confiable de la Energía Eléctrica, adaptándola a su Medida"
            </blockquote>
          </div>

          <div className="about-section">
            <h2>Nuestra Experiencia</h2>
            <p>
              Con más de 20 años de experiencia en el mercado, nos hemos consolidado 
              como líderes en la integración de sistemas auxiliares de energía, 
              ofreciendo soluciones personalizadas que garantizan seguridad, 
              confiabilidad y eficiencia.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <h3>🎯 Compromiso</h3>
              <p>Dedicados a brindar las mejores soluciones energéticas a nuestros clientes.</p>
            </div>
            <div className="value-card">
              <h3>🔒 Seguridad</h3>
              <p>La seguridad eléctrica es nuestra máxima prioridad en cada proyecto.</p>
            </div>
            <div className="value-card">
              <h3>💡 Innovación</h3>
              <p>Implementamos tecnología de punta para soluciones energéticas eficientes.</p>
            </div>
            <div className="value-card">
              <h3>⚡ Confiabilidad</h3>
              <p>Sistemas diseñados para garantizar un suministro eléctrico continuo y estable.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuienesSomos;
