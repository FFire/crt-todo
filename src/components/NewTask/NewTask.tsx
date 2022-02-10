import { observer } from 'mobx-react';
import React, {
  ChangeEvent, FormEvent, KeyboardEvent, useContext, useState,
} from 'react';
import { Plus } from '../../assets/assets';
import StoreContext from '../../store/StoreContext';

export interface INewTaskProps {
  handleKeyPress(e: KeyboardEvent<HTMLInputElement>): void;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  handleGetFocus(e: ChangeEvent<HTMLInputElement>): void;
  handleLostFocus(e: ChangeEvent<HTMLInputElement>): void;
  pendingTask: string;
}

const NewTask = (): JSX.Element => {
  const { uiStore, tasksStore } = useContext(StoreContext);
  const [newTaskText, setNewTaskText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const error = tasksStore.getValidateErrors(value);
    uiStore.setErrorMessage(error);
    setNewTaskText(value);
  };

  const handleGetFocus = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const error = tasksStore.getValidateErrors(value);
    uiStore.setErrorMessage(error);
  };
  const handleLostFocus = (e: ChangeEvent<HTMLInputElement>): void => {
    uiStore.setErrorMessage('');
  };

  const addTask = (text:string):void => {
    // todo заменить на uuid
    const id = Math.max(...tasksStore.getTasks.map((task) => task.id)) + 1;
    const isDone = false;
    const newTask = { id, text, isDone };

    tasksStore.addTasks([newTask]);
    uiStore.setErrorMessage('');
    setNewTaskText('');
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if ((e.code === 'Enter') && !tasksStore.getValidateErrors(newTaskText)) {
      addTask(newTaskText);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    const error = tasksStore.getValidateErrors(newTaskText);
    uiStore.setErrorMessage(error);
    if (!tasksStore.getValidateErrors(newTaskText)) {
      addTask(newTaskText);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full px-6 pt-6 pb-1 bg-slate-100 dark:bg-slate-700 duration-500'>
        <div className='flex group items-center rounded-full duration-500
          bg-white
          dark:bg-gray-500 dark:hover:ring-emerald-900 dark:ring-emerald-900
          hover:ring-2 hover:ring-emerald-700/50 focus-within:ring-2 ring-emerald-700/50'>
          <div className='flex-auto bg-transparent'>
            <input
              type='input'
              className='px-4 w-full duration-500 bg-transparent rounded-full focus:outline-none
                text-xl h-8
                md:text-2xl md:h-12
                text-gray-400 placeholder-gray-200
                dark:text-gray-300 dark:placeholder-gray-400'
              autoFocus
              autoComplete='off'
              placeholder='Add some tasks'
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onFocus={handleGetFocus}
              onBlur={handleLostFocus}
              value={newTaskText}
            />
          </div>

          <button
            type='submit'
            className='flex items-center justify-center  bg-transparent rounded-full duration-500
              hover:bg-slate-300 hover:scale-110
              dark:hover:bg-slate-800
              h-6 w-6 mr-1
              md:h-12 md:w-12 md:mr-0'>
            <Plus
              className='w-8 h-8 fill-transparent duration-500
                group-focus-within:fill-emerald-700/70 group-hover:fill-emerald-700/70
                dark:group-focus-within:fill-emerald-700 dark:group-hover:fill-emerald-700'
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default observer(NewTask);
