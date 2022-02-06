import { observer } from 'mobx-react';
import React, {
  ChangeEvent, MouseEvent, useContext,
} from 'react';
import { ReactComponent as TrashCan } from '../../../assets/trashcan.svg';
import StoreContext from '../../../store/StoreContext';
import { ITask } from '../../../store/TasksStore';

export interface ITaskItemProps { task: ITask }

const TaskItem = (props: ITaskItemProps): JSX.Element => {
  const { tasksStore, uiStore } = useContext(StoreContext);

  const { task: { id, text, isDone } } = props;

  const handleToggle = (e: ChangeEvent<HTMLInputElement>): void => {
    const targetId: number = parseInt(e.target.id, 10);
    const { checked } = e.target;
    tasksStore.setIsDone(targetId, checked);
  };

  const handleDeleteById = (e: MouseEvent<HTMLButtonElement>): void => {
    const targetId: number = parseInt((e.target as HTMLInputElement).id, 10);

    tasksStore.deleteById(targetId);
    uiStore.setPendingTaskContent('');
  };

  return (
    <li className='flex items-center pl-3 pr-2 group bg-slate-100 rounded-lg
     hover:bg-gradient-to-l hover:from-violet-700/10 hover:to-emerald-700/10'>
      <input
        type='checkbox'
        className='flex-none accent-slate-600 hover:scale-110 hover:accent-slate-500 hover:shadow duration-500
        h-4 w-4 mx-1 my-2
        sm:h-6 sm:w-6
        md:h-8 md:w-8 md:mx-1 md:my-3'
        id={id.toString()}
        defaultChecked={isDone}
        onChange={handleToggle}
      />

      <p
        className='grow w-full my-4 ml-3 text-slate-500 duration-500
        text-sm
        md:text-lg'
      >{text}</p>

      <button
        id={id.toString()}
        type='button'
        className='w-10 h-10 flex items-center justify-center  rounded-full aspect-square bg-transparent hover:bg-emerald-700/10 hover:shadow'
        onClick={handleDeleteById}
      >

        <TrashCan
          id={id.toString()}
          className='w-6 h-6 pointer-events-none fill-transparent group-hover:fill-violet-900/20'
        />
      </button>
    </li>
  );
};

export default observer(TaskItem);
