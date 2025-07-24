import React from 'react';
import '../main.css';
import Footer from '../components/Footer';
const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      {/* Left Content */}
      <div className="about-content" data-aos="fade-up-right">
        <h2>About <span className="highlight">NIXBEEZS</span></h2>
        <p>
          Founded in 2018 and based in Tumakuru, Karnataka, <strong>NIXBEEZS</strong> is an Indian company 
          revolutionizing electrical and automation technology through intelligent, aesthetic, and sustainable solutions.
          With a passion for innovation and a commitment to quality, we cater to diverse market tiers with products that combine craftsmanship and smart functionality.
        </p>
        <ul className="company-info-list">
          <li>📍 Head Office: Industrial Estate, Vidyanagar, Tumakuru</li>
          <li>💼 10+ Years Combined Team Experience in Electrical & Automation</li>
          <li>🌐 Website: <a href="https://www.nixbeezs.com" target="_blank" rel="noopener noreferrer">www.nixbeezs.com</a></li>
          <li>📧 Email: <a href="mailto:ravinnixbeezs@gmail.com">ravinnixbeezs@gmail.com</a></li>
          <li>📞 Phone: +91 93538 96696</li>
          <li>✅ BIS, CE Certified</li>
        </ul>
      </div>

      {/* Right Visual Block */}
     <div
  className="about-image"
  data-aos="fade-up-left"
  style={{ backgroundImage: "url('/assets/images/about.png')" }}
></div>

    </section>
  );
};

export default AboutUs;
