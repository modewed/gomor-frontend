import React, { useState } from 'react';
import './Testimonials.css';

interface TestimonialProps {
  text: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, position, company, image }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className="testimonial-quote">
          <i className="fas fa-quote-left"></i>
        </div>
        <p className="testimonial-text">{text}</p>
        <div className="testimonial-author">
          <div className="testimonial-author-image">
            <img src={image} alt={author} />
          </div>
          <div className="testimonial-author-info">
            <h4>{author}</h4>
            <p>{position}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Gomor Integrator преобразил наш бизнес своими инновационными решениями. Опыт и преданность их команды не имеют себе равных.",
      author: "Иван Петров",
      position: "CEO",
      company: "ТехКорп",
      image: "/testimonial1.jpg"
    },
    {
      text: "Работа с Gomor Integrator стала переломным моментом для нашей компании. Их облачные решения значительно повысили нашу эффективность.",
      author: "Елена Смирнова",
      position: "CTO",
      company: "ИнноватеТех",
      image: "/testimonial2.jpg"
    },
    {
      text: "Мобильное приложение, разработанное Gomor Integrator, превзошло наши ожидания. Оно удобно в использовании и получило отличные отзывы от наших клиентов.",
      author: "Михаил Иванов",
      position: "Основатель",
      company: "АппМастерс",
      image: "/testimonial3.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">Что говорят наши клиенты</h2>
        <div className="testimonials-container">
          <button className="testimonial-nav prev" onClick={prevTestimonial}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}
                style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
              >
                <Testimonial 
                  text={testimonial.text}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                  image={testimonial.image}
                />
              </div>
            ))}
          </div>
          
          <button className="testimonial-nav next" onClick={nextTestimonial}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 