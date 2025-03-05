import React from 'react';
import './CEO.css';

const CEO: React.FC = () => {
  return (
    <section id="ceo" className="ceo section">
      <div className="container">
        <h2 className="section-title">Познакомьтесь с нашим CEO</h2>
        <div className="ceo-content">
          <div className="ceo-video-container">
            <video className="ceo-video" autoPlay loop muted>
              <source src="/video.mp4" type="video/mp4" />
            </video>
            <div className="ceo-image-container">
              <div className="ceo-image-wrapper">
                <img src="/gomor.jpg" alt="CEO Gomor" className="ceo-image" />
              </div>
            </div>
          </div>
          <div className="ceo-info">
            <h3 className="ceo-name">Гомор</h3>
            <p className="ceo-position">Основатель и генеральный директор</p>
            <div className="ceo-divider"></div>
            <p className="ceo-bio">
              Гомор, наш дальновидный CEO, родом из Иваново, Россия. Он начал свой путь в мире технологий как Python-разработчик, оттачивая свои навыки и формируя глубокое понимание разработки программного обеспечения с нуля. Его страсть к технологиям и лидерству привела Gomor Integrator к новым высотам в индустрии IT-аутсорсинга.
            </p>
            <p className="ceo-bio">
              Имея корни в разработке на Python и острый взгляд на инновации, Гомор сформировал культуру нашей компании, ценящую непрерывное обучение, совершенство и удовлетворенность клиентов. Под его руководством мы выросли из небольшой локальной операции в глобального игрока в сфере IT-решений.
            </p>
            <div className="ceo-social">
              <a href="#" className="ceo-social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="ceo-social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="ceo-social-link">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO; 