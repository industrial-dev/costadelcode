import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { useSpring } from '@react-spring/web';

export default function GlobeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef<number>(0);

  const [{ r }, api] = useSpring<{ r: number }>(() => ({
    r: 0,
    config: { mass: 1, tension: 280, friction: 40, precision: 0.001 },
  }));

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let rafId: number;

    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener('resize', onResize);

    if (!canvasRef.current) return;

    // Read from the parent container which already has CSS dimensions
    width = canvasRef.current.parentElement?.offsetWidth || 500;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.2,
      dark: 1.1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.8,
      mapBaseBrightness: 0.05,
      baseColor: [1, 1, 1],
      markerColor: [0.953, 0.831, 0.345],
      glowColor: [1, 1, 1],
      markers: [{ location: [36.4247747, -5.144903], size: 0.04 }],
      scale: 1.0,
      opacity: 0.7,
      markerElevation: 0.005,
    });

    const animate = () => {
      phi += 0.005;
      globe.update({
        phi: phi + r.get(),
        width: width * 2,
        height: width * 2,
      });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const tid = setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = '0.7';
    });

    return () => {
      clearTimeout(tid);
      cancelAnimationFrame(rafId);
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 600,
        aspectRatio: '1 / 1',
        margin: 'auto',
        position: 'relative',
      }}
    >
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Globo terráqueo interactivo mostrando la ubicación de Costa del Sol"
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 200 });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 100 });
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          contain: 'layout paint size',
          opacity: 0,
          transition: 'opacity 1s ease',
          cursor: 'grab',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}
