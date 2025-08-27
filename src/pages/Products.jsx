import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../main.css';
import Navbar from '../components/Navbar';
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
      <section className="products-section py-5">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-down">
            Our Products & Services
          </h2>

          {products.map((product, index) => (
            <div
              className="row align-items-center mb-5"
              key={index}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              {/* Image Column */}
              <div className={`col-md-6 ${index % 2 === 0 ? '' : 'order-md-2'}`}>
                <div
                  className="product-img rounded shadow"
                  style={{
                    backgroundImage: `url(${product.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                  }}
                ></div>
              </div>

              {/* Content Column */}
              <div className={`col-md-6 ${index % 2 === 0 ? '' : 'order-md-1'}`}>
                <div className="product-content p-4">
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
