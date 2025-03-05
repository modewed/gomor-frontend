import React from 'react';
import './Services.css';

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <i className={icon}></i>
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <a href="#" className="service-link">
        Узнать больше <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Разработка программного обеспечения',
      description: 'Индивидуальные решения, отвечающие уникальным потребностям вашего бизнеса'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Разработка мобильных приложений',
      description: 'Создание мощных, удобных приложений для iOS и Android'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Облачные решения',
      description: 'Масштабируемая и безопасная облачная инфраструктура для вашего бизнеса'
    },
    {
      icon: 'fas fa-database',
      title: 'Управление данными',
      description: 'Эффективные решения для хранения, анализа и визуализации данных'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Кибербезопасность',
      description: 'Защита ваших цифровых активов от современных угроз'
    },
    {
      icon: 'fas fa-robot',
      title: 'Искусственный интеллект',
      description: 'Внедрение ИИ и машинного обучения для оптимизации бизнес-процессов'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Наши услуги</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 