import React from 'react';
import './Products.css';

interface ProductProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const ProductSection: React.FC<ProductProps> = ({ title, description, image, reverse }) => {
  return (
    <div className={`product-section ${reverse ? 'reverse' : ''}`}>
      <div className="product-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="product-link">
          Узнать больше <i className="fas fa-arrow-right"></i>
        </a>
      </div>
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  return (
    <section id="products" className="products section">
      <div className="container">
        <h2 className="section-title">Наши продукты</h2>
        <p className="section-subtitle">Инновационные решения для современного бизнеса</p>
        
        <div className="products-container">
          <ProductSection 
            title="GomorAI" 
            description="Интеллектуальная платформа для анализа данных и автоматизации бизнес-процессов. GomorAI использует передовые алгоритмы машинного обучения для выявления скрытых закономерностей и оптимизации принятия решений."
            image="/product1.jpg"
          />
          
          <ProductSection 
            title="CloudSync" 
            description="Облачное решение для синхронизации и управления данными в реальном времени. CloudSync обеспечивает безопасное хранение, мгновенный доступ и бесперебойную работу с вашими данными из любой точки мира."
            image="/product2.jpg"
            reverse
          />
          
          <ProductSection 
            title="SecureGate" 
            description="Комплексная система кибербезопасности для защиты вашего бизнеса от современных угроз. SecureGate включает в себя многоуровневую защиту, мониторинг в реальном времени и автоматическое реагирование на инциденты."
            image="/product3.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Products; 