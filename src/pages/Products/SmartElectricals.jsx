import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ElectricGrid from './Bits/ElectricGrid'; // Ensure this path is correct
import '../../main.css';
import Hyperspeed from './Bits/HyperSpeed'; // Ensure this path is correct

const SmartElectricals = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />


<section className="smart-hero" data-aos="fade-up">
  {/* Hyperspeed Background */}
  <div className="hyperspeed-wrapper">
    <Hyperspeed
      effectOptions={{
        onSpeedUp: () => {},
        onSlowDown: () => {},
        distortion: 'turbulentDistortion',
        length: 400,
        roadWidth: 10,
        islandWidth: 2,
        lanesPerRoad: 4,
        fov: 90,
        fovSpeedUp: 150,
        speedUp: 2,
        carLightsFade: 0.4,
        totalSideLightSticks: 20,
        lightPairsPerRoadWay: 40,
        shoulderLinesWidthPercentage: 0.05,
        brokenLinesWidthPercentage: 0.1,
        brokenLinesLengthPercentage: 0.5,
        lightStickWidth: [0.12, 0.5],
        lightStickHeight: [1.3, 1.7],
        movingAwaySpeed: [60, 80],
        movingCloserSpeed: [-120, -160],
        carLightsLength: [400 * 0.03, 400 * 0.2],
        carLightsRadius: [0.05, 0.14],
        carWidthPercentage: [0.3, 0.5],
        carShiftX: [-0.8, 0.8],
        carFloorSeparation: [0, 5],
        colors: {
          roadColor: 0x080808,
          islandColor: 0x0a0a0a,
          background: 0x000000,
          shoulderLines: 0xffffff,
          brokenLines: 0xffffff,
          leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
          rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
          sticks: 0x03b3c3,
        },
      }}
    />
  </div>

  {/* Hero Text Content */}
  <div className="container hero-content">
    <div className="hero-content-glass">
      <h1>Smarter Spaces Start Here</h1>
      <p>
        From security to comfort—Nixbeezs brings intelligent electrical
        solutions to every corner of your home and business.
      </p>
      <div className="hero-buttons">
        <button className="btn-primary">View Products</button>
        <button className="btn-secondary">Get a Free Demo</button>
      </div>
    </div>
  </div>
</section>




      {/* 🔳 Section 1: Core Smart Solutions */}
      <section className="smart-solutions" data-aos="fade-up">
        <div className="container">
          <h2>Core Smart Solutions</h2>
          <div className="solutions-grid">
            {[
              { name: 'Smart Switches', desc: 'Control your lights from anywhere, anytime.' },
              { name: 'Sensors', desc: 'Motion, smoke & door sensors for enhanced safety.' },
              { name: 'Smart Locks', desc: 'Keyless entry, real-time access control.' },
              { name: 'Voice & App Control', desc: 'Alexa, Google, or mobile – your choice.' },
            ].map((item, idx) => (
              <div key={idx} className="solution-card">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔳 Section 2: Top Smart Devices */}
      <section className="smart-devices" data-aos="fade-up">
        <div className="container">
          <h2>Featured Smart Devices</h2>
          <div className="devices-grid">
            {[
              { title: 'NixTouch Switch Panel', tip: 'Ideal for living rooms', img: '/smart/switch.jpg' },
              { title: 'WiFi IR Blaster', tip: 'Control your AC, TV, etc.', img: '/smart/ir.jpg' },
              { title: 'Smart Door Lock', tip: 'Secure & stylish', img: '/smart/lock.jpg' },
              { title: 'Energy Monitor Plug', tip: 'Track and save energy', img: '/smart/plug.jpg' },
            ].map((device, idx) => (
              <div key={idx} className="device-card">
                <img src={device.img} alt={device.title} />
                <h3>{device.title}</h3>
                <p>{device.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔳 Section 3: How It Works / Use Cases */}
      <section className="smart-usecases" data-aos="fade-up">
        <div className="container">
          <h2>How It Works</h2>
          <div className="usecase-steps">
            {[
              'Choose your smart plan',
              'Customize with app, voice or sensors',
              'Installation by Nixbeezs experts',
              'Enjoy comfort, security & savings',
            ].map((step, idx) => (
              <div key={idx} className="usecase-step">
                <span>{idx + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔳 Section 4: Compatibility & Ecosystem */}
      <section className="smart-compatibility" data-aos="fade-up">
        <div className="container">
          <h2>Wide Compatibility</h2>
          <p>Seamlessly integrates with your favorite platforms & protocols.</p>
          <div className="compatibility-icons">
            {[
              'Alexa', 'Google Assistant', 'Zigbee', 'WiFi', 'KNX'
            ].map((label, idx) => (
              <div key={idx} className="compatibility-item">
                <img src={`/logos/${label.toLowerCase().replace(/\s/g, '')}.png`} alt={label} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📍 Bottom CTA */}
      <section className="smart-cta" data-aos="fade-up">
        <div className="container">
          <h2>Ready to Get Smart?</h2>
          <p>Book a free site visit or talk to a specialist today.</p>
          <button className="btn-primary">Schedule Now</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SmartElectricals;
