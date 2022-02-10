import { observer } from 'mobx-react';
import React, {
  ChangeEvent, FormEvent, KeyboardEvent, MouseEvent, useContext, useState,
} from 'react';
import {
  Cancel, Edit, TrashCan, OK,
} from '../../../assets/assets';
import StoreContext from '../../../store/StoreContext';
import { ITask } from '../../../store/TasksStore';

export interface ITaskItemProps {
  task: ITask;
}

const TaskItem = (props: ITaskItemProps): JSX.Element => {
  const {
    task: { id, text, isDone },
  } = props;
  const { tasksStore } = useContext(StoreContext);
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(text);

  const handleToggle = (e: ChangeEvent<HTMLInputElement>): void => {
    const targetId: number = parseInt(e.target.id, 10);
    const { checked } = e.target;
    tasksStore.setIsDone(targetId, checked);
  };

  const handleDeleteById = (e: MouseEvent<HTMLButtonElement>): void => {
    const targetId: number = parseInt((e.target as HTMLInputElement).id, 10);

    tasksStore.deleteById(targetId);
  };

  const handleEditMode = (e: MouseEvent<HTMLButtonElement>): void => {
    setEditMode(!editMode);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.code === 'Enter' && !tasksStore.getValidateErrors(editedTask)) {
      tasksStore.updateTask({ id, text: editedTask, isDone });
      setEditMode(false);
    }
  };

  const handleEditText = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const newText = e.target.value;
    setEditedTask(newText);
  };

  const handleCancel = (e: MouseEvent<HTMLButtonElement>): void => {
    setEditedTask(text);
    setEditMode(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    tasksStore.updateTask({ id, text: editedTask, isDone });
    setEditMode(false);
  };

  const showInput = (): JSX.Element => (
    <form
      className='flex w-full items-center pl-3 pr-2 group  rounded-lg duration-500'
      onSubmit={handleSubmit}
    >
      <textarea
        className='grow px-4 my-4 mr-4 w-full  rounded-lg duration-500
        hover:ring-2 hover:ring-slate-400 focus:outline-slate-400
        text-sm md:text-lg
        text-gray-600 placeholder-gray-300
        dark:text-gray-50 dark:placeholder-gray-400 dark:bg-gray-400 dark:focus:outline-slate-100'
        name='editText'
        autoFocus
        value={editedTask}
        autoComplete='off'
        placeholder='Filter tasks'
        onChange={handleEditText}
        onKeyPress={handleKeyPress}
      />

      <button
      className='w-10 h-10 flex items-center justify-center rounded-full aspect-square bg-transparent hover:shadow duration-500
      hover:bg-emerald-700/10 dark:hover:bg-slate-600'
      id={id.toString()}
      type='reset'
      onClick={handleCancel}>
        <Cancel
          className='w-4 h-4 pointer-events-none fill-transparent
          group-hover:fill-red-500/30 dark:group-hover:fill-red-500/40'
        />
      </button>

      <button
      className='w-10 h-10 flex items-center justify-center rounded-full aspect-square bg-transparent hover:shadow duration-500
      hover:bg-emerald-700/10 dark:hover:bg-slate-600'
      id={id.toString()}
      type='submit'>
        <OK
          className='w-6 h-6 pointer-events-none fill-transparent
          group-hover:fill-green-500/50 dark:group-hover:fill-green-500/40'
        />
      </button>
    </form>
  );

  const showText = (): JSX.Element => (
    <p
      className='grow w-full my-4 ml-3 duration-500
      text-slate-500 dark:text-slate-300
      text-sm md:text-lg'>
      {text}
    </p>
  );

  return (
    <li
      className='flex items-center pl-3 pr-2 group  rounded-lg duration-500
      hover:bg-gradient-to-l hover:from-violet-700/10 hover:to-emerald-700/10 bg-slate-100
      dark:hover:from-violet-900/20 dark:hover:to-emerald-900/60 dark:bg-slate-700'>
      {editMode || (
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
      )}

      {editMode ? showInput() : showText()}

      {editMode || (
        <button
          className='w-10 h-10 flex items-center justify-center rounded-full aspect-square bg-transparent hover:shadow duration-500
        hover:bg-emerald-700/10 dark:hover:bg-slate-600'
          id={id.toString()}
          type='button'
          onClick={handleDeleteById}>
          <TrashCan
            className='w-6 h-6 pointer-events-none fill-transparent
          group-hover:fill-violet-900/20 dark:group-hover:fill-slate-500'
          />
        </button>
      )}

      {editMode || (<button
        className='w-10 h-10 flex items-center justify-center rounded-full aspect-square bg-transparent hover:shadow duration-500
        hover:bg-emerald-700/10 dark:hover:bg-slate-600'
        id={id.toString()}
        type='button'
        onClick={handleEditMode}>
        <Edit
          className='w-6 h-6 pointer-events-none fill-transparent
          group-hover:fill-violet-900/20 dark:group-hover:fill-slate-500'
        />
      </button>)}
    </li>
  );
};

export default observer(TaskItem);
