import PropTypes from 'prop-types';
import React from 'react';
import { theme } from '../../cotext/themeContext';

export const ThemeToggle = ({ uiTheme, handleThemeToggle }) => (
  <>
    <div className='inline-flex items-center mt-2 mb-4'>
      <input
        className='accent-blue-900 w-5 h-5'
        type='checkbox'
        id='ThemeToggle'
        defaultChecked={uiTheme === theme.DARK}
        onChange={handleThemeToggle}
      />
      <label
        className='mx-2 text-gray-700'
        htmlFor='ThemeToggle'
      >Dark mode</label>
    </div>
  </>
);

ThemeToggle.propTypes = {
  handleThemeToggle: PropTypes.func.isRequired,
  UiTheme: PropTypes.string,
};
