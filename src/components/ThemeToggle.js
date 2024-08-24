import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌞' : '🌙'}
      </button>
      <p>Change Theme</p>
    </div>
  );
};

export default ThemeToggle;
