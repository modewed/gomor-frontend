import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="footer-title">Gomor Integrator</h3>
            <p>Расширяем возможности бизнеса с помощью инновационных IT-решений с 2010 года.</p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="footer-social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="footer-social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="footer-social-link">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-title">Быстрые ссылки</h3>
            <ul className="footer-menu">
              <li>
                <Link to="home" smooth={true} duration={500}>Главная</Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500}>Услуги</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>О нас</Link>
              </li>
              <li>
                <Link to="ceo" smooth={true} duration={500}>Наш CEO</Link>
              </li>
              <li>
                <Link to="testimonials" smooth={true} duration={500}>Отзывы</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-title">Контакты</h3>
            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>ул. Технологическая 123, Иваново, Россия</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+7 (901) 289-6848</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@gomorintegrator.com</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h3 className="footer-title">Подписка на новости</h3>
            <p>Будьте в курсе наших последних новостей и предложений.</p>
            <form className="footer-form">
              <input type="email" placeholder="Ваш email" required />
              <button type="submit" className="btn btn-primary">Подписаться</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Gomor Integrator. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 