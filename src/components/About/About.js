import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { theme, ThemeContext } from '../../cotext/themeContext';
import s from './About.module.css';

export const About = () => {
  const UiTheme = useContext(ThemeContext);
  const cssClasses = classNames(s.spinner, { [s.dark]: UiTheme === theme.DARK });
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

About.protoTypes = {
  UiTheme: PropTypes.string.isRequired,
};
