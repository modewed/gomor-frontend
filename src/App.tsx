import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Innovation from './components/Innovation';
import CEO from './components/CEO';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Hero />
        <Features />
        <Innovation />
        <CEO />
        <Products />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
