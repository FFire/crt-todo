/* eslint-disable function-paren-newline */
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { observer } from 'mobx-react';
import { initialTasks } from '../../fixtures/initialTasks';
import { WithSpinner } from '../../HOC/WithSpinner';
import {
  Filter, Message, NewTask, TaskList,
} from '../../components/components';
import './Main.css';
import tasksStore from '../../store/TasksStore';

const TaskListWithSpinner = WithSpinner(TaskList);
const messageMode = {
  none: 'none',
  info: 'info',
  error: 'error',
};
const stateFilterNames = {
  all: 'All',
  active: 'Active',
  completed: 'Completed',
};

export const MainPage = () => {
  const [pendingTask, setPendingTask] = useState('');
  const [message, setMessage] = useState({ text: 'Hello there!', mode: messageMode.info });
  const [stateFilter, setStateFilter] = useState('All');
  const [textFilter, setTextFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      tasksStore.addTasks(initialTasks);
      setIsLoading(false);
    },
    1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const makeInfo = () => {
    const { completedTaskCount, taskCount } = tasksStore.statistic;
    const text = `${completedTaskCount} out of ${taskCount} tasks left`;
    const mode = messageMode.info;

    setMessage({ text, mode });
  };

  const handleToggle = (e) => {
    const { id, checked } = e.target;
    tasksStore.setIsDone(id, checked);
    makeInfo();
  };

  const handleDeleteCompleted = () => {
    tasksStore.deleteCompleted();
    setPendingTask('');
    makeInfo();
    setStateFilter(stateFilterNames.all);
  };

  const handleDeleteById = (e) => {
    e.preventDefault();
    const { id } = e.target;

    tasksStore.deleteById(id);
    setPendingTask('');
    makeInfo();
  };

  const handleGetFocus = (e) => validate(e.target.value);

  const handleChange = (e) => {
    const { value: newTask } = e.target;
    setPendingTask(newTask);

    validate(newTask);
  };

  const handleKeyPress = (e) => {
    const { value: newTaskText } = e.target;

    if ((e.code === 'Enter') && validate(newTaskText)) {
      const id = Math.max(...tasksStore.mobxTasks.map((task) => task.id)) + 1;
      const isDone = false;
      const newTask = { id, text: newTaskText, isDone };
      const newMessage = { text: 'Task successfully added', mode: messageMode.info };

      tasksStore.addTasks([newTask]);
      setMessage(newMessage);
      setPendingTask('');
      makeInfo();
    }
  };

  const handleTextFilter = (e) => {
    const { value: newTextFilter } = e.target;

    setTextFilter(newTextFilter);
  };

  const handleStateFilter = (e) => {
    const { value: newStateFilter } = e.target;

    setStateFilter(newStateFilter);
  };

  const validate = (taskText) => {
    const loweredTasks = tasksStore.mobxTasks.map(({ text }) => text.toLowerCase());
    const addingInfo = 'To add task press ENTER at the end';

    try {
      yup.string()
        .required('Task is required')
        .min(5, 'Task must be minimum 5 letters')
        .notOneOf(loweredTasks, 'Task already exist')
        .validateSync(taskText.toLowerCase());
      setMessage({ text: addingInfo, mode: messageMode.info });

      return true;
    } catch (err) {
      setMessage({ text: err.message, mode: messageMode.error });

      return false;
    }
  };

  const getFilteredTasks = (currTasks, currTextFilter, currStateFilter) => currTasks
    .filter(({ text }) => text.toLowerCase().includes(currTextFilter.toLowerCase()))
    .filter(({ isDone }) => {
      switch (currStateFilter) {
        case stateFilterNames.all:
          return true;

        case stateFilterNames.active:
          return !isDone;

        case stateFilterNames.completed:
          return isDone;

        default:
          setStateFilter(stateFilterNames.all);
      }

      return true;
    });

  const MobxTasks = observer(() => {
    const { mobxTasks } = tasksStore;
    return (
      <TaskListWithSpinner
        isLoading={isLoading}
        tasks={getFilteredTasks(mobxTasks, textFilter, stateFilter)}
        handleDeleteById={handleDeleteById}
        handleToggle={handleToggle}
      />
    );
  });
  return (
    <>

      <NewTask
        handleKeyPress={handleKeyPress}
        handleGetFocus={handleGetFocus}
        handleLostFocus={makeInfo}
        handleChange={handleChange}
        pendingTask={pendingTask}
      />

      <Message
        message={message}
      />

      <Filter
        stateFilterNames={Object.values(stateFilterNames)}
        stateFilter={stateFilter}
        textFilter={textFilter}
        handleTextFilter={handleTextFilter}
        handleStateFilter={handleStateFilter}
        handleDeleteCompleted={handleDeleteCompleted}
      />

      <MobxTasks />
    </>
  );
};
