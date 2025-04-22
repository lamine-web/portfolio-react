import { useState } from 'react';
import '../App.css';

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
              <a className="nav-link text-light" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">À propos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Compétences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Projets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Contact</a>
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
