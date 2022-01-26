import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import '../../styles/output.css';

export const Message = ({ message: { text, mode } }) => {
  const className = classNames('text-sm pl-6', {
    'text-transparent': mode === 'info' || mode === 'none',
    'text-pink-400': mode === 'error',
    // 'text-transparent': mode === 'none',
  });

  return (
    <div className='w-full px-6 pb-2 bg-slate-100 text-transparent'>
      <p className={className}>{text}</p>
    </div>
  );
};

Message.protoType = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
  }),
};
