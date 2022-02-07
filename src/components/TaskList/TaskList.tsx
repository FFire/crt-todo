import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import StoreContext from '../../store/StoreContext';
import { Spinner } from '../Spinner/Spinner';
import TaskItem from './TaskItem/TaskItem';

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
    : <section className='rounded-b-lg p-3 bg-slate-100 dark:bg-slate-700 duration-500'>
      <ul>{tasksList}</ul>
    </section>;
};

export default observer(TaskList);
