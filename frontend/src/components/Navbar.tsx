import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

/**
 * Componente de barra de navegación principal de la aplicación.
 * Gestiona la navegación entre páginas y el estado de autenticación.
 */
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Verificar si el usuario está autenticado
  const isAuthenticated = localStorage.getItem('token') !== null;
  
  /**
   * Maneja el cierre de sesión del usuario
   * Elimina el token de autenticación y redirecciona a la página de inicio
   */
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsMenuOpen(false);
    navigate('/');
  };

  /**
   * Alterna el estado del menú móvil
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsMenuOpen(false)}>
          <img src="/logo.svg" alt="AlquimIA Logo" className="logo-img" />
          <span>AlquimIA</span>
        </Link>

        {/* Botón hamburguesa para móvil */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* Menú de navegación */}
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link 
              to="/" 
              className="nav-link" 
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/servicios" 
              className="nav-link" 
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/acerca-de" 
              className="nav-link" 
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </Link>
          </li>
          
          {/* Renderizado condicional basado en el estado de autenticación */}
          {isAuthenticated ? (
            <>
              <li className="nav-item">
                <Link 
                  to="/dashboard" 
                  className="nav-link" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn-logout" 
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link 
                  to="/login" 
                  className="nav-link" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Iniciar Sesión
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/register" 
                  className="nav-link btn-primary" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Registrarse
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;