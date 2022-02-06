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
        name='text'
        className='px-4 text-sm h-8 text-gray-600 placeholder-gray-300 rounded-full
        hover:ring-2 hover:ring-slate-400 focus:outline-slate-400'
        value={uiStore.getTextFilterContent}
        onChange={onChangeTextFilter}
        autoComplete='off'
        placeholder='Filter tasks'
      />
    </form>
  );
};

export default observer(TextFilter);
