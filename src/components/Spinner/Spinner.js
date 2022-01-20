import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { theme, ThemeContext } from '../../cotext/themeContext';
import '../../styles/output.css';
import s from './Spinner.module.css';

export const Spinner = () => {
  const UiTheme = useContext(ThemeContext);
  const cssClasses = classNames(s.spinner, { [s.dark]: UiTheme === theme.DARK });
  return (
    <div className='pb-10 mt-14 flex items-center justify-center space-x-3'>
      <div className="p-2 w-24 h-24 border-t-4 border-l-4 border-fuchsia-800 rounded-full animate-spin"></div>

      <p className='p-3 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l
         from-emerald-700 to-fuchsia-700 animate-pulse'>
        Data is loading...
      </p>
    </div>
  );
};

Spinner.protoTypes = {
  UiTheme: PropTypes.string.isRequired,
};
