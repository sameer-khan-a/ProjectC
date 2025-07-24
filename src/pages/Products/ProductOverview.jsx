// components/ProductOverview.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductOverview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="product-hero-container" id="product-overview">
      {/* Background Image */}
      <div
        className="product-hero-bg"
        style={{
          backgroundImage: 'url(/assets/images/ProductBg.png)',
        }}
      ></div>

      {/* Overlay Content */}
      <div className="product-hero-overlay">
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
              style={{ backgroundColor: 'var(--gold-accent)', color: '#fff' }}
            >
              Explore Categories
            </a>
            <a
              href="#why-nixbeezs"
              className="btn product-outline-btn px-4 py-2 rounded-pill"
              style={{ backgroundColor: 'var(--overlay-dark)', color: '#fff' }}
            >
              Why Nixbeezs?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
