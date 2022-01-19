/* eslint-disable function-paren-newline */
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import {
  Filter, Header, Message, NewTask, TaskList, ThemeToggle,
} from '../components';
import './App.css';
import { initialTasks } from './initialTasks';
import { theme, ThemeContext } from './themeContext';
import { WithSpinner } from './WithSpinner';

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

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [pendingTask, setPendingTask] = useState('');
  const [message, setMessage] = useState({ text: 'Hello there!', mode: messageMode.info });
  const [stateFilter, setStateFilter] = useState('All');
  const [textFilter, setTextFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [uiTheme, setUiTheme] = useState(theme.DARK);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTasks(initialTasks);
      setIsLoading(false);
    },
    1000);

    return () => {
      clearTimeout(timer);
    };
  });

  const makeInfo = () => {
    const taskCount = tasks.length;
    const completedTaskCount = tasks.filter(({ isDone }) => !isDone).length;
    const text = `${completedTaskCount} out of ${taskCount} tasks left`;
    const mode = messageMode.info;

    setMessage({ text, mode });
  };

  // TODO сделать замену объектов через Object.assign()
  const handleToggle = (e) => {
    const { id: targetId, checked: targetIsDone } = e.target;
    const newTasks = tasks.map((task) => (task.id === parseInt(targetId, 10)
      ? { ...task, isDone: targetIsDone }
      : task));

    setTasks(newTasks);
    makeInfo();
  };

  const handleDeleteCompleted = () => {
    const newTasks = tasks.filter(({ isDone }) => !isDone);

    setTasks(newTasks);
    setPendingTask('');
    makeInfo();
    setStateFilter(stateFilterNames.all);
  };

  const handleDeleteById = (e) => {
    e.preventDefault();

    const { id: targetId } = e.target;
    const newTasks = tasks.filter(({ id }) => id !== parseInt(targetId, 10));

    setTasks(newTasks);
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
      const id = Math.max(...tasks.map((task) => task.id)) + 1;
      const isDone = false;
      const newTask = { id, text: newTaskText, isDone };
      const newMessage = { text: 'Task successfully added', mode: messageMode.info };

      setTasks([...tasks, newTask]);
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
    const loweredTasks = tasks.map(({ text }) => text.toLowerCase());
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

  const handleThemeToggle = (e) => {
    const { checked } = e.target;

    setUiTheme(checked ? theme.DARK : theme.LIGHT);
    setPendingTask('');
    makeInfo();
  };

  return (
      <ThemeContext.Provider value={uiTheme}>

        <Header />

        <ThemeToggle
          handleThemeToggle={handleThemeToggle}
          uiTheme={uiTheme}
        />

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

        <TaskListWithSpinner
          isLoading={isLoading}
          tasks={getFilteredTasks(tasks, textFilter, stateFilter)}
          handleDeleteById={handleDeleteById}
          handleToggle={handleToggle}
        />

      </ThemeContext.Provider>
  );
};

export default App;
