import PropTypes from 'prop-types';
import React from 'react';
import s from './Filter.module.css';

export const Filter = (props) => {
  const {
    stateFilterNames, stateFilter, textFilter, handleStateFilter,
    handleTextFilter, handleDeleteCompleted,
  } = props;
  const filterList = stateFilterNames.map((filterName) => (
    <span key={filterName}>
      <input type='radio' id={`filter-${filterName}`}
        name='show' value={filterName}
        checked={stateFilter === filterName}
        onChange={handleStateFilter}
      />
      <label htmlFor={`filter-${filterName}`}>{filterName}</label>
    </span>));

  return (
    <div className={s.filter}>
      <form>
        <input
          name='text'
          value={textFilter}
          onChange={handleTextFilter}
          autoComplete='off'
          placeholder='Filter tasks'
        />

        {filterList}
      </form>

      <button
        type='button'
        className={s.button}
        onClick={handleDeleteCompleted}
      >Delete completed
      </button>
      <div class="flex bg-slate-100 text-sm font-light rounded-sm w-full">
        <div>
          <input type="radio" name="option" id="1" className="peer" checked hidden />
          <label for="1"
            className="block text-center border border-slate-700 rounded-l-md px-5 py-1 cursor-pointer select-none
                peer-checked:bg-slate-300">All</label>
        </div>

        <div>
          <input type="radio" name="option" id="2" className="peer" hidden />
          <label for="2"
            className="block text-center  border border-slate-700 px-5 py-1 cursor-pointer select-none
            peer-checked:bg-slate-300">Active</label>
        </div>

        <div>
          <input type="radio" name="option" id="3" className="peer" hidden />
          <label for="3"
            className="block text-center  border border-slate-700 rounded-r-md px-5 py-1 cursor-pointer select-none
            peer-checked:bg-slate-300">Completed</label>
        </div>

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
