import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as PlusSign } from '../../assets/plus.svg';
import '../../styles/output.css';

export const NewTask = (props) => {
  const {
    handleKeyPress, handleChange, handleGetFocus,
    handleLostFocus, pendingTask,
  } = props;

  return (
    <>
      <div className='w-full px-6 bg-slate-100 pt-6 pb-1'>
        <div className='flex group items-center bg-white rounded-full hover:ring-2 hover:ring-emerald-700/50 focus-within:ring-2 ring-emerald-700/50'>
          <div className='flex-auto bg-transparent'>
            <input type='input'
              className='px-4 w-full duration-500 bg-transparent text-gray-400 placeholder-gray-200 rounded-full focus:outline-none
                text-xl h-8
                md:text-2xl md:h-12'
              autoFocus='autofocus'
              autoComplete='off'
              placeholder='Add some tasks'
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onFocus={handleGetFocus}
              onBlur={handleLostFocus}
              value={pendingTask}
            />
          </div>
          <div className=''>
            <button type='button'
              className='flex items-center justify-center  bg-transparent hover:bg-slate-300 hover:scale-110 text-gray-500 rounded-full
                h-6 w-6 mr-1
                md:h-12 md:w-12 md:mr-0'
            >
              <PlusSign className='w-8 h-8 fill-transparent group-focus-within:fill-emerald-700/70 group-hover:fill-emerald-700/70' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

NewTask.protoType = {
  handleKeyPress: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleGetFocus: PropTypes.func.isRequired,
  handleLostFocus: PropTypes.func.isRequired,
  pendingTask: PropTypes.string.isRequired,
};
