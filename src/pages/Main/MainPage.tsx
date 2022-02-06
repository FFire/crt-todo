/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
import React, { useContext, useEffect } from 'react';
import Filter from '../../components/Filter/Filter';
import Message from '../../components/Message/Message';
import NewTask from '../../components/NewTask/NewTask';
import Progress from '../../components/Progress/Progress';
import TaskList from '../../components/TaskList/TaskList';
import StoreContext from '../../store/StoreContext';

export const MainPage = ():JSX.Element => {
  const { tasksStore } = useContext(StoreContext);

  useEffect(() => {
    if (!tasksStore.getIsLoading) return;

    const timer = setTimeout(() => {
      tasksStore.loadTasks();
    },
    1000);

    return () => clearTimeout(timer);
  }, [tasksStore]);

  return (
    <>
      <NewTask />
      <Message />
      <Progress />
      <Filter />
      <TaskList />
    </>
  );
};
