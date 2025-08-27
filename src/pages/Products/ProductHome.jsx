// pages/Home.jsx
import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import ProductOverview from './ProductOverview';
import Footer from '../../components/Footer';
import ProductTiers from './ProductTiers';
import LightingProducts from './LightingProducts'; // (not yet used, but imported)
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../main.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Full-Width Scrollable Container */}
      <div className="home-scroll-container">
        
        {/* Product Overview Section */}
        <section id="product" className="w-100">
          <div className="container-fluid px-0">
            <ProductOverview />
          </div>
        </section>

        {/* Product Tiers Section */}
        <section id="product-tiers" className="py-5 w-100 bg-light">
          <div className="container-fluid px-0">
            <ProductTiers />
          </div>
        </section>

        {/* Future Lighting Products Section */}
        <section id="lighting-products" className="py-5 w-100">
          <div className="container-fluid px-0">
            {/* Placeholder - add later */}
            {/* <LightingProducts /> */}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
