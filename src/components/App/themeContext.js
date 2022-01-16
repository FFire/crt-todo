import React from 'react';

export const theme = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const ThemeContext = React.createContext(theme.LIGHT);
