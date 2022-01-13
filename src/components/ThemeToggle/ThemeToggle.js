// import classNames from 'classnames';
import React from 'react';
import { themes } from '../App/themeContext';

export class ThemeToggle extends React.Component {
  render() {
    const { uiTheme, handleThemeToggle } = this.props;
    return (
      <>
        <input
          type='checkbox'
          id='ThemeToggle'
          defaultChecked={uiTheme === themes.dark}
          onChange={handleThemeToggle}
        />
        <label htmlFor='ThemeToggle'>Dark mode</label>
      </>
    );
  }
}
