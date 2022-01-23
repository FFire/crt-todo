import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import s from './Message.module.css';
import { messageMode } from './messageMode';

export const Message = ({ message: { text, mode } }) => {
  const className = classNames({
    [s.info]: mode === messageMode.INFO,
    [s.error]: mode === messageMode.ERROR,
    [s.none]: mode === messageMode.NONE,
  });

  return (
    <div className={className}>{text}</div>
  );
};

Message.protoType = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
  }),
};
