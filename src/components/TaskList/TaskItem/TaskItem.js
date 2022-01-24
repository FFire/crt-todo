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
        className='flex-none h-8 w-8 mx-1 my-3 accent-slate-600 hover:scale-110
        hover:accent-slate-500 hover:shadow'
        id={id}
        defaultChecked={isDone}
        onChange={handleToggle}
      />

      <p
        className='grow w-full text-lg  text-slate-500 my-3 ml-3'
      >{text}</p>

      <button
        type='button'
        id={id}
        className='flex items-center justify-center w-10 h-10 rounded-full aspect-square bg-transparent
      hover:bg-emerald-700/10 hover:shadow'
        onClick={handleDeleteById}
      >

        <TrashCan
          id={id}
          className="w-6 h-6 fill-transparent group-hover:fill-violet-900/20"
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
