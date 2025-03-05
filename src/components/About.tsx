import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">О нас</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Кто мы</h3>
            <p>
              Gomor Integrator — ведущая компания по IT-аутсорсингу, специализирующаяся на предоставлении инновационных решений и исключительных талантов для бизнеса по всему миру. С нашей командой квалифицированных профессионалов и передовыми технологиями мы помогаем организациям оптимизировать свои операции и достичь цифровой трансформации.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-text">лет опыта</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-text">успешных проектов</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-text">довольных клиентов</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-container">
              <img src="/about-image.jpg" alt="Команда Gomor Integrator" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 