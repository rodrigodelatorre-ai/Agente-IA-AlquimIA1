import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

/**
 * Componente Footer que proporciona la información de contacto, 
 * enlaces rápidos y redes sociales en el pie de página de la aplicación.
 */
const Footer: React.FC = () => {
  // Año actual para el copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>AlquimIA</h3>
          <p>
            Transformando datos en conocimiento mediante soluciones 
            de inteligencia artificial personalizadas para tu negocio.
          </p>
        </div>

        <div className="footer-section">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/acerca-de">Acerca de nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Servicios</h3>
          <ul>
            <li><Link to="/servicios/analisis-predictivo">Análisis predictivo</Link></li>
            <li><Link to="/servicios/procesamiento-lenguaje">NLP</Link></li>
            <li><Link to="/servicios/vision-artificial">Visión artificial</Link></li>
            <li><Link to="/servicios/automatizacion">Automatización</Link></li>
            <li><Link to="/servicios/consultoria">Consultoría IA</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <address>
            <p><i className="fas fa-map-marker-alt"></i> Av. Tecnológica 123, Ciudad IA</p>
            <p><i className="fas fa-phone"></i> +52 (55) 1234-5678</p>
            <p><i className="fas fa-envelope"></i> contacto@alquimia.com</p>
          </address>

          {/* Redes sociales */}
          <div className="social-icons">
            <a href="https://facebook.com/alquimia" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/alquimia" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/company/alquimia" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com/alquimia" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferior con copyright y enlaces legales */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} AlquimIA. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <Link to="/privacidad">Política de privacidad</Link>
            <Link to="/terminos">Términos y condiciones</Link>
            <Link to="/cookies">Política de cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;