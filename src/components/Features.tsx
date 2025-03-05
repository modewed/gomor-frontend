import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        <h2 className="section-title">Почему Gomor Integrator</h2>
        <p className="section-subtitle">Мы создаем технологические решения, которые меняют правила игры</p>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Инновационная разработка</h3>
            <p>Создаем передовые решения с использованием новейших технологий и методологий</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Безопасность на первом месте</h3>
            <p>Обеспечиваем высочайший уровень защиты данных и приложений</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <h3>Высокая производительность</h3>
            <p>Оптимизируем каждую строчку кода для максимальной эффективности</p>
          </div>
        </div>
        
        <div className="features-highlight">
          <div className="highlight-content">
            <h3>Комплексные IT-решения</h3>
            <p>Мы предлагаем полный спектр услуг от разработки до поддержки, чтобы ваш бизнес всегда был на шаг впереди конкурентов.</p>
            <ul className="highlight-list">
              <li>Разработка программного обеспечения</li>
              <li>Мобильные приложения</li>
              <li>Облачные решения</li>
              <li>Искусственный интеллект</li>
              <li>Кибербезопасность</li>
              <li>Управление данными</li>
            </ul>
          </div>
          <div className="highlight-image">
            <img src="/features-image.jpg" alt="IT-решения" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 