import React from 'react';
import { ReactTyped } from 'react-typed';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-container position-relative">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="hero-video w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
      >
        <source src="/assets/videos/IOT.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-11 col-sm-12">

              <h1 className="fw-bold display-4 mb-3 " style={{color:"var(--mocha-dark)"}}>
                Empowering the Future with
              </h1>

              <h2 className="fw-semibold mb-4 text-light">
                <ReactTyped
                  strings={[
                    'Smart Electricals',
                    'Home Automation',
                    'Sustainable Tech',
                    'LED Lighting',
                    'IoT Innovations',
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                  showCursor={true}
                />
              </h2>

              <p className="lead mx-auto mb-4 px-3" style={{ maxWidth: "700px", color: 'var(--cream-bg)' }}>
                Innovative, intelligent, and inclusive solutions across lighting, automation, and sustainable tech.
              </p>

              <button 
                className="btn btn-lg px-4 py-2 rounded-pill shadow"
                style={{background: "var(--mocha-dark)", color: "white"}}
                onClick={() => navigate("/Products")}
              >
                Explore Our Solutions
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
