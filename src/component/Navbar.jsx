import { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <nav className={`navbar navbar-expand-lg py-4 ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-primary'}`}>
      <div className="container-fluid d-flex align-items-center">
        <a className="navbar-brand" href="#">Mon portfolio</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
            <Link className="nav-link text-light" to="accueil">Home</Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="propos">À propos</Link>

            </li>
            <li className="nav-item">
            <Link className="nav-link text-light" to="competences">Competences</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-light" to="projects">Projects</Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="contact">Contact</Link>
            </li>
            <li className="nav-item ms-3">
              <button className="btn btn-outline-light" onClick={toggleTheme}>
                {darkMode ? '🌞 Clair' : '🌙 Sombre'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
