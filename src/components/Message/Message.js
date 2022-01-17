import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import s from './Message.module.css';

export class Message extends React.Component {
  render() {
    const { message: { text, mode } } = this.props;
    const className = classNames({
      [s.info]: mode === 'info',
      [s.error]: mode === 'error',
      [s.none]: mode === 'none',
    });
    return (
      <div className={className}>{text}</div>
    );
  }
}

Message.protoType = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
  }),
};
