import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

// Componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MatrixRain from './components/ui/MatrixRain'; // Importar el nuevo componente

// Estado global de autenticación (simulado)
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

// Componente para rutas protegidas
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />; // Usar replace para mejor historial
  }

  return <>{children}</>; // Usar fragmento
};

function App() {
  return (
    <Router>
      {/* Añadir el componente MatrixRain como fondo */}
      <MatrixRain 
        fontSize={14} // Ajustar tamaño
        fadeOpacity={0.03} // Más sutil
        speed={0.4} // Más lento
      />
      
      {/* Contenedor principal de la aplicación con z-index para estar por encima del fondo */}
      <div className="app" style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;