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
    <li className='flex items-center pl-3 pr-2 group  rounded-lg duration-500
     hover:bg-gradient-to-l hover:from-violet-700/10 hover:to-emerald-700/10 bg-slate-100
     dark:hover:from-violet-900/20 dark:hover:to-emerald-900/60 dark:bg-slate-700
     '>
      <input
        className='flex-none hover:shadow hover:scale-110 duration-500
        accent-slate-600 hover:accent-slate-500
        dark:accent-slate-400 dark:hover:accent-slate-400
        h-4 w-4 mx-1 my-2
        sm:h-6 sm:w-6
        md:h-8 md:w-8 md:mx-1 md:my-3'
        type='checkbox'
        id={id.toString()}
        defaultChecked={isDone}
        onChange={handleToggle}
      />

      <p
        className='grow w-full my-4 ml-3 duration-500
        text-slate-500 dark:text-slate-300
        text-sm
        md:text-lg'
      >{text}</p>

      <button
        className='w-10 h-10 flex items-center justify-center rounded-full aspect-square bg-transparent hover:shadow duration-500
        hover:bg-emerald-700/10 dark:hover:bg-slate-600'
        id={id.toString()}
        type='button'
        onClick={handleDeleteById}
      >

        <TrashCan
          className='w-6 h-6 pointer-events-none fill-transparent
          group-hover:fill-violet-900/20 dark:group-hover:fill-slate-500'
          id={id.toString()}
        />
      </button>
    </li>
  );
};

export default observer(TaskItem);
