import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Theme } from '../../cotext/themeContext';
import { routePaths } from '../App/routePaths';
import s from './ThemeToggle.module.css';

export interface IThemeProps {
  uiTheme: Theme;
  handleThemeToggle(e: ChangeEvent<HTMLInputElement>): void;
}

export const ThemeToggle = ({ uiTheme, handleThemeToggle }: IThemeProps): JSX.Element => (
  <div className={s.nav}>
    <input
      type='checkbox'
      id='ThemeToggle'
      defaultChecked={uiTheme === Theme.DARK}
      onChange={handleThemeToggle}
    />
    <label htmlFor='ThemeToggle'>Dark mode</label>
    <div className={s.justify}>
      <Link className={s.linkItem} to={routePaths.HOME.path}>{routePaths.HOME.name}</Link>
      <Link className={s.linkItem} to={routePaths.ABOUT.path}>{routePaths.ABOUT.name}</Link>
    </div>
  </div>
);
