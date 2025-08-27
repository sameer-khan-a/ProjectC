import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';

const AboutUs = () => {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <div className="row align-items-center g-4">
          
          {/* Left Content */}
          <div className="col-lg-7 col-md-12 order-2 order-lg-1" data-aos="fade-up-right">
            <h2 className="mb-4 text-center text-lg-start">
              About <span className="highlight">NIXBEEZS</span>
            </h2>
            <p className="text-muted text-center text-lg-start text-wrap px-2 px-lg-0">
              Founded in 2018 and based in Tumakuru, Karnataka, <strong>NIXBEEZS</strong> 
              is an Indian company revolutionizing electrical and automation technology 
              through intelligent, aesthetic, and sustainable solutions. With a passion 
              for innovation and a commitment to quality, we cater to diverse market 
              tiers with products that combine craftsmanship and smart functionality.
            </p>

            <ul className="list-unstyled mt-3 text-center text-lg-start px-2 px-lg-0">
              <li>📍 <strong>Head Office:</strong> Industrial Estate, Vidyanagar, Tumakuru</li>
              <li>💼 10+ Years Combined Team Experience in Electrical & Automation</li>
              <li>
                🌐 <strong>Website:</strong>{' '}
                <a href="https://www.nixbeezs.com" target="_blank" rel="noopener noreferrer">
                  www.nixbeezs.com
                </a>
              </li>
              <li>
                📧 <strong>Email:</strong>{' '}
                <a href="mailto:ravinnixbeezs@gmail.com">ravinnixbeezs@gmail.com</a>
              </li>
              <li>📞 <strong>Phone:</strong> +91 93538 96696</li>
              <li>✅ BIS, CE Certified</li>
            </ul>
          </div>

          {/* Right Visual Block */}
          <div className="col-lg-5 col-md-12 order-1 order-lg-2" data-aos="fade-up-left">
            <div
              className="about-image rounded-4 shadow-lg w-100"
              style={{
                backgroundImage: "url('/assets/images/about.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '250px',   // smaller for mobile
                maxHeight: '500px'    // cap on large screens
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
