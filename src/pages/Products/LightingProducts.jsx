import React from 'react';
import '../../main.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChromaGrid from './Bits/ChromaGrid';
import FlowingMenu from './Bits/FlowingMenu';
import LightRays from './Bits/LightRays';

const lightingCategories = [
  {
    id: 'indoor',
    label: 'Indoor',
    items: [
      { image: '/assets/images/downlight.png', title: 'Downlight', subtitle: 'Compact, glare-free', handle: '@downlight', url: '#', borderColor: '#3B82F6', gradient: 'linear-gradient(145deg, #3B82F6, #000)' },
      { image: '/assets/images/track.png', title: 'Track Light', subtitle: 'Adjustable for galleries', handle: '@tracklight', url: '#', borderColor: '#F59E0B', gradient: 'linear-gradient(145deg, #F59E0B, #000)' },
      { image: '/assets/images/strip.png', title: 'Strip Light', subtitle: 'Flexible LED cove lighting', handle: '@striplight', url: '#', borderColor: '#10B981', gradient: 'linear-gradient(145deg, #10B981, #000)' },
      { image: '/assets/images/pendant.png', title: 'Pendant Light', subtitle: 'Elegant centerpiece', handle: '@pendantlight', url: '#', borderColor: '#8B5CF6', gradient: 'linear-gradient(145deg, #8B5CF6, #000)' },
    ],
  },
  {
    id: 'outdoor',
    label: 'Outdoor',
    items: [
      { image: '/assets/images/bollard.png', title: 'Bollard Light', subtitle: 'Pathway illumination', handle: '@bollard', url: '#', borderColor: '#EF4444', gradient: 'linear-gradient(145deg, #EF4444, #000)' },
      { image: '/assets/images/flood.png', title: 'Flood Light', subtitle: 'High-intensity outdoor lighting', handle: '@floodlight', url: '#', borderColor: '#06B6D4', gradient: 'linear-gradient(145deg, #06B6D4, #000)' },
    ],
  },
  {
    id: 'signature',
    label: 'Signature',
    items: [
      { image: '/assets/images/aura.png', title: 'AURA Series', subtitle: 'Ultra-premium smart fixtures', handle: '@aura', url: '#', borderColor: '#F43F5E', gradient: 'linear-gradient(145deg, #F43F5E, #000)' },
      { image: '/assets/images/mm.png', title: '2.0 Panel', subtitle: '25 mm ultra-thin technology', handle: '@panel2', url: '#', borderColor: '#22D3EE', gradient: 'linear-gradient(145deg, #22D3EE, #000)' },
    ],
  },
];

const whyChooseItems = [
  { link: '#', text: 'Certified Excellence', image: '/assets/images/excellence.png' },
  { link: '#', text: 'Smart Integration', image: '/assets/images/integrate.png' },
  { link: '#', text: 'Tailored Offerings', image: '/assets/images/smarthome.png' },
  { link: '#', text: 'Nationwide Support', image: '/assets/images/nation.png' },
];

const LightingProducts = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        id="lighting-product-overview"
        className="lighting-product-hero-container"
        style={{
          minHeight: '100vh', // ✅ fixes mobile vh bug
          width: '100%',
          margin: 0,
          padding: '0 1rem 4rem', // ✅ adds spacing below
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: 'black',
          boxSizing: 'border-box',
        }}
      >
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
          }
          section {
            scroll-margin-top: 100px;
          }
        `}</style>

        {/* Light Rays Overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1.5}
            lightSpread={1.0}
            rayLength={20.0}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
          />
        </div>

        {/* Hero Content */}
        <div
          style={{
            zIndex: 2,
            position: 'relative',
            height: '85%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '0 1rem',
          }}
        >
          <h1 className="display-4 fw-bold" style={{ color: 'var(--gold-accent)' }}>
            Intelligent. Aesthetic. Scalable.
          </h1>
          <p className="lead mt-3 mb-4" style={{ maxWidth: '600px' }}>
            Discover the future of lighting and automation through Nixbeezs’ signature product lines.
          </p>

          <div className="d-flex gap-3 flex-wrap justify-content-center" style={{ scrollMarginTop: '2rem' }}>
            <a href="#lighting-products" style={{ backgroundColor: 'var(--gold-accent)', color: 'black', padding: '0.6rem 1.5rem', borderRadius: '50px', fontWeight: 'bold' }}>
              Explore Categories
            </a>
            <a href="#why-nixbeezs" style={{ backgroundColor: 'transparent', color: 'white', padding: '0.6rem 1.5rem', border: '1px solid white', borderRadius: '50px', fontWeight: 'bold' }}>
              Why Nixbeezs?
            </a>
            <a href="#our-work" style={{ backgroundColor: 'var(--gold-accent)', color: 'black', padding: '0.6rem 1.5rem', borderRadius: '50px', fontWeight: 'bold' }}>
              Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Lighting Product Sections */}
      <div className="lighting-products-container" id="lighting-products" style={{ scrollMarginTop: '2rem' }}>
        {lightingCategories.map(({ id, label, items }) => (
          <section key={id} style={{ margin: '0 auto 4rem auto', padding: '2rem 1rem', maxWidth: '1200px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{label} Lighting</h2>
            <div className="chroma-grid-wrapper">
              <ChromaGrid
                items={items}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </section>
        ))}
      </div>

      {/* Why Nixbeezs Section */}
      <section
        className="lighting-why bg-white"
        id="why-nixbeezs"
        style={{
          padding: '3rem 1rem',
          margin: '2rem auto 4rem auto',
          maxWidth: '1200px',
          scrollMarginTop: '2rem',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🎯 Why Choose NIXBEEZS Lighting?</h2>
        <div style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu items={whyChooseItems} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LightingProducts;
