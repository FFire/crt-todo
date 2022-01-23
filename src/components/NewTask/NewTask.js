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
      <div className="w-full px-6 bg-slate-100 pt-6 pb-1">
        <div className="flex group items-center bg-white rounded-full hover:ring-2 hover:ring-emerald-700/50 focus-within:ring-2 ring-emerald-700/50">
          <div className="flex-auto bg-transparent">
            <input type="input"
                   className="px-4 w-full text-2xl h-12 bg-transparent text-gray-400 placeholder-gray-200 rounded-full focus:outline-none"
                   autoFocus='autofocus'
                   autoComplete='off'
                   placeholder="Add some tasks"
                   onKeyPress={handleKeyPress}
                   onChange={handleChange}
                   onFocus={handleGetFocus}
                   onBlur={handleLostFocus}
                   value={pendingTask}
            />
          </div>
          <div className=''>
            <button type="button"
                    className="flex items-center justify-center w-12 h-12 bg-transparent hover:bg-slate-300 hover:scale-110 text-gray-500 rounded-full">
              <PlusSign className="w-8 h-8 fill-transparent group-focus-within:fill-emerald-700/70 group-hover:fill-emerald-700/70"/>
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
