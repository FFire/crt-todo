import classNames from 'classnames';
import React, { useContext } from 'react';
import { Theme, ThemeContext } from '../../cotext/themeContext';
import s from './NotFound.module.css';

export const NotFound = (): JSX.Element => {
  const UiTheme: Theme = useContext(ThemeContext);
  const cssClasses: string = classNames(s.spinner, { [s.dark]: UiTheme === Theme.DARK });
  return (
    <>
      <div className={cssClasses}>
       <p>Sorry, page not found 😔 </p>
      </div>
    </>
  );
};
