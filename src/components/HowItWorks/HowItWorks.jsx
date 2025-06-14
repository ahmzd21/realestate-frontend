// src/components/HowItWorks/HowItWorks.jsx
import React from 'react';
import './HowItWorks.css'; // Don't forget to create this CSS file
// You might want to import icons here later, e.g., from react-icons

function HowItWorks() {
  const steps = [
    {
      icon: '🔍', // Placeholder for an actual icon (e.g., FontAwesome, Material UI Icons)
      title: 'Search & Explore',
      description: 'Browse thousands of verified properties tailored to your needs.'
    },
    {
      icon: '🤝',
      title: 'Connect with Agents',
      description: 'Get expert advice and assistance from our experienced agents.'
    },
    {
      icon: '🔑',
      title: 'Find Your Home',
      description: 'Secure your dream property with our seamless process.'
    },
  ];

  return (
    <section className="how-it-works container">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;