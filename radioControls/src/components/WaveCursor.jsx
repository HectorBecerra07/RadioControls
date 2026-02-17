import React, { useRef, useEffect } from 'react';

const WaveCursor = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    // Configuración mejorada
    const config = {
      lineCount: 40,        // Más líneas para más detalle
      speed: 0.02,          // Velocidad de movimiento
      amplitude: 30,        // Altura base de las ondas
      frequency: 0.01,      // Frecuencia de la onda
      resolution: 5,        // Menor número = Mayor definición (más suave)
      baseColor: { h: 180, s: 100, l: 50 }, // Cyan base
    };
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      // Fondo semi-transparente para dejar estela suave, pero limpiando lo suficiente
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Activar efecto de brillo/mezcla
      ctx.globalCompositeOperation = 'screen';
      
      time += config.speed;
      
      const width = canvas.width;
      const height = canvas.height;
      const mouse = mouseRef.current;

      for (let i = 0; i < config.lineCount; i++) {
        ctx.beginPath();
        
        // Color dinámico: Gradiente de Cyan a Púrpura según la línea
        const hue = 180 + (i / config.lineCount) * 100; // 180 (Cyan) -> 280 (Purple)
        ctx.strokeStyle = `hsla(${hue}, 80%, 60%, 0.5)`; // Más opaco y brillante
        ctx.lineWidth = 2; // Líneas más gruesas

        // Centrado: Empieza al 30% de la altura y ocupa el 40% (del 30% al 70%)
        // Esto las coloca justo en el medio, detrás del texto principal
        const yOffset = (height * 0.30) + (height * 0.40) * (i / config.lineCount);

        for (let x = 0; x <= width; x += config.resolution) {
            // Distancia del mouse a la línea actual (aproximada)
            const dx = x - mouse.x;
            const dy = yOffset - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            // Interacción del mouse: Más fuerte y amplio
            const interactionRadius = 350;
            let mouseEffect = 0;
            if (dist < interactionRadius) {
                // Función cuadrática para suavizar el pico de la interacción
                const force = (1 - dist / interactionRadius);
                mouseEffect = force * force * 150; // Ampiltud máxima de reacción
            }

            // Cálculo de onda compleja (seno + coseno + interacción)
            // Se suman varias ondas para dar detalle "líquido"
            const wave = Math.sin(x * config.frequency + time + i * 0.2) * config.amplitude +
                         Math.cos(x * 0.02 + time * 1.5) * (config.amplitude * 0.5);

            const y = yOffset + wave - mouseEffect; // El mouse "empuja" las líneas hacia arriba

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Restaurar modo de mezcla para el siguiente frame (limpieza)
      ctx.globalCompositeOperation = 'source-over';
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.8 }} // Control global de visibilidad
    />
  );
};

export default WaveCursor;
