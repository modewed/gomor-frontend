import React from 'react';
import './Innovation.css';

const Innovation: React.FC = () => {
  return (
    <section id="innovation" className="innovation section">
      <div className="container">
        <div className="innovation-header">
          <h2 className="section-title">Инновации в каждой строчке кода</h2>
          <p className="section-subtitle">Мы не просто следуем тенденциям — мы их создаем</p>
        </div>
        
        <div className="innovation-grid">
          <div className="innovation-card">
            <div className="innovation-card-content">
              <span className="innovation-number">01</span>
              <h3>Искусственный интеллект</h3>
              <p>Внедряем передовые алгоритмы машинного обучения для автоматизации процессов и принятия решений.</p>
            </div>
          </div>
          
          <div className="innovation-card">
            <div className="innovation-card-content">
              <span className="innovation-number">02</span>
              <h3>Блокчейн-технологии</h3>
              <p>Разрабатываем защищенные и прозрачные системы на основе распределенного реестра.</p>
            </div>
          </div>
          
          <div className="innovation-card">
            <div className="innovation-card-content">
              <span className="innovation-number">03</span>
              <h3>Интернет вещей</h3>
              <p>Создаем экосистемы взаимосвязанных устройств для умного дома и промышленности.</p>
            </div>
          </div>
          
          <div className="innovation-card">
            <div className="innovation-card-content">
              <span className="innovation-number">04</span>
              <h3>Облачные вычисления</h3>
              <p>Проектируем масштабируемые и отказоустойчивые облачные решения для бизнеса любого размера.</p>
            </div>
          </div>
        </div>
        
        <div className="innovation-stats">
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
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-text">поддержка</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation; 