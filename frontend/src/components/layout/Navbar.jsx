import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/logo.jpeg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={Logo}
            alt="YOJANASETU Logo"
            className="logo-img"
            width="60"
          />

          <span className="logo-text">YOJANASETU</span>
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/schemes">Schemes</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>

            <Link to="/register" className="btn btn-success">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;