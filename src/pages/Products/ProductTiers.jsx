import React from 'react';
import FlowingMenu from './Bits/FlowingMenu'; // ✅ Ensure correct path

const whyNixbeezsItems = [
  { 
    icon: '🌱', 
    title: 'Sustainable', 
    text: 'Eco-conscious solutions designed for efficiency and long-term impact.',
    image: '/assets/images/WhyTiers1.png'
  },
  { 
    icon: '⚙️', 
    title: 'Reliable', 
    text: 'Products engineered with durability, backed by solid warranties.',
    image: '/assets/images/WhyTiers2.png'
  },
  { 
    icon: '💎', 
    title: 'Premium Design', 
    text: 'Where aesthetics meet functionality for modern homes & businesses.',
    image: '/assets/images/WhyTiers3.png'
  },
  { 
    icon: '🏛️', 
    title: 'Bespoke Service', 
    text: 'Custom solutions with lifetime support and design consultancy.',
    image: '/assets/images/WhyTiers4.png'
  },
];

const productTiers = [
  {
    name: 'NixEco™',
    emoji: '🌱',
    tagline: 'Affordable Smart Essentials - Conscious Illumination',
    description: 'Tailored for the cost-sensitive market, delivering essential features and energy efficiency.',
    usp: [
      'Affordable without compromise on safety',
      '2-year standard warranty',
      'Minimalist design for mass housing and budget projects',
    ],
    tier: 'Eco',
    bgImage: '/assets/images/NixEco.png',
  },
  {
    name: 'NixCore™',
    emoji: '⚙️',
    tagline: 'Mid-Range Reliable Performance - Everyday Elegance',
    description: 'Ideal for urban homes and commercial spaces seeking balance in form and function.',
    usp: [
      'Smart-ready devices',
      '3-year warranty',
      'Performance-backed lighting & automation packages',
    ],
    tier: 'Mid',
    bgImage: '/assets/images/NixCore.png',
  },
  {
    name: 'NixElite™',
    emoji: '💎',
    tagline: 'Premium Aesthetics & Smart Living - Designer Brilliance',
    description: 'For those who value design, intelligence, and lifestyle integration.',
    usp: [
      'Designer fixtures, seamless automation',
      'Voice and app control integration',
      'Customisable scenes and ambience modes',
    ],
    tier: 'Premium',
    bgImage: '/assets/images/NixElite.png',
  },
  {
    name: 'NixAura™',
    emoji: '🏛️',
    tagline: 'Ultra-Premium Signature Collection - Statement Luminaires',
    description: 'Crafted for luxury residences, showrooms, boutique hotels, and high-end experiences.',
    usp: [
      'Imported-grade finishes & modular elegance',
      'Fully bespoke design and lighting consultancy',
      'Lifetime support & concierge maintenance service',
    ],
    tier: 'Ultra-Premium',
    bgImage: '/assets/images/NixAura.png',
  },
];

const NixbeezsProductTiers = () => {
  return (
    <section className="product-tiers-section">
      <div className="tiers-header">
        <h2>Our Product Tiers</h2>
        <p>Smart Lighting. Tailored to Every Vision.</p>
      </div>
      <div className="product-tier-grid">
        {productTiers.map((tier, index) => (
          <div
            key={index}
            className="tier-card"
            style={{
              backgroundImage: `url(${tier.bgImage})`,
            }}
          >
            <div className="card-overlay">
              <h3>
                <span className="emoji">{tier.emoji}</span> {tier.name}
              </h3>
              <p className="tagline">{tier.tagline}</p>
              <p className="description">{tier.description}</p>
              <ul>
                {tier.usp.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
          <section className="why-nixbeezs py-5" id="why-nixbeezs">
            <h2 className="text-center fw-bold mb-4">✨ Why Choose NIXBEEZS?</h2>
            <div style={{ height: '600px', position: 'relative' }}>
              <FlowingMenu items={whyNixbeezsItems} />
            </div>
          </section>
    </section>
  );
};

export default NixbeezsProductTiers;
