import { useState } from 'react';
import './Contacto.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por contactarnos. En breve nos pondremos en contacto con usted.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <div className="contacto">
      <section className="contact-hero">
        <div className="container">
          <h1>Contáctenos</h1>
          <p className="subtitle">Estamos aquí para ayudarle</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Información de Contacto</h2>
              <div className="info-item">
                <h3>📍 Dirección</h3>
                <p>Calle Principal #123<br />Bogotá, Colombia</p>
              </div>
              <div className="info-item">
                <h3>📞 Teléfono</h3>
                <p>+57 (1) 123-4567<br />+57 (1) 123-4568</p>
              </div>
              <div className="info-item">
                <h3>📧 Email</h3>
                <p>info@enertrol.com<br />ventas@enertrol.com</p>
              </div>
              <div className="info-item">
                <h3>🕒 Horario</h3>
                <p>Lunes a Viernes: 8:00 AM - 6:00 PM<br />Sábados: 9:00 AM - 1:00 PM</p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Envíenos un Mensaje</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="5"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;
