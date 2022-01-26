import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ReactComponent as TrashCan } from '../../../assets/trashcan.svg';
import { ThemeContext } from '../../../cotext/themeContext';

export const TaskItem = (props) => {
  const { handleDeleteById, handleToggle, task: { id, text, isDone } } = props;
  const UiTheme = useContext(ThemeContext);

  return (
    <li className='flex items-center pl-3 pr-2 group bg-slate-100 rounded-lg
     hover:bg-gradient-to-l hover:from-violet-700/10 hover:to-emerald-700/10'>
      <input
        type='checkbox'
        className='flex-none accent-slate-600 hover:scale-110 hover:accent-slate-500 hover:shadow duration-500
        h-4 w-4 mx-1 my-2
        sm:h-6 sm:w-6
        md:h-8 md:w-8 md:mx-1 md:my-3'
        id={id}
        defaultChecked={isDone}
        onChange={handleToggle}
      />

      <p
        className='grow w-full my-4 ml-3 text-slate-500 duration-500
        text-sm
        md:text-lg'
      >{text}</p>

      <button
        type='button'
        id={id}
        className='flex items-center justify-center  rounded-full aspect-square bg-transparent hover:bg-emerald-700/10 hover:shadow
        w-10 h-10'
        onClick={handleDeleteById}
      >

        <TrashCan
          id={id}
          className='fill-transparent group-hover:fill-violet-900/20
          w-6 h-6'
          onClick={handleDeleteById}
        />
      </button>
    </li>
  );
};

TaskItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  isDone: PropTypes.bool,
  handleDeleteById: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  UiTheme: PropTypes.string,
};
