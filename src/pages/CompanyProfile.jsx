import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';

const CompanyProfile = () => {
  return (
    <section className="company-profile-section py-5" id="profile">
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* Left Content */}
          <div className="col-lg-7 col-md-12" data-aos="fade-up-right">
            <h2 className="mb-4">
              Company <span className="highlight">Profile</span>
            </h2>

            <p>
              <strong>Corporate Identity</strong><br />
              <strong>Company Name:</strong> NIXBEEZS<br />
              <strong>Established:</strong> 2018<br />
              <strong>Head Office:</strong> KSFC Office Road, Tumakuru, Karnataka, India<br />
              <strong>Certifications:</strong> BIS, CE<br />
              <strong>Website:</strong>{' '}
              <a href="https://www.nixbeezs.com" target="_blank" rel="noopener noreferrer">
                nixbeezs.com
              </a><br />
              <strong>Email:</strong>{' '}
              <a href="mailto:ravinnixbeezs@gmail.com">ravinnixbeezs@gmail.com</a><br />
              <strong>Phone:</strong> +91 93538 96696
            </p>

            <h3 className="mt-4">Founders & Leadership</h3>
            <ul className="list-unstyled">
              <li>🧠 Ravi N – Founder & CEO</li>
              <li>💰 Nagarathna P – Chief Finance Officer</li>
              <li>🏗️ Praveen S – Business Development Head</li>
              <li>🤝 Charan – Marketing & Relationship Manager</li>
              <li>⚡ Eqbal Ahmed – Chief Electrical Consultant</li>
            </ul>

            <h3 className="mt-4">Our Mission</h3>
            <p>
              To enhance everyday living through intelligent, aesthetic, and energy-efficient products
              across all economic tiers.
            </p>

            <h3 className="mt-4">Our Vision</h3>
            <p>
              To be India’s most trusted brand in smart lighting, automation, and electrical innovation.
            </p>

            <h3 className="mt-4">Product Portfolio</h3>
            <ul className="list-unstyled">
              <li>💡 LED Lighting: Residential, Commercial, Decorative, Outdoor</li>
              <li>🏠 Home Automation: Smart Switches, Sensors, Voice Control</li>
              <li>🏢 Commercial Automation: HVAC, Surveillance, Energy Management</li>
              <li>🌞 Solar Lighting: Garden, Hybrid, Motion Sensors</li>
              <li>🧪 R&D: Firmware, UX, Control Systems</li>
            </ul>

            <h3 className="mt-4">Sub-Brands</h3>
            <ul className="list-unstyled">
              <li>🌱 NixEco™ – Budget-friendly smart essentials</li>
              <li>⚙️ NixCore™ – Mid-range reliable automation</li>
              <li>💎 NixElite™ – Premium designer brilliance</li>
              <li>🌟 NixAura™ – Ultra-premium luxury luminaires</li>
            </ul>

            <h3 className="mt-4">Unique Selling Points</h3>
            <ul className="list-unstyled">
              <li>🔧 End-to-End R&D to Service</li>
              <li>🌍 Pan-India Scalability</li>
              <li>🛠️ Custom Solutions for Designers</li>
              <li>📊 AMC & Analytics-based Upgrades</li>
            </ul>

            <h3 className="mt-4">Upcoming Innovations</h3>
            <ul className="list-unstyled">
              <li>🔌 IoT MCBs & Smart Surge Guards</li>
              <li>🎛️ AI-Driven Ambient Controls</li>
              <li>🔋 Hybrid Solar + Automation Systems</li>
            </ul>

            <h3 className="mt-4">Business Snapshot</h3>
            <ul className="list-unstyled">
              <li>📈 ₹8 Cr Turnover | Target ₹25 Cr (35% CAGR)</li>
              <li>👥 Team: 25+ Professionals</li>
              <li>📍 Focus: Tier 1, Tier 2, and Smart Cities</li>
            </ul>

            <p className="mt-4 fw-semibold">
              We welcome collaborations with designers, stakeholders, and investors who share our vision
              for smart, stylish, and sustainable living.
            </p>
          </div>

          {/* Right Visual Block */}
          <div className="col-lg-5 col-md-12" data-aos="fade-up-left">
            <div className="profile-image rounded-4 shadow-lg w-100 h-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
