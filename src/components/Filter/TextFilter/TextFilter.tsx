import { observer } from 'mobx-react';
import React, { ChangeEvent, FC, useContext } from 'react';
import StoreContext from '../../../store/StoreContext';
import { ITask } from '../../../store/TasksStore';

const TextFilter: FC = () => {
  const { uiStore, tasksStore } = useContext(StoreContext);
  const onChangeTextFilter = (e: ChangeEvent<HTMLInputElement>):void => {
    const { value } = e.target;
    const type = 'text';
    const fn = (value.length > 0)
      ? (task: ITask):boolean => task.text.toLowerCase().includes(value.toLowerCase())
      : ():boolean => true;

    tasksStore.setFilter({ type, fn });
    uiStore.setTextFilterContent(value);
  };

  return (
    <form>
      <input
        className='px-4 text-sm h-8 rounded-full duration-500
        hover:ring-2 hover:ring-slate-400 focus:outline-slate-400
        text-gray-600 placeholder-gray-300
        dark:text-gray-300 dark:placeholder-gray-400 dark:bg-gray-500 dark:focus:outline-slate-100
        '
        name='text'
        value={uiStore.getTextFilterContent}
        onChange={onChangeTextFilter}
        autoComplete='off'
        placeholder='Filter tasks'
      />
    </form>
  );
};

export default observer(TextFilter);
