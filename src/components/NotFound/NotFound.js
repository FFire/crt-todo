import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { theme, ThemeContext } from '../../cotext/themeContext';
import s from './NotFound.module.css';

export const NotFound = () => {
  const UiTheme = useContext(ThemeContext);
  const cssClasses = classNames(s.spinner, { [s.dark]: UiTheme === theme.DARK });
  return (
    <>
      <div className={cssClasses}>
       <p>Sorry, page not found 😔 </p>
      </div>
    </>
  );
};

NotFound.protoTypes = {
  UiTheme: PropTypes.string.isRequired,
};
