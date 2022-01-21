import PropTypes from 'prop-types';
import React from 'react';
import '../../styles/output.css';
import { theme } from '../../cotext/themeContext';

export const ThemeToggle = ({ uiTheme, handleThemeToggle }) => (
  <>
    <div className='w-full pl-6 py-1 bg-slate-50 inline-flex items-center '>
      <input
        className='h-4 w-4 accent-emerald-800 hover:scale-110'
        type='checkbox'
        id='ThemeToggle'
        defaultChecked={uiTheme === theme.DARK}
        onChange={handleThemeToggle}
      />
      <label
        className='mx-2 text-gray-900/30 hover:text-gray-900/70'
        htmlFor='ThemeToggle'
      >Dark mode</label>
    </div>
  </>
);

ThemeToggle.propTypes = {
  handleThemeToggle: PropTypes.func.isRequired,
  UiTheme: PropTypes.string,
};
