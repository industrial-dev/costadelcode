import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Map, Terminal, Wrench, Sparkles } from 'lucide-react';

type IconComponent = React.ComponentType<{
  size?: number;
  color?: string;
  strokeWidth?: number;
}>;

type Resource = {
  id: number;
  name: string;
  description: string;
  href: string;
  category: string;
  Icon: IconComponent;
};

const RESOURCES: Resource[] = [
  {
    id: 1,
    name: 'Roadmap.sh',
    description: 'Rutas de aprendizaje y guías para desarrolladores.',
    href: 'https://roadmap.sh',
    category: 'Aprender',
    Icon: Map,
  },
  {
    id: 2,
    name: 'Skills.sh',
    description:
      'Plataforma interactiva para evaluar y mejorar tus habilidades tech.',
    href: 'https://skills.sh',
    category: 'Skills',
    Icon: Terminal,
  },
  {
    id: 3,
    name: 'Hubdev.tools',
    description:
      'Navaja suiza de micro-herramientas esenciales para el día a día del dev.',
    href: 'https://hubdev.tools',
    category: 'Tools',
    Icon: Wrench,
  },
  {
    id: 4,
    name: 'v0 by Vercel',
    description: 'Generador de UI con IA usando Tailwind y Shadcn.',
    href: 'https://v0.dev',
    category: 'IA',
    Icon: Sparkles,
  },
];

const T = {
  cream50: 'var(--color-cream-50)',
  ink950: 'var(--color-ink-950)',
  ink800: 'var(--color-ink-800)',
  stone500: 'var(--color-stone-500)',
  accent500: 'var(--color-accent-500)',
  borderSoft: 'var(--border-soft)',
  glass96: 'rgb(252 251 249 / 0.98)',
  shadowFloat:
    '0 20px 48px rgb(17 17 17 / 0.18), 0 2px 8px rgb(17 17 17 / 0.06), inset 0 1px 0 rgb(255 255 255 / 0.9)',
  fontDisplay: 'var(--font-display)',
  fontSans: 'var(--font-sans)',
};

// Tween directo — sin frames de física de spring
const PANEL_TRANSITION = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.22,
} as const;
const ORB_TRANSITION = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.18,
} as const;

// CSS de hover inyectado con precedence="low" — React 19 lo mueve al <head> y lo deduplica
const HOVER_STYLES = `
  .rw-row  { transition: background 100ms; }
  .rw-row:hover { background: rgb(35 33 29 / 0.04) !important; }
  .rw-visit:hover { color: var(--color-ink-950) !important; }
  .rw-close:hover { background: rgb(35 33 29 / 0.12) !important; color: var(--color-ink-950) !important; }
  .rw-close, .rw-orb { outline: none; }
  .rw-close:focus-visible { outline: 2px solid var(--color-accent-500); outline-offset: 2px; }
  .rw-orb:focus-visible { outline: 2px solid var(--color-accent-500); outline-offset: 3px; }
`;

function CodeBracketsIcon({
  size = 28,
  color = T.accent500,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ color }}
    >
      <path
        d="M8 5L2 12L8 19"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 5L22 12L16 19"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3L10 21"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SPIN_TRANSITION = {
  duration: 7,
  repeat: Infinity,
  ease: 'linear',
} as const;

export default function ResourcesWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const didDrag = useRef(false);
  const spinControls = useAnimation();
  const [dragConstraints, setDragConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  useEffect(() => {
    const updateConstraints = () => {
      setDragConstraints({
        top: -(window.innerHeight - 128 - 28),
        left: -(window.innerWidth - 128 - 28),
        right: 0,
        bottom: 0,
      });
    };
    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  useEffect(() => {
    spinControls.start({ rotate: 360, transition: SPIN_TRANSITION });

    const handleVisibility = () => {
      if (document.hidden) {
        spinControls.stop();
      } else {
        spinControls.start({ rotate: 360, transition: SPIN_TRANSITION });
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      spinControls.stop();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [spinControls]);

  return (
    <>
      <style precedence="low">{HOVER_STYLES}</style>

      {/*
        Backdrop SIN backdropFilter — la causa #1 del lag al abrir.
        blur(5px) sobre toda la página se re-composita en CADA FRAME
        de la animación de opacidad. Overlay sólido semitransparente
        tiene el mismo coste visual que un rectángulo de color: mínimo.
      */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: 'rgb(17 17 17 / 0.22)',
            }}
          />
        )}
      </AnimatePresence>

      {/*
        Panel fijo centrado — independiente de la posición de la bolita.
        Solo opacity + scale (GPU puro). Scale reducido (0.96→1) para
        suavizar la entrada sin multiplicar los frames de cómputo.
      */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="rw-title"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.14 } }}
            transition={PANEL_TRANSITION}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              x: '-50%',
              y: '-50%',
              zIndex: 50,
              width: 'min(480px, calc(100vw - 32px))',
              background: T.glass96,
              border: '1px solid rgb(35 33 29 / 0.1)',
              boxShadow: T.shadowFloat,
              borderRadius: 28,
              willChange: 'transform, opacity',
              display: 'flex',
              flexDirection: 'column',
              fontFamily: T.fontSans,
            }}
          >
            {/* Header */}
            <div style={{ padding: '16px 20px 0', flexShrink: 0 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 4,
                    borderRadius: 99,
                    background: 'rgb(35 33 29 / 0.14)',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: 12,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: 'rgb(243 212 88 / 0.18)',
                      border: '1.5px solid rgb(243 212 88 / 0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <CodeBracketsIcon size={20} color={T.ink950} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: T.fontDisplay,
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.16em',
                        color: T.stone500,
                        margin: '0 0 2px',
                      }}
                    >
                      Comunidad · Costa del Code
                    </p>
                    <h3
                      id="rw-title"
                      style={{
                        fontFamily: T.fontDisplay,
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        color: T.ink950,
                        margin: 0,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                      }}
                    >
                      Recursos recomendados de hoy
                    </h3>
                  </div>
                </div>

                <button
                  className="rw-close"
                  onClick={() => setIsOpen(false)}
                  aria-label="Cerrar panel de recursos"
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    border: `1px solid ${T.borderSoft}`,
                    background: 'rgb(35 33 29 / 0.06)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    color: T.stone500,
                    flexShrink: 0,
                    transition: 'background 140ms, color 140ms',
                  }}
                >
                  ✕
                </button>
              </div>
            </div>

            <div
              style={{
                height: 1,
                background: 'rgb(35 33 29 / 0.08)',
                margin: '14px 0 0',
                flexShrink: 0,
              }}
            />

            {/* Lista */}
            <div
              style={{
                overflowY: 'auto',
                padding: '6px 10px 12px',
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgb(35 33 29 / 0.12) transparent',
              }}
            >
              {RESOURCES.map((resource) => (
                <div
                  key={resource.id}
                  className="rw-row"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '9px 10px',
                    borderRadius: 14,
                    background: 'transparent',
                    cursor: 'default',
                  }}
                >
                  {/* Icono con badge numérico */}
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 11,
                        background: 'rgb(243 212 88 / 0.18)',
                        border: '1.5px solid rgb(243 212 88 / 0.45)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <resource.Icon
                        size={17}
                        color={T.ink950}
                        strokeWidth={2.2}
                      />
                    </div>
                    <span
                      style={{
                        position: 'absolute',
                        top: -5,
                        left: -5,
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        background: T.accent500,
                        border: '2px solid rgb(252 251 249 / 0.98)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.58rem',
                        fontWeight: 800,
                        color: T.ink950,
                        fontFamily: T.fontDisplay,
                      }}
                    >
                      {resource.id}
                    </span>
                  </div>

                  {/* Nombre + descripción completa */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        marginBottom: 3,
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.84rem',
                          fontWeight: 700,
                          color: T.ink950,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {resource.name}
                      </span>
                      <span
                        style={{
                          fontSize: '0.57rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: T.stone500,
                          background: 'rgb(35 33 29 / 0.07)',
                          padding: '1px 5px',
                          borderRadius: 4,
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                          fontFamily: T.fontDisplay,
                        }}
                      >
                        {resource.category}
                      </span>
                    </div>
                    {/* Sin truncado — texto completo visible */}
                    <p
                      style={{
                        fontSize: '0.72rem',
                        color: 'rgb(35 33 29 / 0.55)',
                        margin: 0,
                        lineHeight: 1.45,
                      }}
                    >
                      {resource.description}
                    </p>
                  </div>

                  {/* Enlace */}
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rw-visit"
                    style={{
                      fontSize: '0.64rem',
                      fontWeight: 600,
                      color: T.stone500,
                      textDecoration: 'none',
                      padding: '2px 6px',
                      borderRadius: 5,
                      lineHeight: 1,
                      flexShrink: 0,
                      transition: 'color 100ms',
                      alignSelf: 'center',
                    }}
                  >
                    Visitar →
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bolita arrastrable ─────────────────────────────────────────────── */}
      {/*
        Wrapper externo: fijo en pantalla + animación de entrada (y + scale).
        El drag NO va aquí para evitar que animate={y:0} luche contra el drag.
      */}
      <motion.div
        initial={{ y: 130, opacity: 0, scale: 0.55 }}
        animate={{
          y: [130, -28, 10, -6, 2, 0],
          opacity: [0, 1, 1, 1, 1, 1],
          scale: [0.55, 1.12, 0.94, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          times: [0, 0.44, 0.62, 0.76, 0.88, 1],
          ease: 'easeOut',
        }}
        style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          zIndex: 51,
          width: 100,
          height: 100,
        }}
      >
        {/* Shell de drag: sin position fixed, ocupa el espacio del wrapper */}
        <motion.div
          drag={!isOpen}
          dragMomentum={false}
          dragConstraints={dragConstraints}
          dragElastic={0}
          onDragStart={() => {
            didDrag.current = true;
          }}
          onDragEnd={() => {
            setTimeout(() => {
              didDrag.current = false;
            }, 0);
          }}
          style={{
            width: '100%',
            height: '100%',
            touchAction: 'none',
            willChange: 'transform',
          }}
        >
          <motion.button
            className="rw-orb"
            onClick={() => {
              if (!didDrag.current) setIsOpen((v) => !v);
            }}
            animate={{ scale: isOpen ? 0.88 : 1, opacity: isOpen ? 0.7 : 1 }}
            transition={ORB_TRANSITION}
            aria-label="Recursos de la comunidad"
            aria-expanded={isOpen}
            style={{
              position: 'absolute',
              inset: 0,
              border: '1.5px solid rgb(35 33 29 / 0.12)',
              background: T.glass96,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              padding: 0,
              borderRadius: 9999,
              boxShadow:
                '0 4px 20px rgb(17 17 17 / 0.13), 0 1px 4px rgb(17 17 17 / 0.08)',
              willChange: 'transform, opacity',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 8,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '3px',
                opacity: 0.22,
              }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 3,
                    height: 3,
                    borderRadius: '50%',
                    background: 'rgb(35 33 29 / 0.35)',
                  }}
                />
              ))}
            </div>

            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <CodeBracketsIcon size={34} />
              <span
                style={{
                  fontFamily: T.fontDisplay,
                  fontSize: '0.56rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: T.stone500,
                  lineHeight: 1,
                }}
              >
                Recursos
              </span>
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}
