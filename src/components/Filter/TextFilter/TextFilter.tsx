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
        value={uiStore.getTextFilterContent}
        onChange={onChangeTextFilter}
        autoComplete='off'
        placeholder='Filter tasks'
      />
    </form>
  );
};

export default observer(TextFilter);
