import classNames from 'classnames';
import React, { useContext } from 'react';
import { Theme, ThemeContext } from '../../cotext/themeContext';
import s from './About.module.css';

export const About = (): JSX.Element => {
  const UiTheme: Theme = useContext(ThemeContext);
  const cssClasses: string = classNames(s.spinner, { [s.dark]: UiTheme === Theme.DARK });
  return (
    <>
      <div className={cssClasses}>
       <p>My name is...</p>
       <p>My github is...</p>
       <p>My telegram is...</p>
      </div>
    </>
  );
};
