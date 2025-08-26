import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../main.css';

const Footer = () => {
  return (
  <footer 
  className="footer text-light py-0" 
  style={{ backgroundColor: '#2d2d2d', paddingTop: '0rem', paddingBottom: '0rem' }}
>
  <div className="container">
    <div className="row align-items-start">

      {/* Logo & Description */}
      <div className="col-md-4 mb-3">
        <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>NIXBEEZS</h5>
        <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
          Innovating the future of <strong>Smart Electricals & Home Automation</strong>. 
          Sustainable, efficient, and reliable solutions for modern living.
        </p>
      </div>

      {/* Quick Links */}
      <div className="col-md-4 mb-3">
        <h6 className="fw-semibold mb-2" style={{ fontSize: '1rem' }}>Quick Links</h6>
        <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
          <li><Link to="/" className="footer-link">Home</Link></li>
          <li><Link to="/Products" className="footer-link">Products</Link></li>
          <li><Link to="/Lightings" className="footer-link">Lightings</Link></li>
          <li><Link to="/smart-electricals" className="footer-link">Smart Electricals</Link></li>
          <li><Link to="/SolarProducts" className="footer-link">Solar Products</Link></li>
          <li><Link to="/ElectricalRange" className="footer-link">Electrical Range</Link></li>
          <li><Link to="/HomeAutomation" className="footer-link">Home Automation</Link></li>
          <li><Link to="/ContactUs" className="footer-link">Contact Us</Link></li>
        </ul>
      </div>

      {/* Contact & Social */}
      <div className="col-md-4 mb-3">
        <h6 className="fw-semibold mb-2" style={{ fontSize: '1rem' }}>Get in Touch</h6>
        <p style={{ fontSize: '0.9rem' }}>
          <FaEnvelope className="me-2" />
          <a href="mailto:ravinnixbeezs@gmail.com" className="footer-link">
            ravinnixbeezs@gmail.com
          </a>
        </p>
        <p style={{ fontSize: '0.9rem' }}>
          <FaPhone className="me-2" />
          <a href="tel:+918050774289" className="footer-link">
            +91 80507 74289
          </a>
        </p>

        <div className="d-flex gap-2 mt-2">
          <a href="https://www.instagram.com/nixbeezs/" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/nixbeezs/" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:ravinnixbeezs@gmail.com" className="footer-icon">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>

    <hr style={{ borderColor: '#555', margin: '0.5rem 0' }} />
    <div className="text-center small" style={{ fontSize: '0.8rem' }}>
      &copy; {new Date().getFullYear()} <strong>NIXBEEZS</strong>. All rights reserved.
    </div>
  </div>
</footer>

  );
};

export default Footer;
