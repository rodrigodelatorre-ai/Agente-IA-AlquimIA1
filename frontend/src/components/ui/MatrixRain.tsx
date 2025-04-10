import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  fontSize?: number;
  color?: string;
  characters?: string;
  fadeOpacity?: number;
  speed?: number; // New prop for controlling speed
}

/**
 * Componente que genera un efecto de lluvia de código tipo Matrix en un canvas.
 * Se posiciona de forma fija en el fondo de la pantalla.
 * 
 * @param {MatrixRainProps} props - Propiedades para configurar el efecto.
 * @returns {JSX.Element} Canvas con el efecto Matrix Rain.
 */
const MatrixRain: React.FC<MatrixRainProps> = ({
  fontSize = 16, // Tamaño de fuente ligeramente más pequeño por defecto
  color = '#00ff41', // Verde Matrix clásico
  characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+=-[]{}\|;:'",.<>/?', // Más caracteres
  fadeOpacity = 0.05, // Opacidad de desvanecimiento más sutil
  speed = 0.5 // Velocidad reducida por defecto
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Función para redimensionar el canvas al tamaño de la ventana
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = characters.split('');
    const columnCount = Math.ceil(canvas.width / fontSize);
    const drops: number[] = [];

    // Inicializar la posición Y de las gotas aleatoriamente
    for (let i = 0; i < columnCount; i++) {
      drops[i] = Math.random() * canvas.height / fontSize;
    }

    let animationFrameId: number;

    const draw = () => {
      // Fondo semi-transparente para crear el efecto de estela
      ctx.fillStyle = `rgba(0, 0, 0, ${fadeOpacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Estilo del texto
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      // Dibujar cada columna de gotas
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Resetear la gota si sale de la pantalla o aleatoriamente
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        // Mover la gota hacia abajo
        drops[i] += speed;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw(); // Iniciar animación

    // Limpieza al desmontar el componente
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [fontSize, color, characters, fadeOpacity, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', // Fijo para que cubra toda la pantalla
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Detrás de todo el contenido
        pointerEvents: 'none', // No interactuable
      }}
      aria-hidden="true" // Ocultar de tecnologías de asistencia
    />
  );
};

export default MatrixRain;