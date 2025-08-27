// NavbarHome.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NavbarHome = () => {
  // Close navbar after clicking a nav link
  const handleNavLinkClick = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      const collapse = window.bootstrap.Collapse.getInstance(navbar);
      collapse.hide();
    }
  };

  // Toggle navbar manually when burger is clicked
  const handleTogglerClick = () => {
    const navbar = document.getElementById("navbarNav");
    const collapse = window.bootstrap.Collapse.getOrCreateInstance(navbar);
    if (navbar.classList.contains("show")) {
      collapse.hide();
    } else {
      collapse.show();
    }
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg shadow-sm custom-navbar">
      <div className="container-fluid px-4 py-2">
        {/* Brand */}
        <Link className="navbar-brand nav-logo" to="/" onClick={handleNavLinkClick}>
          NIXBEEZS
        </Link>

        {/* Toggler button */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleTogglerClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto nav-links">
            {/* Home dropdown with hover */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#hero" onClick={handleNavLinkClick}>Hero</a></li>
                <li><a className="dropdown-item" href="#about" onClick={handleNavLinkClick}>About</a></li>
                <li><a className="dropdown-item" href="#products" onClick={handleNavLinkClick}>Products</a></li>
                <li><a className="dropdown-item" href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
              </ul>
            </li>

            {/* Other Links */}
            <li className="nav-item">
              <Link className="nav-link" to="/Products" onClick={handleNavLinkClick}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/smart-electricals" onClick={handleNavLinkClick}>Smart Electricals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ElectricalRange" onClick={handleNavLinkClick}>Electrical Range</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lightings" onClick={handleNavLinkClick}>Lightings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/HomeAutomation" onClick={handleNavLinkClick}>Home Automation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SolarProducts" onClick={handleNavLinkClick}>Solar Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs" onClick={handleNavLinkClick}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
