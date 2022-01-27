import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../cotext/themeContext';
import { routePaths } from '../App/routePaths.tsx';
import s from './ThemeToggle.module.css';

export const ThemeToggle = ({ uiTheme, handleThemeToggle }) => (
  <div className={s.nav}>
    <input
      type='checkbox'
      id='ThemeToggle'
      defaultChecked={uiTheme === theme.DARK}
      onChange={handleThemeToggle}
    />
    <label htmlFor='ThemeToggle'>Dark mode</label>
    <div className={s.justify}>
      <Link className={s.linkItem} to={routePaths.HOME.path}>{routePaths.HOME.name}</Link>
      <Link className={s.linkItem} to={routePaths.ABOUT.path}>{routePaths.ABOUT.name}</Link>
    </div>
  </div>
);

ThemeToggle.propTypes = {
  handleThemeToggle: PropTypes.func.isRequired,
  UiTheme: PropTypes.string,
};
