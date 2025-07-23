import React, { useEffect, useRef } from 'react';

export default function BackgroundAnimation() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const loadScripts = async () => {
      // Load THREE.js if not already loaded
      if (!window.THREE) {
        const threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
        document.head.appendChild(threeScript);
        await new Promise((resolve) => (threeScript.onload = resolve));
      }

      // Load Vanta.js if not already loaded
      if (!window.VANTA) {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
        document.head.appendChild(vantaScript);
        await new Promise((resolve) => (vantaScript.onload = resolve));
      }

      // Initialize Vanta effect
      if (!vantaEffect.current && window.VANTA) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3b0764, // Purple color matching your theme
          backgroundColor: 0x0a0021, // Dark background color matching your theme
          points: 10.00,
          maxDistance: 25.00,
          spacing: 15.00
        });
      }
    };

    loadScripts();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
} 