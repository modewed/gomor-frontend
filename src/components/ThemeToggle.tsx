import React from 'react';
import './ThemeToggle.css';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className={`toggle-track ${isDark ? 'dark' : 'light'}`}>
        <div className="toggle-indicator">
          <span className="toggle-icon">
            {isDark ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle; 