import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as TrashCan } from '../../assets/trashcan.svg';

export const Filter = (props) => {
  const {
    stateFilterNames, stateFilter, textFilter, handleStateFilter,
    handleTextFilter, handleDeleteCompleted,
  } = props;

  const filterList = stateFilterNames.map((filterName) => (

    <div key={filterName} className='border border-slate-500
    first-of-type:rounded-l-md last-of-type:rounded-r-md'>
      <input
        type="radio"
        name={filterName}
        id={`filter-${filterName}`}
        className="peer"
        checked={stateFilter === filterName}
        onChange={handleStateFilter}
        hidden
      />
      <label htmlFor={`filter-${filterName}`}
        className="block text-center cursor-pointer select-none peer-checked:bg-slate-300 duration-500
        px-1 py-1
        sm:px-5
      ">{filterName}</label>
    </div>

  ));

  return (
    <div className="w-full pl-6 py-1 bg-slate-100 items-center justify-between text-sm font-light duration-500
    block
    sm:flex
    ">
      <form>
        <input
          name='text'
          className='px-4 text-sm h-8 text-gray-600 placeholder-gray-300 rounded-full
          hover:ring-2 hover:ring-slate-400 focus:outline-slate-400'
          value={textFilter}
          onChange={handleTextFilter}
          autoComplete='off'
          placeholder='Filter tasks'
        />
      </form>

        <div className='flex items-center mt-3 sm:mt-0'>
          <div className="flex items-center ">
            {filterList}
          </div>
          <button
            type='button'
            id='deleteCompleted'
            className='flex group items-center justify-center w-10 h-10 mr-5 rounded-full aspect-square bg-transparent  hover:bg-emerald-700/10 hover:shadow'
            onClick={handleDeleteCompleted}
          >
          <TrashCan
            className="w-6 h-6 fill-slate-300 group-hover:fill-red-400"
            onClick={handleDeleteCompleted}
          />
                </button>
        </div>
    </div>
  );
};

Filter.propTypes = {
  textFilter: PropTypes.string.isRequired,
  stateFilterNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  stateFilter: PropTypes.string.isRequired,
  handleStateFilter: PropTypes.func.isRequired,
  handleTextFilter: PropTypes.func.isRequired,
  handleDeleteCompleted: PropTypes.func.isRequired,
};
