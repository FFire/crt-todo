import PropTypes from 'prop-types';
import React from 'react';
import { theme } from '../../cotext/themeContext';
import '../../styles/output.css';

export const ThemeToggle = ({ uiTheme, handleThemeToggle }) => (
  <>
    <div className='w-full pl-6 py-1 bg-slate-100 flex items-center justify-between hover:bg-slate-200'>
      <div className='flex items-center'>
        <input
          className='flex-none h-4 w-4 accent-slate-600 hover:scale-110 hover:accent-slate-500'
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
      <div className='pr-10 space-x-4 '>
        <a className='text-gray-900/30 hover:text-gray-900/70' href="#">Home</a>
        <a className='text-gray-900/30 hover:text-gray-900/70' href='#'>About</a>
      </div>
    </div>
  </>
);

ThemeToggle.propTypes = {
  handleThemeToggle: PropTypes.func.isRequired,
  UiTheme: PropTypes.string,
};
