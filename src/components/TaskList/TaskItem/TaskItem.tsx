import classNames from 'classnames';
import React, { ChangeEvent, MouseEvent, useContext } from 'react';
import { Theme, ThemeContext } from '../../../cotext/themeContext';
import { ITask } from '../../../store/TasksStore';
import s from './TaskItem.module.css';

export interface ITaskItemProps {
  handleDeleteById(e: MouseEvent<HTMLInputElement>): void;
  handleToggle(e: ChangeEvent<HTMLInputElement>): void;
  task: ITask;
}

export const TaskItem = (props: ITaskItemProps): JSX.Element => {
  const { handleDeleteById, handleToggle, task: { id, text, isDone } } = props;
  const UiTheme: Theme = useContext(ThemeContext);
  const itemClass: string = classNames(s.item, { [s.dark]: UiTheme === Theme.DARK, [s.done]: isDone });

  return (
    <li>
      <input
        type='checkbox'
        id={id.toString()}
        defaultChecked={isDone}
        onChange={handleToggle}
        className={s.toggle}
      />

      <span
        className={itemClass}
      >{text}</span>

      <input
        type='button'
        id={id.toString()}
        value='×'
        className={s.destroy}
        onClick={handleDeleteById}
      />
    </li>
  );
};
