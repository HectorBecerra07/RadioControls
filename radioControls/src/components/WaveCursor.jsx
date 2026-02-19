import React, { useRef, useEffect, useState } from 'react';

const WaveCursor = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // This check runs only once on component mount.
    const touchCheck = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    setIsTouchDevice(touchCheck);
  }, []);
  
  useEffect(() => {
    // If it's a touch device, don't run the animation logic.
    if (isTouchDevice) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const config = {
      lineCount: 40,
      speed: 0.02,
      amplitude: 60,
      frequency: 0.01,
      resolution: 5,
      baseColor: { h: 180, s: 100, l: 50 },
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
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'screen';
      
      time += config.speed;
      
      const width = canvas.width;
      const height = canvas.height;
      const mouse = mouseRef.current;

      for (let i = 0; i < config.lineCount; i++) {
        ctx.beginPath();
        const hue = 180 + (i / config.lineCount) * 100;
        ctx.strokeStyle = `hsla(${hue}, 80%, 60%, 0.5)`;
        ctx.lineWidth = 2;
        const yOffset = (height * 0.20) + (height * 0.60) * (i / config.lineCount);

        for (let x = 0; x <= width; x += config.resolution) {
            const dx = x - mouse.x;
            const dy = yOffset - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const interactionRadius = 350;
            let mouseEffect = 0;
            if (dist < interactionRadius) {
                const force = (1 - dist / interactionRadius);
                mouseEffect = force * force * 150;
            }

            const wave = Math.sin(x * config.frequency + time + i * 0.2) * config.amplitude +
                         Math.cos(x * 0.02 + time * 1.5) * (config.amplitude * 0.5);

            const y = yOffset + wave - mouseEffect;

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.globalCompositeOperation = 'source-over';
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouchDevice]); // Re-run effect if isTouchDevice changes.

  // Don't render the canvas on touch devices.
  if (isTouchDevice) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default WaveCursor;
