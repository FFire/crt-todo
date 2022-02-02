import { observer } from 'mobx-react';
import React, { ChangeEvent, MouseEvent, useContext } from 'react';
import StoreContext from '../../store/StoreContext';
import s from './Filter.module.css';

export interface IFilterProps {
  stateFilterNames: string[];
  stateFilter: string;
  handleStateFilter(e: ChangeEvent<HTMLInputElement>): void;
  handleDeleteCompleted(e: MouseEvent<HTMLButtonElement>): void;
}

export enum StateFilterNames {
  all = 'All',
  active= 'Active',
  completed= 'Completed',
}

const Filter = (props: IFilterProps): JSX.Element => {
  const {
    stateFilterNames, stateFilter, handleStateFilter, handleDeleteCompleted,
  } = props;

  const { uiStore } = useContext(StoreContext);

  const onChangeTextFilter = (e: ChangeEvent<HTMLInputElement>):void => {
    const { value } = e.target;
    uiStore.setTextFilterContent(value);
  };

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
          value={uiStore.textFilterContent}
          onChange={onChangeTextFilter}
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

export default observer(Filter);
