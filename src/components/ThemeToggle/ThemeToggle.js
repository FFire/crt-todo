// import classNames from 'classnames';
import React from 'react';

export class ThemeToggle extends React.Component {
  render() {
    const { theme } = this.props;
    // const className = classNames({
    //   [s.info]: mode === 'info',
    //   [s.error]: mode === 'error',
    //   [s.none]: mode === 'none',
    // });
    return (
      <>
        <input
          type='checkbox'
          id='ThemeToggle'
          defaultChecked={theme === 'dark'}
          onChange={this.props.handleThemeToggle}
        // className={s.toggle}
        />
        <label htmlFor='ThemeToggle'>Dark mode</label>
      </>
    );
  }
}
