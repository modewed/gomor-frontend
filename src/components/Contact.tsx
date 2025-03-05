import React, { useState } from 'react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Свяжитесь с нами</h2>
          <p className="section-subtitle">Готовы начать проект? Мы здесь, чтобы помочь вам на каждом этапе</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Наш адрес</h3>
              <p>ул. Технологическая 123, Иваново, Россия</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Телефон</h3>
              <p>+7 (901) 289-6848</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>info@gomorintegrator.com</p>
            </div>
            
            <div className="contact-social">
              <a href="#" className="contact-social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="contact-social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="contact-social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="contact-social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Отправьте нам сообщение</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Ваш Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Ваше сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 