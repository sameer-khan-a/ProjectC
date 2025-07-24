import React from 'react';
import '../main.css';

const CompanyProfile = () => {
  return (
    <section className="company-profile-section" id="profile">
      {/* Left Content */}
      <div className="profile-content" data-aos="fade-up-right">
        <h2>Company <span className="highlight">Profile</span></h2>
        
        <p><strong>Corporate Identity</strong><br/>
          Company Name: NIXBEEZS<br/>
          Established: 2018<br/>
          Head Office: KSFC Office Road, Tumakuru, Karnataka, India<br/>
          Certifications: BIS, CE<br/>
          Website: <a href="https://www.nixbeezs.com" target="_blank" rel="noopener noreferrer">nixbeezs.com</a><br/>
          Email: <a href="mailto:ravinnixbeezs@gmail.com">ravinnixbeezs@gmail.com</a><br/>
          Phone: +91 93538 96696
        </p>

        <h3>Founders & Leadership</h3>
        <ul className="company-info-list">
          <li>🧠 Ravi N – Founder & CEO</li>
          <li>💰 Nagarathna P – Chief Finance Officer</li>
          <li>🏗️ Praveen S – Business Development Head</li>
          <li>🤝 Charan – Marketing & Relationship Manager</li>
          <li>⚡ Eqbal Ahmed – Chief Electrical Consultant</li>
        </ul>

        <h3>Our Mission</h3>
        <p>To enhance everyday living through intelligent, aesthetic, and energy-efficient products across all economic tiers.</p>

        <h3>Our Vision</h3>
        <p>To be India’s most trusted brand in smart lighting, automation, and electrical innovation.</p>

        <h3>Product Portfolio</h3>
        <ul className="company-info-list">
          <li>💡 LED Lighting: Residential, Commercial, Decorative, Outdoor</li>
          <li>🏠 Home Automation: Smart Switches, Sensors, Voice Control</li>
          <li>🏢 Commercial Automation: HVAC, Surveillance, Energy Management</li>
          <li>🌞 Solar Lighting: Garden, Hybrid, Motion Sensors</li>
          <li>🧪 R&D: Firmware, UX, Control Systems</li>
        </ul>

        <h3>Sub-Brands</h3>
        <ul className="company-info-list">
          <li>🌱 NixEco™ – Budget-friendly smart essentials</li>
          <li>⚙️ NixCore™ – Mid-range reliable automation</li>
          <li>💎 NixElite™ – Premium designer brilliance</li>
          <li>🌟 NixAura™ – Ultra-premium luxury luminaires</li>
        </ul>

        <h3>Unique Selling Points</h3>
        <ul className="company-info-list">
          <li>🔧 End-to-End R&D to Service</li>
          <li>🌍 Pan-India Scalability</li>
          <li>🛠️ Custom Solutions for Designers</li>
          <li>📊 AMC & Analytics-based Upgrades</li>
        </ul>

        <h3>Upcoming Innovations</h3>
        <ul className="company-info-list">
          <li>🔌 IoT MCBs & Smart Surge Guards</li>
          <li>🎛️ AI-Driven Ambient Controls</li>
          <li>🔋 Hybrid Solar + Automation Systems</li>
        </ul>

        <h3>Business Snapshot</h3>
        <ul className="company-info-list">
          <li>📈 ₹8 Cr Turnover | Target ₹25 Cr (35% CAGR)</li>
          <li>👥 Team: 25+ Professionals</li>
          <li>📍 Focus: Tier 1, Tier 2, and Smart Cities</li>
        </ul>

        <p className="collab-message">
          We welcome collaborations with designers, stakeholders, and investors who share our vision for smart, stylish, and sustainable living.
        </p>
      </div>

      {/* Right Visual Block */}
      <div
        className="profile-image"
        data-aos="fade-up-left"
      ></div>
    </section>
  );
};

export default CompanyProfile;
