import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../main.css';
import Navbar from '../components/Navbar';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    <section className="contactus-section">
      {/* Background Video */}
           <video autoPlay muted loop playsInline className="hero-video">
        <source src="/assets/videos/Contact.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>

      {/* Content */}
      <div className="contactus-content container py-5" data-aos="fade-up">
        <h2 className="text-white text-center mb-4">Contact <span className="highlight">Us</span></h2>

        <div className="row align-items-start">
          {/* Contact Info */}
  <div className="col-md-6 text-white">
  <h4 className="mb-3" style={{ color: '#d4af7f', fontWeight: 'bold' }}>📍 Corporate Identity</h4>

  <p><strong style={{ color: '#d4af7f' }}>Company Name:</strong> <span style={{ color: '#f8f5f2' }}>NIXBEEZS</span></p>
  <p><strong style={{ color: '#d4af7f' }}>Established:</strong> <span style={{ color: '#f8f5f2' }}>2018</span></p>
  <p><strong style={{ color: '#d4af7f' }}>Address:</strong> <span style={{ color: '#f8f5f2' }}>No. C27, KSFC Office Road, Industrial Estate, Vidyanagar, Tumakuru – 572103, Karnataka, India</span></p>
  <p><strong style={{ color: '#d4af7f' }}>Certifications:</strong> <span style={{ color: '#f8f5f2' }}>BIS, CE</span></p>
  <p>
    <strong style={{ color: '#d4af7f' }}>Website:</strong>{' '}
    <a
      href="https://www.nixbeezs.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#fffefb',
        textDecoration: 'underline',
        textUnderlineOffset: '3px'
      }}
    >
      nixbeezs.com
    </a>
  </p>
  <p>
    <strong style={{ color: '#d4af7f' }}>Email:</strong>{' '}
    <a
      href="mailto:ravinnixbeezs@gmail.com"
      style={{
        color: '#fffefb',
        textDecoration: 'underline',
        textUnderlineOffset: '3px'
      }}
    >
      ravinnixbeezs@gmail.com
    </a>
  </p>
  <p><strong style={{ color: '#d4af7f' }}>Phone:</strong> <span style={{ color: '#f8f5f2' }}>+91 93538 96696</span></p>
</div>


          {/* Map */}
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="map-container shadow-lg rounded-5 overflow-hidden" data-aos="fade-left">
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
