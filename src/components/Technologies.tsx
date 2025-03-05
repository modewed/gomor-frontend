import React from 'react';
import './Technologies.css';

interface TechnologyProps {
  name: string;
  icon: string;
}

const Technology: React.FC<TechnologyProps> = ({ name, icon }) => {
  return (
    <div className="technology-item">
      <div className="technology-icon">
        <img src={icon} alt={name} />
      </div>
      <h4 className="technology-name">{name}</h4>
    </div>
  );
};

const Technologies: React.FC = () => {
  const technologies = [
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'Go',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    }
  ];

  return (
    <section id="technologies" className="technologies section">
      <div className="container">
        <h2 className="section-title">Технологии, с которыми мы работаем</h2>
        <div className="technologies-grid">
          {technologies.map((tech, index) => (
            <Technology key={index} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies; 