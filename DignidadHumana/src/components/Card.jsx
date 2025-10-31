import './Card.css';

/*function Card({ name, years, originPlace, description }){
  return(
    <div className="card">
      <h2>{name}</h2>
      <h3>{years}</h3>
      <h4>{originPlace}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Card;*/

import { useState } from "react";
import { motion } from "framer-motion";

export default function Card3D({ name, years, originPlace, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="perspective-1000">
      <motion.div
        className="relative w-64 h-40 cursor-pointer"
        onClick={() => setFlipped(!flipped)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="card-front">
          <h2>{name}</h2>
          <h3>{years}</h3>
          <h4>{originPlace}</h4>
          
        </div>

        {/* Back */}
        <div
          className="card-back"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p>{description}</p>
        </div>
      </motion.div>
    </div>
  );
}
