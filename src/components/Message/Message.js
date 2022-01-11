import classNames from 'classnames';
import React from 'react';
import s from './Message.module.css';

export class Message extends React.Component {

  render() {
    const { message: { text, mode } } = this.props;
    const className = classNames({
      [s.info]: mode === 'info',
      [s.error]: mode === 'error',
      [s.none]: mode === 'none'
    });
    return (
      <div className={className}>{text}</div>
    );
  }
}
