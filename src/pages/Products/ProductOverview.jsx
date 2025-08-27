// components/ProductOverview.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FlowingMenu from './Bits/FlowingMenu'; // ✅ Ensure correct path

const whyNixbeezsItems = [
  { 
    icon: '🌱', 
    title: 'Sustainable', 
    text: 'Eco-conscious solutions designed for efficiency and long-term impact.',
    image: 'https://picsum.photos/seed/sustainable/400/300'
  },
  { 
    icon: '⚙️', 
    title: 'Reliable', 
    text: 'Products engineered with durability, backed by solid warranties.',
    image: 'https://picsum.photos/seed/reliable/400/300'
  },
  { 
    icon: '💎', 
    title: 'Premium Design', 
    text: 'Where aesthetics meet functionality for modern homes & businesses.',
    image: 'https://picsum.photos/seed/premium/400/300'
  },
  { 
    icon: '🏛️', 
    title: 'Bespoke Service', 
    text: 'Custom solutions with lifetime support and design consultancy.',
    image: 'https://picsum.photos/seed/bespoke/400/300'
  },
];


const ProductOverview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Product Hero Section */}
      <section className="product-hero-container" id="product-overview" style={{height: "100vh"}}>
        {/* Background Image */}
        <div
          className="product-hero-bg"
          style={{
            backgroundImage: 'url(/assets/images/ProductBg.png)',
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
        ></div>

        {/* Overlay Content */}
        <div className="product-hero-overlay" style={{ zIndex: 2 }}>
          <div className="product-hero-content text-center" data-aos="zoom-in">
            <h1 className="display-4 fw-bold product-heading">
              Intelligent. Aesthetic. Scalable.
            </h1>
            <p className="lead mt-3 mb-4 product-subheading">
              Discover the future of lighting and automation through Nixbeezs’ signature product lines.
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a
                href="#product-tiers"
                className="btn product-primary-btn px-4 py-2 rounded-pill"
                style={{ backgroundColor: 'var(--cream-bg)', color: 'var(--mocha-text)', border: 'solid 2px var(--mocha-text)' }}
              >
                Explore Categories
              </a>
              <a
                href="#why-nixbeezs"
                className="btn product-secondary-btn px-4 py-2 rounded-pill"
                style={{ border: '2px solid var(--mocha-dark)', color: 'var(--mocha-text)' }}
              >
                Why Nixbeezs?
              </a>
            </div>
          </div>
        </div>

      </section>
      {/* Why Nixbeezs Section */}
    </>
  );
};

export default ProductOverview;
