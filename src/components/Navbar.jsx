// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar sticky-top navbar-expand-lg shadow-sm custom-navbar">
      <div className="container-fluid px-4 py-2">
        <Link className="navbar-brand nav-logo" to="/" onClick={closeMenu}>
          NIXBEEZS
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto nav-links">

            {/* Home Dropdown */}
           <li className="nav-item dropdown custom-dropdown-hover">
<a
  className="nav-link dropdown-toggle"
  href="/"
  role="button"
  id="navbarDropdown"
>
  Home
</a>

  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><a className="dropdown-item" href="#hero" onClick={closeMenu}>Hero</a></li>
    <li><a className="dropdown-item" href="#about" onClick={closeMenu}>About</a></li>
    <li><a className="dropdown-item" href="#products" onClick={closeMenu}>Products</a></li>
    <li><a className="dropdown-item" href="#contact" onClick={closeMenu}>Contact</a></li>
  </ul>
</li>


            <li className="nav-item">
              <Link className="nav-link" to="/Products" onClick={closeMenu}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/smart-electricals" onClick={closeMenu}>Smart Electricals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/electrical-range" onClick={closeMenu}>Electrical Range</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lightings" onClick={closeMenu}>Lightings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home-automation" onClick={closeMenu}>Home Automation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/solar-products" onClick={closeMenu}>Solar Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
