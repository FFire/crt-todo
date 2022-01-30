import classNames from 'classnames';
import React, { useContext } from 'react';
import { Theme, ThemeContext } from '../../cotext/themeContext';
import s from './Spinner.module.css';

export const Spinner = (): JSX.Element => {
  const UiTheme: Theme = useContext(ThemeContext);
  const cssClasses: string = classNames(s.spinner, { [s.dark]: UiTheme === Theme.DARK });
  return (
    <p className={cssClasses}>
      Data is loading...
    </p>
  );
};
