import { observer } from 'mobx-react';
import React, { ChangeEvent, KeyboardEvent, useContext } from 'react';
import { ReactComponent as PlusSign } from '../../assets/plus.svg';
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const error = tasksStore.getValidateErrors(value);
    uiStore.setErrorMessage(error);
    uiStore.setPendingTaskContent(value);
  };
  const handleGetFocus = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const error = tasksStore.getValidateErrors(value);
    uiStore.setErrorMessage(error);
  };
  const handleLostFocus = (e: ChangeEvent<HTMLInputElement>): void => {
    uiStore.setErrorMessage('');
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    const { value: newTaskText } = e.target as HTMLInputElement;

    if ((e.code === 'Enter') && !tasksStore.getValidateErrors(newTaskText)) {
      // todo заменить на uuid
      const id = Math.max(...tasksStore.getTasks.map((task) => task.id)) + 1;
      const isDone = false;
      const newTask = { id, text: newTaskText, isDone };

      tasksStore.addTasks([newTask]);
      uiStore.setErrorMessage('');
      uiStore.setPendingTaskContent('');
    }
  };

  return (
    <>
      <div className='w-full px-6 bg-slate-100 pt-6 pb-1'>
        <div className='flex group items-center bg-white rounded-full
            hover:ring-2 hover:ring-emerald-700/50 focus-within:ring-2 ring-emerald-700/50'>
          <div className='flex-auto bg-transparent'>
            <input
              type='input'
              className='px-4 w-full duration-500 bg-transparent text-gray-400 placeholder-gray-200 rounded-full focus:outline-none
                text-xl h-8
                md:text-2xl md:h-12'
              autoFocus
              autoComplete='off'
              placeholder='Add some tasks'
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onFocus={handleGetFocus}
              onBlur={handleLostFocus}
              value={uiStore.getPendingTaskContent}
            />
          </div>
          <button
            type='button'
            className='flex items-center justify-center  bg-transparent hover:bg-slate-300 hover:scale-110 text-gray-500 rounded-full
              h-6 w-6 mr-1
              md:h-12 md:w-12 md:mr-0'>
            <PlusSign
              className='w-8 h-8 fill-transparent group-focus-within:fill-emerald-700/70 group-hover:fill-emerald-700/70'
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default observer(NewTask);
