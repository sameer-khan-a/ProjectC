// pages/Home.jsx
import React, { useEffect } from 'react';
import NavbarHome from '../components/NavbarHome';
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
      <NavbarHome />

      {/* Main Scrollable Container */}
      <div className="home-scroll-container">
        {/* Hero Section */}
        <section id="hero" >
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <HeroSection />
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-5 bg-light">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <AboutUs />
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Products />
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-5 bg-light">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <ContactUs />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
