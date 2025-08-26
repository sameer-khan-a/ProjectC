import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../main.css';
import Navbar from '../components/Navbar';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
    title: 'LED Lighting Solutions',
    desc: 'Residential, commercial, decorative, architectural, outdoor, and furniture lighting that brings beauty and functionality together.',
    img: '/assets/images/product1.png',
  },
  {
    title: 'Home Automation',
    desc: 'Smart switches, sensors, app and voice control systems designed for next-gen living and energy efficiency.',
    img: '/assets/images/Product2.jpg',
  },
  {
    title: 'Commercial Automation',
    desc: 'Lighting controls, HVAC automation, surveillance, and energy management for smart commercial environments.',
    img: '/assets/images/Product3.jpg',
  },
  {
    title: 'Solar Lighting',
    desc: 'Sustainable and hybrid lighting options including solar garden lights, motion-sensor and street lighting systems.',
    img: '/assets/images/Product4.jpg',
  },
  {
    title: 'Research & Development',
    desc: 'In-house Product design, firmware development, control systems, and UX research pushing the envelope of innovation.',
    img: '/assets/images/Product5.jpg',
  },
  {
    title: 'End-to-End Services',
    desc: 'From site survey and custom planning to installation, commissioning, and post-sale AMC support.',
    img: '/assets/images/Product6.png',
  },
];

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <section className="products-section">
        <h2 className="text-center mb-5" data-aos="fade-down">
          Our Products & Services
        </h2>

        {products.map((product, index) => (
          <div
            className={`premium-product-block ${index % 2 === 0 ? 'left-img' : 'right-img'}`}
            key={index}
          >
            {/* Image Block */}
            <div
              className="premium-product-img"
              style={{ backgroundImage: `url(${product.img})` }}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            ></div>

            {/* Content Block */}
            <div
              className="premium-product-content"
              data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
            >
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
          </div>
        ))}
        
      </section>
    </>
  );
};

export default Products;
