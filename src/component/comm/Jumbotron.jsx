import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Jumbotron = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="jumbotron d-flex align-items-center"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqOjwVK0flEDI3SjORsNlWE2Ndv3PeMUM_8g&s')`,backgroundSize: 'cover',backgroundAttachment: 'fixed', // effet parallax simple
        backgroundPositionY: `${offsetY * 0.5}px`, // léger mouvement vertical
         height: '80vh', position: 'relative', color: 'white',overflow: 'hidden', }}>
      {/* Overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1,}}></div>

      {/* Animated Content */}
      <div className="container text-center" style={{ zIndex: 2 }}>
        <motion.h1 className="display-4 fw-bold" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} >
          Bienvenue sur mon portfolio
        </motion.h1>

        <motion.p className="lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          Je construis des interfaces modernes et responsives avec passion.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}transition={{ duration: 0.8, delay: 0.6 }} >
          <Link to="/projects" className="btn btn-primary mt-3">
            Voir mes projets
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Jumbotron;
