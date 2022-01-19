import PropTypes from 'prop-types';
import React from 'react';
import { theme } from '../../cotext/themeContext';

export const ThemeToggle = ({ uiTheme, handleThemeToggle }) => (
    <>
      <input
        type='checkbox'
        id='ThemeToggle'
        defaultChecked={uiTheme === theme.DARK}
        onChange={handleThemeToggle}
      />
      <label htmlFor='ThemeToggle'>Dark mode</label>
    </>
);

ThemeToggle.propTypes = {
  handleThemeToggle: PropTypes.func.isRequired,
  UiTheme: PropTypes.string,
};
