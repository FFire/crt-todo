/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
import React, { useEffect } from 'react';
import Filter from '../../components/Filter/Filter';
import Message from '../../components/Message/Message';
import NewTask from '../../components/NewTask/NewTask';
import TaskList from '../../components/TaskList/TaskList';
import StoreContext, { stores } from '../../store/StoreContext';
import './Main.css';

export const MainPage = ():JSX.Element => {
  useEffect(() => {
    const timer = setTimeout(() => {
      stores.tasksStore.loadTasks();
    },
    1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StoreContext.Provider value={stores}>

      <NewTask />

      <Message />

      <Filter />

      <TaskList />
    </StoreContext.Provider>
  );
};
