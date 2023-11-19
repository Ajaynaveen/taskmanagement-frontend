
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const themes = ['light', 'dark', 'blue', 'green', 'purple', 'orange'];

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  }; const getFontStyles = () => {
    switch (theme) {
      case 'light':
        return {
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          fontWeight: 'normal',
          color: '#333', // Text color
        };
      case 'dark':
        return {
          fontFamily: 'Helvetica, sans-serif',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff', // Text color
        };
      case 'blue':
        return {
          fontFamily: 'Verdana, sans-serif',
          fontSize: '18px',
          fontWeight: 'normal',
          color: '#007bff', // Text color
        };
      case 'green':
        return {
          fontFamily: 'Courier New, monospace',
          fontSize: '14px',
          fontWeight: 'normal',
          color: '#28a745', // Text color
        };
      case 'purple':
        return {
          fontFamily: 'Times New Roman, serif',
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#6f42c1', // Text color
        };
      case 'orange':
        return {
          fontFamily: 'Impact, fantasy',
          fontSize: '16px',
          fontWeight: 'normal',
          color: '#fd7e14', // Text color
        };
      default:
        return {
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          fontWeight: 'normal',
          color: '#333', // Default text color
        };
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme ,getFontStyles}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
