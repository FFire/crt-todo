import { observer } from 'mobx-react';
import React, { ChangeEvent, FC, useContext } from 'react';
import StoreContext from '../../../store/StoreContext';
import { ITask } from '../../../store/TasksStore';
import { StateFilterNames } from '../../../store/UiStore';
import styles from './StateFilter.module.css';

const makeStateFilterFn = (stateFilterValue: StateFilterNames): ((task: ITask) => boolean) => {
  switch (stateFilterValue) {
    case StateFilterNames.all:
      return (task: ITask):boolean => true;
    case StateFilterNames.active:
      return (task: ITask):boolean => !task.isDone;
    case StateFilterNames.completed:
      return (task: ITask):boolean => task.isDone;
    default:
      return (task: ITask):boolean => true;
  }
};

const StateFilter: FC = () => {
  const { uiStore, tasksStore } = useContext(StoreContext);
  const handleStateFilter = (e: ChangeEvent<HTMLInputElement>): void => {
    const stateFilterValue: StateFilterNames = e.target.value as StateFilterNames;
    const type = 'state';
    const fn = makeStateFilterFn(stateFilterValue);
    tasksStore.setFilter({ type, fn });
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
