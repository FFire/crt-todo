import React from 'react';

// eslint-disable-next-line no-shadow
export const enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const ThemeContext = React.createContext(Theme.LIGHT);
