import PropTypes from 'prop-types';
import React from 'react';
import { theme } from '../App/themeContext';

export class ThemeToggle extends React.Component {
  render() {
    const { uiTheme, handleThemeToggle } = this.props;

    return (
      <>
        <input
          type='checkbox'
          id='ThemeToggle'
          defaultChecked={uiTheme === theme.DARK}
          onChange={handleThemeToggle}
        />
        <label htmlFor='ThemeToggle'>Dark mode</label>
      </>
    );
  }
}

ThemeToggle.propTypes = {
  handleThemeToggle: PropTypes.func.isRequired,
  UiTheme: PropTypes.string.isRequired,
};
