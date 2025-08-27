import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InfiniteMenu from './Bits/InfiniteMenu';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ElectricGrid from './Bits/ElectricGrid';
import '../../main.css';
import Hyperspeed from './Bits/HyperSpeed';
import SpotlightCard from './Bits/SpotlightCard';
import CircularGallery from './Bits/CircularGallery';

const SmartElectricals = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    { title: 'Choose your smart plan', img: '/assets/images/SmartC1.png' },
    { title: 'Customize with app, voice or sensors', img: '/assets/images/SmartC2.png' },
    { title: 'Installation by Nixbeezs experts', img: '/assets/images/SmartC3.png' },
    { title: 'Enjoy comfort, security & savings', img: '/assets/images/SmartC4.png' },
  ];

  const compatibilities = [
    { name: 'Alexa', img: '/assets/images/alexa.png' },
    { name: 'Google Assistant', img: '/assets/images/google_assistant.png' },
    { name: 'Zigbee', img: '/assets/images/zigbee.png' },
    { name: 'WiFi', img: '/assets/images/wifi.png' },
    { name: 'KNX', img: '/assets/images/knx.png' },
  ];

  const items = [
    {
      image: '/assets/images/SmartP1.png',
      link: '#',
      title: 'Smart Switches',
      description: 'Control your lights and appliances remotely using app or voice.',
    },
    {
      image: '/assets/images/SmartP3.png',
      link: '#',
      title: 'WiFi Sensors',
      description: 'PIR, door, gas, smoke sensors for home safety and automation.',
    },
    {
      image: '/assets/images/SmartP4.png',
      link: '#',
      title: 'Voice Control',
      description: 'Compatible with Alexa and Google Assistant.',
    },
    {
      image: '/assets/images/SmartP2.jpg',
      link: '#',
      title: 'Smart Door Locks',
      description: 'Secure access with fingerprint, app, or passcode options.',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="smart-hero" data-aos="fade-up">
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

        <div className="container hero-content">
          <div className="hero-content-glass">
            <h1>Smarter Spaces Start Here</h1>
            <p>
              From security to comfort—Nixbeezs brings intelligent electrical
              solutions to every corner of your home and business.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollTo('solutions')}>
                View Products
              </button>
              <button className="btn-secondary" onClick={() => scrollTo('cta')}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section id="solutions" className="smart-solutions" data-aos="fade-up" style={{ padding: '4rem 2rem' }}>
        <div className="container" style={{ maxWidth: '100vw', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '2.8rem',
                fontWeight: '800',
                color: 'var(--mocha-text)',
                marginBottom: '1rem',
                textShadow: '1px 1px 5px rgba(0, 0, 0, 0.6)',
              }}
            >
              Core Smart Solutions
            </h2>
            <p
              style={{
                fontSize: '1.25rem',
                color: 'var(--gold-accent)',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
              }}
            >
              Discover our intelligent product lineup – designed to elevate modern living with seamless control, security, and style.
            </p>
          </div>
          <InfiniteMenu items={items} />
        </div>
      </section>

      {/* Section 2 */}
      <section
        className="smart-showcase"
        id="ecosystem"
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
        <div className="container" style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#5c463c',
              marginBottom: '0.5rem',
              textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
              letterSpacing: '0.4px',
            }}
          >
            Explore Our Smart Ecosystem
          </h2>
          <p
            style={{
              fontSize: '0.97rem',
              color: '#d4af7f',
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
        <div style={{ height: '720px', position: 'relative' }}>
          <CircularGallery bend={2} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </div>
      </section>

      {/* Smart Section */}
      <div
        className="smart-section"
        id="smartliving"
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
        <div className="hero" style={{ maxWidth: '90%', margin: '0 auto 3rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Smart Living Made Easy</h1>
          <p style={{ fontSize: 'clamp(14px, 2vw, 18px)', color: '#555', marginTop: '1rem' }}>
            Experience seamless automation, ultimate comfort, and secure living with Nixbeezs smart solutions.
          </p>
        </div>

        <div
          className="usecase-steps"
          style={{
            display: 'flex',
            gap: '2vw',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          {steps.map((step, idx) => (
            <div key={idx} className="usecase-step" style={{ width: 'calc(50% - 2vw)', maxWidth: '220px', textAlign: 'center' }}>
              <img
                src={step.img}
                alt={step.title}
                style={{
                  width: '60%',
                  maxWidth: '160px',
                  height: 'auto',
                  aspectRatio: '1/1',
                  borderRadius: '50%',
                  marginBottom: '10px',
                }}
              />
              <br />
              <span style={{ fontWeight: 'bold', fontSize: 'clamp(18px, 3vw, 20px)' }}>{idx + 1}</span>
              <p style={{ marginTop: '5px', fontSize: 'clamp(14px, 2vw, 16px)' }}>{step.title}</p>
            </div>
          ))}
        </div>

        <div className="smart-compatibility" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ marginBottom: '1.5rem', fontSize: 'clamp(14px, 2vw, 16px)', color: '#666' }}>
            Seamlessly integrates with your favorite platforms & protocols.
          </p>
          <div
            className="compatibility-icons"
            style={{ display: 'flex', justifyContent: 'center', gap: '2vw', flexWrap: 'wrap' }}
          >
            {compatibilities.map((item, idx) => (
              <div key={idx} className="compatibility-item" style={{ textAlign: 'center', width: '80px' }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: '100%', height: 'auto', borderRadius: '0%', marginBottom: '10px' }}
                />
                <span style={{ fontSize: 'clamp(12px, 1.5vw, 14px)' }}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section
          id="cta"
          className="smart-cta"
          data-aos="fade-up"
          style={{ padding: '5rem 2rem', textAlign: 'center' }}
        >
          <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="#f8f5f27e"
              style={{ padding: '3rem 2rem', borderRadius: '20px' }}
            >
              <h2 style={{ marginBottom: '1rem', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Ready to Get Smart?</h2>
              <p style={{ fontSize: 'clamp(14px, 2vw, 18px)', marginBottom: '2rem' }}>
                Book a free site visit or talk to a specialist today.
              </p>
              <button
                className="btn-primary"
                style={{
                  padding: '12px 30px',
                  borderRadius: '8px',
                  border: 'none',
                  color: 'var(--mocha-text)',
                  fontWeight: 'bold',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  cursor: 'pointer',
                  transition: '0.3s',
                }}
                onClick={() => (window.location.href = '/ContactUs')}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Schedule Now
              </button>
            </SpotlightCard>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SmartElectricals;
