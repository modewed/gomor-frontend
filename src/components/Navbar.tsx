import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="home" className="navbar-logo" smooth={true} duration={500}>
          Gomor Integrator
        </Link>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="home" className="nav-link" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link to="features" className="nav-link" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                Преимущества
              </Link>
            </li>
            <li className="nav-item">
              <Link to="innovation" className="nav-link" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                Инновации
              </Link>
            </li>
            <li className="nav-item">
              <Link to="ceo" className="nav-link" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                О нас
              </Link>
            </li>
            <li className="nav-item">
              <Link to="products" className="nav-link" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                Продукты
              </Link>
            </li>
            <li className="nav-item">
              <Link to="testimonials" className="nav-link" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                Отзывы
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 