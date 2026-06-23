import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = {
    background: '#B8D4E3',
    card: '#D9D9D9',
    box: '#FFFFFF',
    text: '#000000',
    secondaryText: '#8A8A8A',
  };

  const darkTheme = {
    background: '#121212',
    card: '#1E1E1E',
    box: '#2C2C2C',
    text: '#FFFFFF',
    secondaryText: '#BBBBBB',
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}