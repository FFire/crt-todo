import React, { ChangeEvent, MouseEvent } from 'react';
import { Spinner } from '../components';
import { ITask, TaskItem } from './TaskItem/TaskItem';
import s from './TaskList.module.css';

export interface ITaskListProps {
  isLoading: boolean;
  tasks: ITask[];
  handleToggle(e: ChangeEvent<HTMLInputElement>): void;
  handleDeleteById(e: MouseEvent<HTMLInputElement>): void;
}

export const TaskList = (props: ITaskListProps): JSX.Element => {
  const {
    tasks, handleToggle, handleDeleteById, isLoading,
  } = props;
  const tasksList = tasks.map((task): JSX.Element => (
    <TaskItem
      key={task.id}
      task={task}
      handleToggle={handleToggle}
      handleDeleteById={handleDeleteById}
    />
  ));

  return (isLoading)
    ? <Spinner/>
    : <section className={s.main}>
      <ul className={s.list}>{tasksList}</ul>
    </section>;
};
