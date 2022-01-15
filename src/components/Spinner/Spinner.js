import classNames from 'classnames';
import React from 'react';
import { ThemeContext, themes } from '../App/themeContext';
import s from './Spinner.module.css';

export class Spinner extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { isLoading } = this.props;
    const UiTheme = this.context;
    const cssClasses = classNames(s.spinner, { [s.dark]: UiTheme === themes.dark });
    if (isLoading) {
      return (
        <p className={cssClasses}>
          Data is loading...
        </p>
      );
    }
    return null;
  }
}
