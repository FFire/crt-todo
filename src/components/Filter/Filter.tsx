import React, { ChangeEvent, MouseEvent } from 'react';
import s from './Filter.module.css';

export interface IFilterProps {
  stateFilterNames: string[];
  stateFilter: string;
  textFilter: string;
  handleStateFilter(e: ChangeEvent<HTMLInputElement>): void;
  handleTextFilter(e: ChangeEvent<HTMLInputElement>): void;
  handleDeleteCompleted(e: MouseEvent<HTMLButtonElement>): void;
}
export enum StateFilterNames {
  all = 'All',
  active= 'Active',
  completed= 'Completed',
}

export const Filter = (props: IFilterProps): JSX.Element => {
  const {
    stateFilterNames, stateFilter, textFilter, handleStateFilter,
    handleTextFilter, handleDeleteCompleted,
  } = props;
  const filterList = stateFilterNames.map((filterName):JSX.Element => (
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
    </div>
  );
};
