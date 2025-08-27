// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "../main.css";

const Footer = () => {
  return (
    <footer className="footer text-light py-4" style={{ backgroundColor: "#2d2d2d" }}>
      <div className="container">
        <div className="row gy-4">
          {/* Logo & Description */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-2">NIXBEEZS</h5>
            <p className="small mb-0">
              Innovating the future of <strong>Smart Electricals & Home Automation</strong>. 
              Sustainable, efficient, and reliable solutions for modern living.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-2">Quick Links</h6>
            <ul className="list-unstyled small mb-0">
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
          <div className="col-md-4">
            <h6 className="fw-semibold mb-2">Get in Touch</h6>
            <p className="small mb-1">
              <FaEnvelope className="me-2" />
              <a href="mailto:ravinnixbeezs@gmail.com" className="footer-link">
                ravinnixbeezs@gmail.com
              </a>
            </p>
            <p className="small mb-1">
              <FaPhone className="me-2" />
              <a href="tel:+918050774289" className="footer-link">
                +91 80507 74289
              </a>
            </p>

            <div className="d-flex gap-3 mt-2">
              <a
                href="https://www.instagram.com/nixbeezs/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/nixbeezs/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <FaLinkedin size={18} />
              </a>
              <a href="mailto:ravinnixbeezs@gmail.com" className="footer-icon">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <hr className="border-secondary my-3" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} <strong>NIXBEEZS</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
