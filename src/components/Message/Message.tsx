import classNames from 'classnames';
import React from 'react';
import s from './Message.module.css';

export const enum MessageMode {
  none = 'none',
  info = 'info',
  error = 'error',
}
export interface IMessage {
    text: string,
    mode: MessageMode
}

export interface IMessageProps {
  message: IMessage
}

export const Message = ({ message }: IMessageProps): JSX.Element => {
  const className = classNames({
    [s.info]: message.mode === 'info',
    [s.error]: message.mode === 'error',
    [s.none]: message.mode === 'none',
  });

  return (
    <div className={className}>{message.text}</div>
  );
};
