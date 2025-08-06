import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InfiniteMenu from './Bits/InfiniteMenu';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TargetCursor from './Bits/TargetCursor';
import ElectricGrid from './Bits/ElectricGrid'; // Ensure this path is correct
import '../../main.css';
import Hyperspeed from './Bits/HyperSpeed'; // Ensure this path is correct
import SpotlightCard from './Bits/SpotlightCard';
import CircularGallery from './Bits/CircularGallery';
const SmartElectricals = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

    const steps = [
    {
      title: 'Choose your smart plan',
      img: 'https://picsum.photos/300/200?random=1',
    },
    {
      title: 'Customize with app, voice or sensors',
      img: 'https://picsum.photos/300/200?random=2',
    },
    {
      title: 'Installation by Nixbeezs experts',
      img: 'https://picsum.photos/300/200?random=3',
    },
    {
      title: 'Enjoy comfort, security & savings',
      img: 'https://picsum.photos/300/200?random=4',
    },
  ];

  const compatibilities = [
    { name: 'Alexa', img: 'https://picsum.photos/100/100?random=5' },
    { name: 'Google Assistant', img: 'https://picsum.photos/100/100?random=6' },
    { name: 'Zigbee', img: 'https://picsum.photos/100/100?random=7' },
    { name: 'WiFi', img: 'https://picsum.photos/100/100?random=8' },
    { name: 'KNX', img: 'https://picsum.photos/100/100?random=9' },
  ];
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




     (
    <div>
      {/* 🔹 Custom Cursor */}
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      {/* 🔹 Full-Screen Smart Section */}
      <div 
        className="smart-section"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '40px 20px',
        }}
        data-aos="fade-up"
      >
        {/* 🔹 Hero */}
        <div className="hero" style={{ maxWidth: '800px', marginBottom: '50px' }}>
          <h1 className="cursor-target">Smart Living Made Easy</h1>
          <p style={{ fontSize: '18px', color: '#555', marginTop: '15px' }}>
            Experience seamless automation, ultimate comfort, and secure living with Nixbeezs smart solutions.
          </p>
        </div>

        {/* 🔹 How It Works Steps */}
        <div className="usecase-steps" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '50px' }}>
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="usecase-step cursor-target"
              style={{ width: '200px', textAlign: 'center' }}
            >
              <img 
                src={step.img} 
                alt={step.title} 
                style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }}
              />
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{idx + 1}</span>
              <p style={{ marginTop: '5px' }}>{step.title}</p>
            </div>
          ))}
        </div>

        {/* 🔹 Compatibility Icons */}
        <div className="smart-compatibility">
          <p style={{ marginBottom: '20px', fontSize: '16px', color: '#666' }}>
            Seamlessly integrates with your favorite platforms & protocols.
          </p>
          <div className="compatibility-icons" style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            {compatibilities.map((item, idx) => (
              <div 
                key={idx} 
                className="compatibility-item cursor-target"
                style={{ textAlign: 'center' }}
              >
                <img 
                  src={item.img} 
                  alt={item.name} 
                  style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '10px' }}
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      {/* 📍 Bottom CTA */}
          <section className="smart-cta" data-aos="fade-up" style={{ padding: '80px 20px', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <SpotlightCard 
          className="custom-spotlight-card" 
          spotlightColor="#f8f5f27e"
          style={{ padding: '50px 30px', borderRadius: '20px' }}
        >
          <h2 style={{ marginBottom: '15px' }}>Ready to Get Smart?</h2>
          <p style={{ fontSize: '18px', marginBottom: '25px' }}>
            Book a free site visit or talk to a specialist today.
          </p>
          <button 
            className="btn-primary cursor-target"
            style={{
              padding: '12px 30px',
              borderRadius: '8px',
              border: 'none',
              color: 'var(--mocha-text)',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              transition: '0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Schedule Now
          </button>
        </SpotlightCard>
      </div>
    </section>

      <Footer />
    </>
  );
};

export default SmartElectricals;
