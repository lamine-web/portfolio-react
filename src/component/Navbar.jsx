import logo from '../assets/logo.png'; // adapte le chemin selon ton projet

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          {/* <img src={logo} alt="Logo" width="40" height="40" className="me-2" /> */}
          Mon portfolio
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       <div className="container">
       <div className="container ">
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">À propos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Competences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
       </div>
       </div>
      </div>
    </nav>
  );
};

export default Navbar;
