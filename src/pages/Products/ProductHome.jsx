// pages/Home.jsx
import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar'; // Corrected: Navbar was importing Footer
import ProductOverview from './ProductOverview';
import Footer from '../../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../main.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-scroll-container">
        <section id="product">
          <ProductOverview />
        </section>

        {/* Add more sections like ProductTiers, Features, etc. later */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
