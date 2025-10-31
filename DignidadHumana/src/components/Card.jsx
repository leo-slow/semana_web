import './Card.css';

import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Card3D({ name, years, originPlace, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Regular Card */}
      <motion.div 
        className="perspective-1000"
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

      {/* Expanded Modal */}
      {isExpanded && createPortal(
        <AnimatePresence>
          <>
            {/* Backdrop */}
            <motion.div
              className="card-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
            />

            {/* Expanded Card */}
            <motion.div
              className="card-expanded-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="card-expanded"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Close Button */}
                <button 
                  className="card-close-btn"
                  onClick={() => setIsExpanded(false)}
                  aria-label="Close"
                >
                  ✕
                </button>

                {/* Left Side - Info */}
                <div className="card-expanded-info">
                  <h2>{name}</h2>
                  <h3>{years}</h3>
                  <h4>{originPlace}</h4>
                  <p>{description}</p>
                </div>

                {/* Right Side - Image Placeholder */}
                <div className="card-expanded-image">
                  <div className="image-placeholder">
                    <span>Imagen de {name}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
