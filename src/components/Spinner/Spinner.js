import classNames from 'classnames';
import React from 'react';
import { theme, ThemeContext } from '../App/themeContext';
import s from './Spinner.module.css';

export class Spinner extends React.Component {
  static contextType = ThemeContext;

  render() {
    const UiTheme = this.context;
    const cssClasses = classNames(s.spinner, { [s.dark]: UiTheme === theme.DARK });
    return (
      <p className={cssClasses}>
        Data is loading...
      </p>
    );
  }
}
