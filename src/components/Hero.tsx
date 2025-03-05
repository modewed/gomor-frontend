import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img src="/features-image.jpg" alt="Команда Gomor Integrator" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-fog"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
            Комплексные ИТ-решения<br />
            для бизнеса - современные<br />
            инструменты Gomor Integrator
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero; 