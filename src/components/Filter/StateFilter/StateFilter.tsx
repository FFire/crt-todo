import { observer } from 'mobx-react';
import React, { ChangeEvent, FC, useContext } from 'react';
import StoreContext from '../../../store/StoreContext';
import { ITask } from '../../../store/TasksStore';
import { StateFilterNames } from '../../../store/UiStore';

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
    <div
      className='
      border first-of-type:rounded-l-md last-of-type:rounded-r-md duration-500
      border-slate-600
      dark:border-slate-400
      '
      key={filterName}
    >
      <input
        className='peer'
        type='radio'
        id={`filter-${filterName}`}
        name={filterName}
        value={filterName}
        checked={uiStore.getStateFilter === filterName}
        onChange={handleStateFilter}
        hidden
      />
      <label
        htmlFor={`filter-${filterName}`}
        className='
        block text-center cursor-pointer select-none duration-500
        px-1 py-1
        sm:px-5
        peer-checked:bg-slate-300
        dark:text-slate-300 dark:peer-checked:bg-slate-500
        '
      >{filterName}</label>
    </div>));

  return (
    <div className='flex items-center'>
      {filterList}
    </div>
  );
};

export default observer(StateFilter);
