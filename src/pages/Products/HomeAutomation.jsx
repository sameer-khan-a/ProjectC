import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import SpotlightCard from "./Bits/SpotlightCard";
import "../../main.css";

const HomeAutomation = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      title: "Mood Lighting",
      img: "/assets/images/mood.png",
      desc: "Personalize your ambience with pre-sets and color modes.",
    },
    {
      title: "Voice Control",
      img: "/assets/images/voice.png",
      desc: "Works seamlessly with Alexa & Google Assistant.",
    },
    {
      title: "Energy Analytics",
      img: "/assets/images/analytics.png",
      desc: "Track and optimize your energy usage in real-time.",
    },
    {
      title: "Smart Security",
      img: "/assets/images/secure.png",
      desc: "WiFi alarms, motion sensors & smart door locks for safety.",
    },
  ];

  const devices = [
    { title: "Smart Switches", img: "/assets/images/switch.png" },
    { title: "WiFi IR Blaster", img: "/assets/images/wifiir.png" },
    { title: "Smart Door Locks", img: "/assets/images/smartlock.png" },
    { title: "Smart Plugs", img: "/assets/images/smartplug.png" },
    { title: "Motion Sensors", img: "/assets/images/smartsensor.png" },
    { title: "Smart Cameras", img: "/assets/images/smartcameras.png" },
  ];

  const compatibilities = [
    { name: "Amazon Alexa", img: "/assets/images/alexa.png" },
    { name: "Google Assistant", img: "/assets/images/google_assistant.png" },
    { name: "KNX", img: "/assets/images/knx.png" },
    { name: "Zigbee", img: "/assets/images/zigbee.png" },
    { name: "WiFi", img: "/assets/images/wifi.png" },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="automation-hero" data-aos="fade-up">
        <div className="hero-overlay" style={{backgroundImage: '/assets/images/bgauto.png'}}>
          <h1 style={{color: "blanchedalmond"}}>Home Automation Made Simple</h1>
          <p>
            Redefine comfort and security with Nixbeezs’ smart automation —
            lighting, safety, and energy management at your fingertips.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Devices</button>
            <button className="btn-secondary">Book a Demo</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="automation-features" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Core Automation Features</h2>
          <div className="grid">
            {features.map((feat, idx) => (
              <div key={idx} className="card">
                <img src={feat.img} alt={feat.title} />
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="automation-devices" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Smart Devices</h2>
          <div className="grid">
            {devices.map((dev, idx) => (
              <div key={idx} className="card">
                <img src={dev.img} alt={dev.title} />
                <h3>{dev.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section className="automation-compatibility" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Compatible Platforms</h2>
          <div className="compatibility-icons">
            {compatibilities.map((item, idx) => (
              <div key={idx} className="compatibility-item">
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
   <section
  className="automation-cta"
  data-aos="fade-up"
  style={{
    textAlign: "center",
    padding: "60px 20px",
    background: "var(--cream-bg)",
    color: "var(--sand)"
  }}
>
  <div className="container">
    <SpotlightCard spotlightColor="#6a90cca1">
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "10px",
          color: "var(--gold-accent)"
        }}
      >
        Ready to Automate Your Space?
      </h2>
      <p
        style={{
          fontSize: "1rem",
          marginBottom: "20px",
          color: "var(--sand)"
        }}
      >
        Get in touch with our experts for personalized automation
        solutions — from apartments to smart communities.
      </p>
      <button
        style={{
          background: "var(--gold-accent)",
          color: "var(--mocha-dark)",
          border: "none",
          cursor: "pointer",
          padding: "12px 28px",
          fontWeight: 600,
          borderRadius: "6px",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--sand)";
          e.currentTarget.style.color = "var(--gold-accent)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--gold-accent)";
          e.currentTarget.style.color = "var(--cream-bg)";
        }}
      >
        Schedule a Visit
      </button>
    </SpotlightCard>
  </div>
</section>


      <Footer />
    </>
  );
};

export default HomeAutomation;
