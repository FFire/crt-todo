import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import StoreContext from '../../store/StoreContext';
import { Spinner } from '../Spinner/Spinner';
import TaskItem from './TaskItem/TaskItem';
import s from './TaskList.module.css';

const TaskList = (): JSX.Element => {
  const { tasksStore } = useContext(StoreContext);

  const tasksList = tasksStore.getFilteredTasks.map((task): JSX.Element => (
    <TaskItem
      key={task.id}
      task={task}
    />
  ));

  return (tasksStore.getIsLoading)
    ? <Spinner/>
    : <section className={s.main}>
      <ul className={s.list}>{tasksList}</ul>
    </section>;
};

export default observer(TaskList);
