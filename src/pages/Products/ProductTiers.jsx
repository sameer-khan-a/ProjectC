import React from 'react';
import FlowingMenu from './Bits/FlowingMenu';

const whyNixbeezsItems = [
  { icon: '🌱', title: 'Sustainable', text: 'Eco-conscious solutions designed for efficiency and long-term impact.', image: '/assets/images/WhyTiers1.png' },
  { icon: '⚙️', title: 'Reliable', text: 'Products engineered with durability, backed by solid warranties.', image: '/assets/images/WhyTiers2.png' },
  { icon: '💎', title: 'Premium Design', text: 'Where aesthetics meet functionality for modern homes & businesses.', image: '/assets/images/WhyTiers3.png' },
  { icon: '🏛️', title: 'Bespoke Service', text: 'Custom solutions with lifetime support and design consultancy.', image: '/assets/images/WhyTiers4.png' },
];

const productTiers = [
  { name: 'NixEco™', emoji: '🌱', tagline: 'Affordable Smart Essentials', description: 'Tailored for the cost-sensitive market, delivering essential features and energy efficiency.', usp: ['Affordable without compromise on safety', '2-year standard warranty', 'Minimalist design for budget projects'], bgImage: '/assets/images/NixEco.png' },
  { name: 'NixCore™', emoji: '⚙️', tagline: 'Mid-Range Reliable Performance', description: 'Ideal for urban homes and commercial spaces seeking balance in form and function.', usp: ['Smart-ready devices', '3-year warranty', 'Performance-backed lighting & automation'], bgImage: '/assets/images/NixCore.png' },
  { name: 'NixElite™', emoji: '💎', tagline: 'Premium Aesthetics & Smart Living', description: 'For those who value design, intelligence, and lifestyle integration.', usp: ['Designer fixtures, seamless automation', 'Voice and app control', 'Customisable scenes'], bgImage: '/assets/images/NixElite.png' },
  { name: 'NixAura™', emoji: '🏛️', tagline: 'Ultra-Premium Signature Collection', description: 'Crafted for luxury residences, showrooms, boutique hotels, and high-end experiences.', usp: ['Imported-grade finishes & modular elegance', 'Fully bespoke design', 'Lifetime support & concierge'], bgImage: '/assets/images/NixAura.png' },
];

const NixbeezsProductTiers = () => {
  return (
    <section style={{ backgroundColor: 'var(--cream-bg)', padding: '2rem 0' }}>
      <div className="container text-center ">
        <h2 style={{ color: 'var(--mocha-dark)' }}>Our Product Tiers</h2>
        <p style={{ color: 'var(--mocha-dark)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Smart Lighting. Tailored to Every Vision.
        </p>
      </div>

      {/* 2 per row product cards */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {productTiers.map((tier, index) => (
            <div key={index} className="col-12 col-md-6">
              <div
                className="card h-100 shadow-sm border-0 text-center"
                style={{
                  backgroundImage: `url(${tier.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: 'var(--cream-bg)',
                  minHeight: '350px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textShadow: '1px 1px 5px rgba(0,0,0,0.6)',
                }}
              >
                <div
                  className="card-body rounded px-3"
                  style={{
                    backgroundColor: 'rgba(47, 37, 27, 0.75)', // overlay
                    height: "100%",
                    width: "100%",
                    color: 'var(--cream-bg)',
                  }}
                >
                  <h3 style={{ color: 'var(--gold-accent)' }}>
                    {tier.emoji} {tier.name}
                  </h3>
                  <p style={{ color: 'var(--sand)', fontStyle: 'italic', fontSize: '0.95rem' }}>{tier.tagline}</p>
                  <p style={{ color: 'var(--cream-bg)', fontSize: '0.9rem' }}>{tier.description}</p>
                  <ul className="list-unstyled" style={{ color: 'var(--cream-bg)', paddingLeft: 0 }}>
                    {tier.usp.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <section style={{ backgroundColor: 'var(--sand)', padding: '5rem 0', textAlign: 'center' }} id="why-nixbeezs">
        <h2 style={{ color: 'var(--mocha-dark)', marginBottom: '2rem' }}>✨ Why Choose NIXBEEZS?</h2>
        <div style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu items={whyNixbeezsItems} />
        </div>
      </section>
    </section>
  );
};

export default NixbeezsProductTiers;
