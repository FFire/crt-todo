import React from 'react';

export const enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const ThemeContext = React.createContext(Theme.LIGHT);
