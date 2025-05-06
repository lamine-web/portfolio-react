import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-3">&copy; {new Date().getFullYear()} Mon Portfolio — Tous droits réservés</p>
        <div className="d-flex justify-content-center gap-4">
          <a href="https://github.com/ton-profil" className="text-light text-decoration-none d-flex align-items-center" target="_blank" rel="noopener noreferrer" >
            <FaGithub size={20} className="me-2" /> 
          </a>
          <a href="https://linkedin.com/in/ton-profil" className="text-light text-decoration-none d-flex align-items-center" target="_blank" rel="noopener noreferrer" >
            <FaLinkedin size={20} className="me-2" />
          </a>
          <a href="mailto:exemple@email.com" className="text-light text-decoration-none d-flex align-items-center" >
            <FaEnvelope size={20} className="me-2" /> 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
