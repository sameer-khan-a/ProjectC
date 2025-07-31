import React from 'react';
import '../../main.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChromaGrid from './Bits/ChromaGrid';
import Masonry from './Bits/Masonry';
import FlowingMenu from './Bits/FlowingMenu';
import LightRays from './Bits/LightRays';

const lightingCategories = [
  {
    id: 'indoor',
    label: 'Indoor',
    items: [
      {
        image: 'https://picsum.photos/seed/downlight/250/125',
        title: 'Downlight',
        subtitle: 'Compact, glare-free',
        handle: '@downlight',
        url: '#',
        borderColor: '#3B82F6',
        gradient: 'linear-gradient(145deg, #3B82F6, #000)',
      },
      {
        image: 'https://picsum.photos/seed/tracklight/250/125',
        title: 'Track Light',
        subtitle: 'Adjustable for galleries',
        handle: '@tracklight',
        url: '#',
        borderColor: '#F59E0B',
        gradient: 'linear-gradient(145deg, #F59E0B, #000)',
      },
      {
        image: 'https://picsum.photos/seed/striplight/250/125',
        title: 'Strip Light',
        subtitle: 'Flexible LED cove lighting',
        handle: '@striplight',
        url: '#',
        borderColor: '#10B981',
        gradient: 'linear-gradient(145deg, #10B981, #000)',
      },
      {
        image: 'https://picsum.photos/seed/pendantlight/250/125',
        title: 'Pendant Light',
        subtitle: 'Elegant centerpiece',
        handle: '@pendantlight',
        url: '#',
        borderColor: '#8B5CF6',
        gradient: 'linear-gradient(145deg, #8B5CF6, #000)',
      },
    ],
  },
  {
    id: 'outdoor',
    label: 'Outdoor',
    items: [
      {
        image: 'https://picsum.photos/seed/bollard/600/600',
        title: 'Bollard Light',
        subtitle: 'Pathway illumination',
        handle: '@bollard',
        url: '#',
        borderColor: '#EF4444',
        gradient: 'linear-gradient(145deg, #EF4444, #000)',
      },
      {
        image: 'https://picsum.photos/seed/floodlight/600/600',
        title: 'Flood Light',
        subtitle: 'High-intensity outdoor lighting',
        handle: '@floodlight',
        url: '#',
        borderColor: '#06B6D4',
        gradient: 'linear-gradient(145deg, #06B6D4, #000)',
      },
    ],
  },
  {
    id: 'signature',
    label: 'Signature',
    items: [
      {
        image: 'https://picsum.photos/seed/aura/600/600',
        title: 'AURA Series',
        subtitle: 'Ultra-premium smart fixtures',
        handle: '@aura',
        url: '#',
        borderColor: '#F43F5E',
        gradient: 'linear-gradient(145deg, #F43F5E, #000)',
      },
      {
        image: 'https://picsum.photos/seed/panel2/600/600',
        title: '2.0 Panel',
        subtitle: '25 mm ultra-thin technology',
        handle: '@panel2',
        url: '#',
        borderColor: '#22D3EE',
        gradient: 'linear-gradient(145deg, #22D3EE, #000)',
      },
    ],
  },
];

const galleryItems = [
  { id: '1', img: 'https://picsum.photos/seed/gallery1/600/400', url: '#', height: 400 },
  { id: '2', img: 'https://picsum.photos/seed/gallery2/600/300', url: '#', height: 300 },
  { id: '3', img: 'https://picsum.photos/seed/gallery3/600/500', url: '#', height: 500 },
  { id: '4', img: 'https://picsum.photos/seed/gallery4/600/250', url: '#', height: 250 },
  { id: '5', img: 'https://picsum.photos/seed/gallery5/600/320', url: '#', height: 320 },
  { id: '6', img: 'https://picsum.photos/seed/gallery6/600/420', url: '#', height: 420 },
  { id: '7', img: 'https://picsum.photos/seed/gallery7/600/380', url: '#', height: 380 },
  { id: '8', img: 'https://picsum.photos/seed/gallery8/600/330', url: '#', height: 330 },
  { id: '9', img: 'https://picsum.photos/seed/gallery9/600/360', url: '#', height: 360 },
  { id: '10', img: 'https://picsum.photos/seed/gallery10/600/400', url: '#', height: 400 },
];

const whyChooseItems = [
  { link: '#', text: 'Certified Excellence', image: 'https://picsum.photos/seed/certified/600/400' },
  { link: '#', text: 'Smart Integration', image: 'https://picsum.photos/seed/smart/600/400' },
  { link: '#', text: 'Tailored Offerings', image: 'https://picsum.photos/seed/tailored/600/400' },
  { link: '#', text: 'Nationwide Support', image: 'https://picsum.photos/seed/nationwide/600/400' },
];

const LightingProducts = () => (
  <>
    <Navbar />

    <section
      id="lighting-product-overview"
      className="lighting-product-hero-container"
      style={{
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'black',
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
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={1.0}
          rayLength={20.0}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
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
        <h1 className="display-4 fw-bold">Intelligent. Aesthetic. Scalable.</h1>
        <p className="lead mt-3 mb-4" style={{ maxWidth: '600px' }}>
          Discover the future of lighting and automation through Nixbeezs’ signature product lines.
        </p>

        <div className="d-flex gap-3 flex-wrap justify-content-center" style={{scrollMarginTop: '2rem'}}>
          <a
            href="#lighting-products"
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '0.6rem 1.5rem',
              borderRadius: '50px',
              fontWeight: 'bold',
            }}
          >
            Explore Categories
          </a>
          <a
            href="#why-nixbeezs"
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '0.6rem 1.5rem',
              border: '1px solid white',
              borderRadius: '50px',
              fontWeight: 'bold',
            }}
          >
            Why Nixbeezs?
          </a>
          <a
            href="#our-work"
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '0.6rem 1.5rem',
              borderRadius: '50px',
              fontWeight: 'bold',
            }}
          >
            Our Work
          </a>
        </div>
      </div>
    </section>

    <div className="lighting-products-container" id="lighting-products" style={{scrollMarginTop: '2rem'}}>
      {lightingCategories.map(({ id, label, items }) => (
        <section key={id} style={{ marginBottom: '6rem' }}>
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

      <section className="lighting-why" id="why-nixbeezs" style={{scrollMarginTop: '2rem'}}>
        <h2>🎯 Why Choose NIXBEEZS Lighting?</h2>
        <div style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu items={whyChooseItems} />
        </div>
      </section>
      <section
        className="lighting-gallery"
        id="our-work"
        style={{
          scrollMarginTop: '10rem',
          paddingBottom: '25rem',
        }}
      >
        <h2>🏙️ Gallery Highlights</h2>
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
      </section>
    </div> {/* closes lighting-products-container */}

    <Footer />
  </>
);



export default LightingProducts;
