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

const NewTask = (props: INewTaskProps): JSX.Element => {
  const {
    handleKeyPress, handleGetFocus,
    handleLostFocus,
  } = props;
  const { uiStore } = useContext(StoreContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    uiStore.setPendingTaskContent(value);
    // validate(newTask);
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
      value={uiStore.pendingTaskContent}
    />
  );
};
export default observer(NewTask);
