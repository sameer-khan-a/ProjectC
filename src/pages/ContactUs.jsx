import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../main.css';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section className="contactus-section position-relative">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
        >
          <source src="/assets/videos/Contact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay position-absolute top-0 start-0 w-100 h-100"></div>

        {/* Content */}
        <div className="contactus-content container py-5 position-relative">
          <h2 className="text-center text-white mb-4" data-aos="fade-down">
            Contact <span className="highlight">Us</span>
          </h2>

          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-md-6 text-white" data-aos="fade-right">
              <h4 className="mb-3 text-uppercase fw-bold" style={{ color: '#d4af7f' }}>
                📍 Corporate Identity
              </h4>

              <p><strong style={{ color: '#d4af7f' }}>Company Name:</strong> <span className="text-light">NIXBEEZS</span></p>
              <p><strong style={{ color: '#d4af7f' }}>Established:</strong> <span className="text-light">2018</span></p>
              <p><strong style={{ color: '#d4af7f' }}>Address:</strong> <span className="text-light">No. C27, KSFC Office Road, Industrial Estate, Vidyanagar, Tumakuru – 572103, Karnataka, India</span></p>
              <p><strong style={{ color: '#d4af7f' }}>Certifications:</strong> <span className="text-light">BIS, CE</span></p>
              
              <p>
                <strong style={{ color: '#d4af7f' }}>Website:</strong>{' '}
                <a
                  href="https://www.nixbeezs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-underline"
                >
                  nixbeezs.com
                </a>
              </p>

              <p>
                <strong style={{ color: '#d4af7f' }}>Email:</strong>{' '}
                <a
                  href="mailto:ravinnixbeezs@gmail.com"
                  className="text-white text-decoration-underline"
                >
                  ravinnixbeezs@gmail.com
                </a>
              </p>

              <p><strong style={{ color: '#d4af7f' }}>Phone:</strong> <span className="text-light">+91 93538 96696</span></p>
            </div>

            {/* Map */}
            <div className="col-md-6" data-aos="fade-left">
              <div className="map-container shadow-lg rounded-4 overflow-hidden">
                <iframe
                  title="Nixbeezs Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.6981570804024!2d77.10598967506838!3d13.322117006246212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1a9f0f0c0a97f%3A0xf7ff79b3094bc4c6!2sNIXBEEZS!5e0!3m2!1sen!2sin!4v1721307682351!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
     
      </section>
    </>
  );
};

export default ContactUs;
