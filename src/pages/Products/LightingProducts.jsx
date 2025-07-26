import React from 'react';
import '../../main.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChromaGrid from './Bits/ChromaGrid';
import Masonry from './Bits/Masonry';
import FlowingMenu from './Bits/FlowingMenu';

// ✅ Lighting categories with stable Picsum seed URLs
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

// ✅ Gallery Highlights with stable seed-based Picsum URLs
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

// ✅ Why Choose Section with stable seed-based Picsum URLs
const whyChooseItems = [
  { link: '#', text: 'Certified Excellence', image: 'https://picsum.photos/seed/certified/600/400' },
  { link: '#', text: 'Smart Integration', image: 'https://picsum.photos/seed/smart/600/400' },
  { link: '#', text: 'Tailored Offerings', image: 'https://picsum.photos/seed/tailored/600/400' },
  { link: '#', text: 'Nationwide Support', image: 'https://picsum.photos/seed/nationwide/600/400' },
];

const LightingProducts = () => (
  <>
    <Navbar />

    <div className="lighting-products-container">
      <header className="lighting-header">
        <h1>💡 Lighting Products</h1>
        <p>
          At <strong>NIXBEEZS</strong>, lighting is not just illumination—it’s an experience.
          Explore our smart, aesthetic, energy-efficient lighting solutions across all tiers.
        </p>
      </header>

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

      <section className="lighting-why">
        <h2>🎯 Why Choose NIXBEEZS Lighting?</h2>
        <div style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu items={whyChooseItems} />
        </div>
      </section>

      <section className="lighting-gallery">
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
    </div>

    <div className="footer-container" style={{ marginTop: '30rem' }}>
      <Footer />
    </div>
  </>
);

export default LightingProducts;
