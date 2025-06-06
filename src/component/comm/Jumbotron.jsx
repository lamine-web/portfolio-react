import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/port.png';

const Jumbotron = () => {

  return (
    <div className="jumbotron d-flex align-items-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', // effet parallax simple
        height: '80vh', position: 'relative', color: 'white', overflow: 'hidden', }} >
   
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)',  zIndex: 1, }} ></div>

 
      <div className="container text-center" style={{ zIndex: 2 }}>
        <motion.h1 className="display-4 fw-bold" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 3 }} >Bienvenue sur mon portfolio
        </motion.h1>

        <motion.p className="lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.3 }} > Je construis des interfaces modernes et responsives avec passion.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <Link to="/projects" className="btn btn-primary mt-3">  Voir mes projets</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Jumbotron;
