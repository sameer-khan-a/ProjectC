// pages/Home.jsx
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../pages/HeroSection';
import AboutUs from '../pages/AboutUs';
import Products from './Products';
import ContactUs from './ContactUs';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../main.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-scroll-container">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="products">
          <Products />
        </section>

        <section id="contact">
          <ContactUs />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
