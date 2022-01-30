import React, { ChangeEvent, KeyboardEvent } from 'react';
import s from './NewTask.module.css';

export interface INewTaskProps {
  handleKeyPress(e: KeyboardEvent<HTMLInputElement>): void;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  handleGetFocus(e: ChangeEvent<HTMLInputElement>): void;
  handleLostFocus(e: ChangeEvent<HTMLInputElement>): void;
  pendingTask: string;
}

export const NewTask = (props: INewTaskProps): JSX.Element => {
  const {
    handleKeyPress, handleChange, handleGetFocus,
    handleLostFocus, pendingTask,
  } = props;

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
      value={pendingTask}
    />
  );
};
