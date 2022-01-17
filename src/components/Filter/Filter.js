import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './Filter.module.css';

export class Filter extends Component {
  render() {
    const {
      stateFilterNames, stateFilter, textFilter, handleStateFilter, handleTextFilter, handleDeleteCompleted,
    } = this.props;
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
        <form >
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
        >Delete completed</button>
      </div>
    );
  }
}

Filter.propTypes = {
  textFilter: PropTypes.string.isRequired,
  stateFilterNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  stateFilter: PropTypes.string.isRequired,
  handleStateFilter: PropTypes.func.isRequired,
  handleTextFilter: PropTypes.func.isRequired,
  handleDeleteCompleted: PropTypes.func.isRequired,
};
