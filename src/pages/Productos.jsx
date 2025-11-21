import './Productos.css';

function Productos() {
  const productos = [
    {
      id: 1,
      nombre: 'UPS Industriales',
      descripcion: 'Sistemas de alimentación ininterrumpida para aplicaciones industriales críticas.',
      precio: 'Desde $5,000 USD',
      categoria: 'Energía de Respaldo'
    },
    {
      id: 2,
      nombre: 'Transformadores de Potencia',
      descripcion: 'Transformadores de alta calidad para distribución y transmisión de energía.',
      precio: 'Consultar',
      categoria: 'Transformación'
    },
    {
      id: 3,
      nombre: 'Cargadores de Baterías',
      descripcion: 'Sistemas de carga inteligente para bancos de baterías industriales.',
      precio: 'Desde $2,500 USD',
      categoria: 'Energía de Respaldo'
    },
    {
      id: 4,
      nombre: 'Sistemas de Control',
      descripcion: 'Soluciones de control y monitoreo para instalaciones eléctricas.',
      precio: 'Desde $3,000 USD',
      categoria: 'Control'
    },
    {
      id: 5,
      nombre: 'Tableros Eléctricos',
      descripcion: 'Tableros de distribución y control diseñados a medida.',
      precio: 'Consultar',
      categoria: 'Distribución'
    },
    {
      id: 6,
      nombre: 'Sistemas de Puesta a Tierra',
      descripcion: 'Soluciones completas de puesta a tierra para seguridad eléctrica.',
      precio: 'Desde $1,500 USD',
      categoria: 'Seguridad'
    }
  ];

  return (
    <div className="productos">
      <section className="products-hero">
        <div className="container">
          <h1>Nuestros Productos</h1>
          <p className="subtitle">Soluciones en Sistemas Auxiliares de Energía</p>
        </div>
      </section>

      <section className="products-content">
        <div className="container">
          <div className="products-grid">
            {productos.map(producto => (
              <div key={producto.id} className="product-card">
                <div className="product-category">{producto.categoria}</div>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <div className="product-price">{producto.precio}</div>
                <button className="btn-contact">Solicitar Información</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="custom-solutions">
        <div className="container">
          <h2>¿Necesita una Solución Personalizada?</h2>
          <p>
            En ENERTROL S.A desarrollamos proyectos a medida según sus necesidades específicas.
            Contáctenos para analizar su caso y ofrecerle la mejor solución.
          </p>
          <button className="btn btn-primary">Consultar Proyecto</button>
        </div>
      </section>
    </div>
  );
}

export default Productos;
