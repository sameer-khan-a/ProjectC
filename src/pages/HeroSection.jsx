import React from 'react';
import { ReactTyped } from 'react-typed';
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-container">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/public/assets/videos/iot.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content" style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '0.5rem',
            }}
          >
            Empowering the Future with
          </h1>

          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              color: 'var(--cream-bg)',
              marginBottom: '1.5rem',
            }}
          >
            <ReactTyped
              strings={[
                'Smart Electricals',
                'Home Automation',
                'Sustainable Tech',
                'LED Lighting',
                'IoT Innovations',
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
              showCursor={true}
            />
          </h2>

          <p
            style={{
              maxWidth: '700px',
              margin: '0 auto 2rem',
              fontSize: '1.15rem',
              padding: '0 1rem',
            }}
          >
            Innovative, intelligent, and inclusive solutions across lighting, automation, and sustainable tech.
          </p>

            <button onClick={() => navigate("/Products")}>
      Explore Our Solutions
    </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
