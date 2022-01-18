import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { theme, ThemeContext } from '../App/themeContext';
import s from './Spinner.module.css';

export const Spinner = () => {
  const UiTheme = useContext(ThemeContext);
  const cssClasses = classNames(s.spinner, { [s.dark]: UiTheme === theme.DARK });
  return (
    <p className={cssClasses}>
      Data is loading...
    </p>
  );
};

Spinner.protoTypes = {
  UiTheme: PropTypes.string.isRequired,
};
