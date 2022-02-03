import { observer } from 'mobx-react';
import React, { ChangeEvent, FC, useContext } from 'react';
import StoreContext from '../../../store/StoreContext';
import { StateFilterNames } from '../../../store/UiStore';
import styles from './StateFilter.module.css';

const StateFilter: FC = () => {
  const { uiStore } = useContext(StoreContext);
  const handleStateFilter = (e: ChangeEvent<HTMLInputElement>): void => {
    const stateFilterValue: StateFilterNames = e.target.value as StateFilterNames;
    uiStore.setStateFilter(stateFilterValue);
  };

  const filterList: JSX.Element[] = Object.values(StateFilterNames).map((filterName) => (
    <span key={filterName}>
      <input
        type='radio'
        id={`filter-${filterName}`}
        name='show' value={filterName}
        checked={uiStore.getStateFilter === filterName}
        onChange={handleStateFilter}
      />
      <label
        htmlFor={`filter-${filterName}`}
      >{filterName}</label>
    </span>));

  return (
    <div className={styles.StateFilter}>
        {filterList}
    </div>
  );
};

export default observer(StateFilter);
