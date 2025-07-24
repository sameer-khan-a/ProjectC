import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../main.css';

const Footer = () => {
  return (
    <footer className="footer text-light py-5" style={{ backgroundColor: '#2d2d2d' }}>
      <div className="container">
        <div className="row">

          {/* Logo & Description */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">NIXBEEZS</h4>
            <p>Innovating the future of smart and sustainable electrical solutions.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/smart-electricals" className="footer-link">Smart Electricals</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold">Contact</h5>
            <p>Email: <a href="mailto:ravinnixbeezs@gmail.com" className="footer-link">ravinnixbeezs@gmail.com</a></p>
            <p>Phone: <a href="tel:+918050774289" className="footer-link">+91 80507 74289</a></p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="footer-icon"><FaFacebook /></a>
              <a href="#" className="footer-icon"><FaInstagram /></a>
              <a href="#" className="footer-icon"><FaLinkedin /></a>
              <a href="mailto:ravinnixbeezs@gmail.com" className="footer-icon"><FaEnvelope /></a>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: '#555' }} />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} NIXBEEZS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
