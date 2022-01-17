import classNames from 'classnames';
import React from 'react';
import '../../styles/output.css';
import { theme, ThemeContext } from '../App/themeContext';
import s from './Spinner.module.css';

export class Spinner extends React.Component {
  static contextType = ThemeContext;

  render() {
    const UiTheme = this.context;
    const cssClasses = classNames(s.spinner, { [s.dark]: UiTheme === theme.DARK });
    return (
      <div className='pb-10 flex items-center justify-center space-x-3'>
       <div className="p-2 w-32 h-32 border-t-4 border-l-4 border-fuchsia-800 rounded-full animate-spin"></div>

        <p className='p-3 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l
         from-emerald-700 to-fuchsia-700 animate-pulse'>
          Data is loading...
        </p>
      </div>
    );
  }
}
