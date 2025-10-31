import "./Card.css";
import { createPortal } from "react-dom";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

export default function Card3D({
  name,
  years,
  originPlace,
  description,
  image,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const [portalEl, setPortalEl] = useState(null);

  useEffect(() => {
    const el =
      typeof document !== "undefined"
        ? document.getElementById("modal-root") || document.body
        : null;
    setPortalEl(el);
    setPortalReady(Boolean(el));
  }, []);

  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  // motion values
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotX = useTransform(my, [0, 1], [12, -12]);
  const rotY = useTransform(mx, [0, 1], [-18, 18]);
  const scale = useSpring(hovered ? 1.05 : 1, { stiffness: 260, damping: 20 });
  const parallaxX = useTransform(mx, [0, 1], [14, -14]);
  const parallaxY = useTransform(my, [0, 1], [-10, 10]);
  const glareX = useTransform(mx, [0, 1], [0, 100]);
  const glareY = useTransform(my, [0, 1], [0, 100]);
  const glareLeft = useTransform(glareX, (v) => `${v}%`);
  const glareTop = useTransform(glareY, (v) => `${v}%`);

  function handleMouseMove(e) {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    mx.set((e.clientX - bounds.left) / bounds.width);
    my.set((e.clientY - bounds.top) / bounds.height);
  }

  return (
    <>
      {/* Card compacta */}
      <motion.div
        className="[perspective:1000px]"
        layoutId={`card-${name}`}
        onClick={() => setIsExpanded(true)}
      >
        <motion.div
          className="relative w-64 h-40 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="card-front">
            <h2>{name}</h2>
            <h3>{years}</h3>
            <h4>{originPlace}</h4>
          </div>
        </motion.div>
      </motion.div>

      {/* Portal */}
      {portalReady &&
        portalEl &&
        createPortal(
          <AnimatePresence>
            {isExpanded && (
              <>
                {/* Backdrop */}
                <motion.div
                  className="card-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsExpanded(false)}
                />

                {/* Contenedor modal */}
                <motion.div
                  className="card-expanded-container"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={`title-${name}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Card expandida con layoutId compartido */}
                  <motion.div
                    className="card-expanded"
                    layoutId={`card-${name}`}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <button
                      className="card-close-btn"
                      onClick={() => setIsExpanded(false)}
                      aria-label="Close"
                    >
                      ✕
                    </button>

                    {/* Info */}
                    <div className="card-expanded-info">
                      <h2 id={`title-${name}`}>{name}</h2>
                      <h3>{years}</h3>
                      <h4>{originPlace}</h4>
                      <p>{description}</p>
                    </div>

                    {/* Imagen 3D */}
                    <div className="card-expanded-image">
                      <motion.div
                        ref={ref}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        style={{
                          perspective: 1000,
                          width: "100%",
                          height: "100%",
                        }}
                        className="relative"
                      >
                        <motion.div
                          style={{ rotateX: rotX, rotateY: rotY, scale }}
                          className="group relative h-full w-full rounded-2xl shadow-xl overflow-hidden will-change-transform"
                        >
                          <img
                            src={image}
                            alt={name}
                            className="absolute inset-0 h-full w-full object-contain"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                          <motion.div
                            style={{ left: glareLeft, top: glareTop }}
                            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 h-[140%] w-[140%] rounded-[50%] opacity-0 group-hover:opacity-60"
                          >
                            <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),rgba(255,255,255,0)_60%)]" />
                          </motion.div>
                          <motion.div
                            style={{ x: parallaxX, y: parallaxY }}
                            className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1 text-white drop-shadow-sm"
                          >
                            <h3 className="text-xl font-semibold leading-tight">
                              Imagen de
                            </h3>
                            <p className="text-sm text-white/90">{name}</p>
                          </motion.div>
                          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          portalEl,
        )}
    </>
  );
}
