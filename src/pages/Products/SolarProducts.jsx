import React from 'react';
import '../../main.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChromaGrid from './Bits/ChromaGrid';
import Masonry from './Bits/Masonry';
import FlowingMenu from './Bits/FlowingMenu';
import LightRays from './Bits/LightRays';

const solarCategories = [
  {
    id: 'lighting',
    label: 'Solar Lighting',
    items: [
      {
        image: '/assets/images/solar1.png',
        title: 'Solar Street Lights',
        subtitle: 'Smart city ready, motion sensors',
        handle: '@streetlight',
        url: '#',
        borderColor: '#F59E0B',
        gradient: 'linear-gradient(145deg, #F59E0B, #000)',
      },
      {
        image: '/assets/images/solar2.png',
        title: 'Garden Lights',
        subtitle: 'Eco-friendly outdoor ambience',
        handle: '@gardenlight',
        url: '#',
        borderColor: '#10B981',
        gradient: 'linear-gradient(145deg, #10B981, #000)',
      },
      {
        image: '/assets/images/solar3.png',
        title: 'Rooftop Solar Systems',
        subtitle: 'Smart automation for homes',
        handle: '@rooftop',
        url: '#',
        borderColor: '#3B82F6',
        gradient: 'linear-gradient(145deg, #3B82F6, #000)',
      },
      {
        image: '/assets/images/solar4.png',
        title: 'Hybrid Solar-Automation',
        subtitle: 'Next-gen IoT solar integration',
        handle: '@hybridsolar',
        url: '#',
        borderColor: '#8B5CF6',
        gradient: 'linear-gradient(145deg, #8B5CF6, #000)',
      },
      {
        image: '/assets/images/solar5.png',
        title: 'WiFi Solar PIR Alarm',
        subtitle: 'Smart security powered by sun',
        handle: '@solarpir',
        url: '#',
        borderColor: '#EF4444',
        gradient: 'linear-gradient(145deg, #EF4444, #000)',
      },
    ],
  },
];

const galleryItems = [
  { id: '1', img: 'https://picsum.photos/seed/solar1/600/400', url: '#', height: 400 },
  { id: '2', img: 'https://picsum.photos/seed/solar2/600/300', url: '#', height: 300 },
  { id: '3', img: 'https://picsum.photos/seed/solar3/600/500', url: '#', height: 500 },
  { id: '4', img: 'https://picsum.photos/seed/solar4/600/250', url: '#', height: 250 },
  { id: '5', img: 'https://picsum.photos/seed/solar5/600/320', url: '#', height: 320 },
  { id: '6', img: 'https://picsum.photos/seed/solar6/600/420', url: '#', height: 420 },
  { id: '7', img: 'https://picsum.photos/seed/solar7/600/380', url: '#', height: 380 },
  { id: '8', img: 'https://picsum.photos/seed/solar8/600/330', url: '#', height: 330 },
  { id: '9', img: 'https://picsum.photos/seed/solar9/600/360', url: '#', height: 360 },
  { id: '10', img: 'https://picsum.photos/seed/solar10/600/400', url: '#', height: 400 },
];

const whyChooseItems = [
  { link: '#', text: 'Long-lasting Efficiency', image: '/assets/images/whysol.png' },
  { link: '#', text: 'Expert Installation', image: '/assets/images/solwhy2.png' },
  { link: '#', text: 'Extended Warranty', image: '/assets/images/solwhy3.png' },
  { link: '#', text: 'Eco-friendly & Cost-efficient', image: '/assets/images/solwhy4.png' },
];

const SolarProducts = () => (
  <>
    <Navbar />

    <section
      id="solar-product-overview"
      className="solar-product-hero-container"
      style={{
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'transparent',
      }}
    >
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          background-color: black !important;
        }
        section {
          scroll-margin-top: 100px;
        }
      `}</style>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#FFD700"
          raysSpeed={1.2}
          lightSpread={1.2}
          rayLength={25.0}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.15}
          distortion={0.08}
        />
      </div>

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
        <h1 className="display-4 fw-bold" style={{color: "var(--gold-accent)"}}>Solar-Powered. Smart. Sustainable.</h1>
        <p className="lead mt-3 mb-4" style={{ maxWidth: '600px' }}>
          Harness the power of the sun with NIXBEEZS’ smart, eco-friendly, and long-lasting solar solutions.
        </p>

        <div className="d-flex gap-3 flex-wrap justify-content-center">
          <a
            href="#solar-products"
            style={{
              backgroundColor: 'var(--gold-accent)',
              color: 'black',
              padding: '0.6rem 1.5rem',
              borderRadius: '50px',
              fontWeight: 'bold',
            }}
          >
            Explore Products
          </a>
          <a
            href="#why-solar"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--gold-accent)',
              padding: '0.6rem 1.5rem',
              border: '1px solid white',
              borderRadius: '50px',
              fontWeight: 'bold',
            }}
          >
            Why Solar?
          </a>
          <a
            href="#solar-gallery"
            style={{
              backgroundColor: 'var(--gold-accent)',
              color: 'black',
              padding: '0.6rem 1.5rem',
              borderRadius: '50px',
              fontWeight: 'bold',
            }}
          >
            Gallery
          </a>
        </div>
      </div>
    </section>

    <div className="solar-products-container" id="solar-products">
      {solarCategories.map(({ id, label, items }) => (
        <section key={id} style={{ marginBottom: '10rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem',marginTop: '2rem', color: 'var(--gold-accent)'}}>{label}</h2>
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

      <section className="solar-why my-5 py-5" id="why-solar">
        <h2 style={{color: "var(--gold-accent)"}}>🌍 Why Choose NIXBEEZS Solar?</h2>
        <div style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu items={whyChooseItems} />
        </div>
      </section>

      {/* <section
        className="solar-gallery"
        id="solar-gallery"
        style={{
          scrollMarginTop: '10rem',
          paddingBottom: '25rem',
        }}
      >
        <h2 style={{color: "var(--gold-accent)", marginBottom: "4rem", marginTop: "3rem"}}>📸 Solar Gallery Highlights</h2>
        <Masonry
          items={galleryItems}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={true}
        />
      </section> */}
    </div>
<div style={{marginTop: '5rem'}}>

    <Footer />
</div>
  </>
);

export default SolarProducts;