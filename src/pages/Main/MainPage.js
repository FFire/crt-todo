/* eslint-disable function-paren-newline */
import * as yup from 'yup';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTasks, removeTaskById, removeCompletedTasks, setIsDone,
} from '../../slices/tasksSlice';
import { initialTasks } from '../../fixtures/initialTasks';
import { WithSpinner } from '../../HOC/WithSpinner';
import {
  Filter, Message, NewTask, TaskList,
} from '../../components/components';
import './Main.css';
import { messageMode } from '../../components/Message/messageMode';
import { stateFilterNames } from './stateFilterNames';

const TaskListWithSpinner = WithSpinner(TaskList);

export const MainPage = () => {
  const reduxTasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  // const [tasks, setTasks] = useState([]);
  const [pendingTask, setPendingTask] = useState('');
  const [message, setMessage] = useState({ text: 'Hello there!', mode: messageMode.INFO });
  const [stateFilter, setStateFilter] = useState('All');
  const [textFilter, setTextFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(addTasks(initialTasks));

      // setTasks(initialTasks);
      setIsLoading(false);
    },
    1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const makeInfo = () => {
    const taskCount = reduxTasks.taskList.length;
    const completedTaskCount = reduxTasks.taskList.filter(({ isDone }) => !isDone).length;
    const text = `${completedTaskCount} out of ${taskCount} tasks left`;
    const mode = messageMode.INFO;

    setMessage({ text, mode });
  };

  // TODO сделать замену объектов через Object.assign()
  const handleToggle = (e) => {
    const payload = { id: e.target.id, checked: e.target.checked };
    // const newTasks = tasks.map((task) => (task.id === parseInt(targetId, 10)
    //   ? { ...task, isDone: targetIsDone }
    //   : task));
    dispatch(setIsDone(payload));

    // setTasks(newTasks);
    makeInfo();
  };

  const handleDeleteCompleted = () => {
    // const newTasks = tasks.filter(({ isDone }) => !isDone);

    // setTasks(newTasks);
    dispatch(removeCompletedTasks());
    setPendingTask('');
    makeInfo();
    setStateFilter(stateFilterNames.ALL);
  };

  const handleDeleteById = (e) => {
    e.preventDefault();

    const { id: targetId } = e.target;
    // const newTasks = tasks.filter(({ id }) => id !== parseInt(targetId, 10));

    dispatch(removeTaskById(targetId));

    // setTasks(newTasks);
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
      const id = Math.max(...reduxTasks.taskList.map((task) => task.id)) + 1;
      const isDone = false;
      const newTask = { id, text: newTaskText, isDone };
      const newMessage = { text: 'Task successfully added', mode: messageMode.INFO };

      // setTasks([...tasks, newTask]);
      dispatch(addTasks([newTask]));

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
    const loweredTasks = reduxTasks.taskList.map(({ text }) => text.toLowerCase());
    const addingInfo = 'To add task press ENTER at the end';

    try {
      yup.string()
        .required('Task is required')
        .min(5, 'Task must be minimum 5 letters')
        .notOneOf(loweredTasks, 'Task already exist')
        .validateSync(taskText.toLowerCase());
      setMessage({ text: addingInfo, mode: messageMode.INFO });

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
        case stateFilterNames.ALL:
          return true;

        case stateFilterNames.ACTIVE:
          return !isDone;

        case stateFilterNames.COMPLETED:
          return isDone;

        default:
          setStateFilter(stateFilterNames.ALL);
      }

      return true;
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

      <TaskListWithSpinner
        isLoading={isLoading}
        tasks={getFilteredTasks(reduxTasks.taskList, textFilter, stateFilter)}
        handleDeleteById={handleDeleteById}
        handleToggle={handleToggle}
      />
    </>
  );
};
