import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import SpotlightCard from "./Bits/SpotlightCard";
import "../../main.css";

const ElectricalRange = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const categories = [
    { title: "Wires & Cables", img: "/assets/images/wires.png" },
    { title: "Surge Protectors", img: "/assets/images/surge.png" },
    { title: "Switches & Switchgears", img: "/assets/images/switch.png" },
    { title: "Allied Products", img: "/assets/images/allied.png" },
  ];

  const lights = [
    { title: "Street Lights", img: "/assets/images/street.png" },
    { title: "Garden Lights", img: "/assets/images/garden.png" },
    { title: "Hybrid Lights", img: "/assets/images/hybrid.png" },
    { title: "Motion-Sensor Lights", img: "/assets/images/motion.png" },
  ];

  // helper to smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="electrical-hero"
        data-aos="fade-up"
        style={{
          backgroundImage: "url('/assets/images/BgRange.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay">
          <h1 style={{ color: "var(--gold-accent)" }}>Powering Tomorrow, Today</h1>
          <p>
            Discover Nixbeezs’ complete electrical product range—wires, surge
            protectors, switches,<br /> and advanced lighting built for homes,
            businesses, and smart cities.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection("categories")}>
              Explore Products
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection("cta")}>
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="electrical-categories" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Our Electrical Categories</h2>
          <div className="grid">
            {categories.map((cat, idx) => (
              <div key={idx} className="card">
                <img src={cat.img} alt={cat.title} />
                <h3>{cat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lighting Section */}
      <section id="lighting" className="electrical-lighting" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Lighting Solutions</h2>
          <div className="grid">
            {lights.map((light, idx) => (
              <div key={idx} className="card">
                <img src={light.img} alt={light.title} />
                <h3>{light.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
 
   <section
  style={{
    padding: "60px 0",
    backgroundColor: "#fffaf3",
    display: "flex",
    justifyContent: "center"
  }}
  data-aos="fade-up"
  id="cta"
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      textAlign: "center"
    }}
  >
    <SpotlightCard
      spotlightColor="#186b97ff"
      style={{
        backgroundColor: "#fdf5eb",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)"
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "16px",
          color: "var(--gold-accent)",
          fontWeight: "700"
        }}
      >
        Need Customized Electrical Solutions?
      </h2>
      <p
        style={{
          fontSize: "1.125rem",
          lineHeight: "1.6",
          marginBottom: "24px",
          color: "var(--cream-bg)"
        }}
      >
        From residential to industrial, Nixbeezs provides tailored designs,
        expert installation, and reliable after-sales support.
      </p>
      <button
        style={{
          backgroundColor: "var(--gold-accent)",
          color: "white",
          padding: "12px 28px",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: "pointer",
          transition: "background-color 0.3s ease"
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e67a36")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#ff8c42")}
      >
        Contact Us
      </button>
    </SpotlightCard>
  </div>
</section>


      <Footer />
    </>
  );
};

export default ElectricalRange;
