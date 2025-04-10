import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../styles/Footer.css';

/**
 * Componente Footer que muestra la información de contacto, enlaces rápidos,
 * servicios ofrecidos y redes sociales de la empresa.
 * 
 * @returns {JSX.Element} Componente Footer
 */
const Footer: React.FC = () => {
  // Obtener el año actual para el copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>AlquimIA</h3>
          <p>
            Transformamos datos en soluciones inteligentes. Nuestro enfoque innovador
            combina inteligencia artificial y análisis avanzado para potenciar 
            tu negocio hacia el futuro digital.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Sobre Nosotros</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Nuestros Servicios</h3>
          <ul>
            <li><Link to="/servicios/analitica-avanzada">Analítica Avanzada</Link></li>
            <li><Link to="/servicios/inteligencia-artificial">Inteligencia Artificial</Link></li>
            <li><Link to="/servicios/machine-learning">Machine Learning</Link></li>
            <li><Link to="/servicios/big-data">Big Data</Link></li>
            <li><Link to="/servicios/consultoria">Consultoría Tecnológica</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <address>
            <p>
              <FaMapMarkerAlt />
              Av. Insurgentes Sur 1602, Ciudad de México
            </p>
            <p>
              <FaPhoneAlt />
              +52 (55) 1234 5678
            </p>
            <p>
              <FaEnvelope />
              info@alquimia.mx
            </p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} AlquimIA. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <Link to="/privacidad">Política de Privacidad</Link>
            <Link to="/terminos">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;