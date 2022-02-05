import { observer } from 'mobx-react';
import React, { ChangeEvent, KeyboardEvent, useContext } from 'react';
import StoreContext from '../../store/StoreContext';
import s from './NewTask.module.css';

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
    <input
      className={s.newTodo}
      name='newTask'
      autoFocus
      autoComplete='off'
      placeholder='Add some tasks'
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      onFocus={handleGetFocus}
      onBlur={handleLostFocus}
      value={uiStore.getPendingTaskContent}
    />
  );
};

export default observer(NewTask);
