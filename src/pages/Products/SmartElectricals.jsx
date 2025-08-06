import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InfiniteMenu from './Bits/InfiniteMenu';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ElectricGrid from './Bits/ElectricGrid'; // Ensure this path is correct
import '../../main.css';
import Hyperspeed from './Bits/HyperSpeed'; // Ensure this path is correct
import CircularGallery from './Bits/CircularGallery';
const SmartElectricals = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


const items = [
  {
    image: 'https://picsum.photos/id/1005/500/300', // Represents Smart Switch
    link: '#',
    title: 'Smart Switches',
    description: 'Control your lights and appliances remotely using app or voice.'
  },
  {
    image: 'https://picsum.photos/id/1018/500/300', // Represents WiFi Sensors
    link: '#',
    title: 'WiFi Sensors',
    description: 'PIR, door, gas, smoke sensors for home safety and automation.'
  },
  {
    image: 'https://picsum.photos/id/1027/500/300', // Represents Voice Assistant
    link: '#',
    title: 'Voice Control',
    description: 'Compatible with Alexa and Google Assistant.'
  },
  {
    image: 'https://picsum.photos/id/1033/500/300', // Represents Smart Locks
    link: '#',
    title: 'Smart Door Locks',
    description: 'Secure access with fingerprint, app, or passcode options.'
  }
];
const smartItems = [
  {
    image: '/smart/switch.jpg',
    title: 'NixTouch Switch Panel',
    description: 'Ideal for living rooms',
  },
  {
    image: '/smart/ir.jpg',
    title: 'WiFi IR Blaster',
    description: 'Control your AC, TV, etc.',
  },
  {
    image: '/smart/lock.jpg',
    title: 'Smart Door Lock',
    description: 'Secure & stylish',
  },
  {
    image: '/smart/plug.jpg',
    title: 'Energy Monitor Plug',
    description: 'Track and save energy',
  },
  {
    image: '/smart/sensor.jpg',
    title: 'Motion Sensor',
    description: 'Auto lighting & safety',
  },
  {
    image: '/smart/cam.jpg',
    title: 'Smart Camera',
    description: 'Monitor your home in HD',
  },
];

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



      <section className="smart-solutions" data-aos="fade-up" style={{ padding: '4rem 2rem' }}>
  <div className="container" style={{ maxWidth: '100vw', margin: '0 auto' }}>
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h2 style={{
        fontSize: '2.8rem',
        fontWeight: '800',
        color: 'var(--mocha-text)',
        marginBottom: '1rem',
        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.6)'
      }}>
        Core Smart Solutions
      </h2>
      <p style={{
        fontSize: '1.25rem',
        color: 'var(--gold-accent)',
        maxWidth: '700px',
        margin: '0 auto',
        lineHeight: '1.6',
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
      }}>
        Discover our intelligent product lineup – designed to elevate modern living with seamless control, security, and style.
      </p>
    </div>


      <InfiniteMenu items={items} />

  </div>
</section>

  


      {/* 🔳 Section 2: Top Smart Devices */}
<section
  className="smart-showcase"
  data-aos="fade-up"
  style={{
    padding: '0rem 1.25rem',
    minHeight: '45vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '1.25rem',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  <div
    className="container"
    style={{
      width: '100%',
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center',
    }}
  >
    {/* Section Title */}
    <h2
      style={{
        fontSize: '3rem',
        fontWeight: '700',
        color: '#5c463c', // Taupe
        marginBottom: '0.5rem',
        textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
        letterSpacing: '0.4px',
      }}
    >
      Explore Our Smart Ecosystem
    </h2>

    {/* Section Description */}
    <p
      style={{
        fontSize: '0.97rem',
        color: '#d4af7f', // GoldAccent
        maxWidth: '640px',
        margin: '0 auto 0rem',
        lineHeight: '1.5',
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
      }}
    >
      Seamlessly connect your devices with our cutting-edge smart technologies—
      crafted for comfort, efficiency, and a touch of brilliance in everyday living.
    </p>
  </div>

  {/* Circular Gallery */}
  <div style={{ height: '720px', position: 'relative' }}>
    <CircularGallery
      bend={2}
      textColor="#ffffff"
      borderRadius={0.05}
      scrollEase={0.02}
    />
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
