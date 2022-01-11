import React, { Component } from "react";
import * as yup from 'yup';
import { Filter } from "../Filter/Filter";
import { Header } from "../Header/Header";
import { Message } from "../Message/Message";
import { NewTask } from "../NewTask/NewTask";
import { TaskList } from "../TaskList/TaskList";
import './App.css';
import { initialTasks } from './initialTasks';

const messageMode = {
  none: 'none',
  info: 'info',
  error: 'error',
}
const stateFilterNames = {
  all: 'All',
  active: 'Active',
  completed: 'Completed',
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [],
      stateFilter: 'All',
      textFilter: '',
      message: {
        text: 'To add task press ENTER at the end.',
        mode: messageMode.info,
      },
      pendingTask: '',
    };
  };

  componentDidMount = () => {
    this.setState(() => ({ tasks: initialTasks }));
  };

  setInfo = () => {
    this.setState((state) => {
      const taskCount = state.tasks.length;
      const completedTaskCount = state.tasks.filter(({ isDone }) => !isDone).length;
      const text = `${completedTaskCount} out of ${taskCount} tasks left`;
      const mode = messageMode.info;

      return { message: { text, mode } };
    });
  };

  handleToggle = (e) => {
    const { id: targetId, checked: targetIsDone } = e.target;

    this.setState((state) => {
      const tasks = state.tasks.map((task) => (task.id === parseInt(targetId)
        ? { ...task, isDone: targetIsDone }
        : task));
      return { tasks }
    });

    this.setInfo();
  };

  handleDeleteCompleted = (e) => {
    this.setState((state) => {
      const tasks = state.tasks.filter(({ isDone }) => !isDone)
      return { tasks, stateFilter: 'All' }
    });

    this.setInfo();
  };

  handleDeleteById = (e) => {
    e.preventDefault();

    const { id: targetId } = e.target;

    this.setState((state) => {
      const tasks = state.tasks.filter(({ id }) => id !== parseInt(targetId))
      return { tasks }
    });

    this.setInfo();
  };

  handleGetFocus = (e) => {
    const { value } = e.target;

    this.validate(value);
  };

  handleChange = (e) => {
    const { value: pendingTask } = e.target;

    this.setState(() => ({ pendingTask }));
    this.validate(pendingTask);
  };

  handleKeyPress = (e) => {
    const { value: text } = e.target;

    if ((e.code === 'Enter') && this.validate(text)) {
      const id = Math.max(...this.state.tasks.map(({ id }) => id)) + 1;
      const isDone = false;
      const newTask = { id, text, isDone };
      this.setState((state) => (
        {
          tasks: [...state.tasks, newTask],
          message: { text: 'Task successfully added', mode: messageMode.info },
          pendingTask: '',
        }
      ));
    }
  };

  handleTextFilter = (e) => {
    const { value: textFilter } = e.target;

    this.setState(() => ({ textFilter }))
  };

  handleStateFilter = (e) => {
    const { value: stateFilter } = e.target;

    this.setState(() => ({ stateFilter }))
  };

  validate(pendingTask) {
    const tasks = this.state.tasks.map(({ text }) => text);
    const addingInfo = 'To add task press ENTER at the end'

    try {
      yup.string()
        .required('Task is required')
        .min(5, 'Task must be minimum 5 letters')
        .notOneOf(tasks, 'Task already exist')
        .validateSync(pendingTask);
      this.setState(() => ({ message: { text: addingInfo, mode: messageMode.info } }));
      return true;
    } catch (err) {
      this.setState(() => ({ message: { text: err.message, mode: messageMode.error } }));
      return false;
    }
  };

  getFilteredTasks = (tasks, textFilter, stateFilter) => {
    return tasks
      .filter(({ text }) => text.toLowerCase().includes(textFilter.toLowerCase()))
      .filter(({ isDone }) => {
        switch (stateFilter) {
          case stateFilterNames.all:
            return true;

          case stateFilterNames.active:
            return !isDone;

          case stateFilterNames.completed:
            return isDone;

          default:
            this.setState(() => ({ stateFilter: stateFilterNames.all }));
        }
      });
  };

  render() {
    return (
      <>
        <Header />

        <NewTask
          handleKeyPress={this.handleKeyPress}
          handleGetFocus={this.handleGetFocus}
          handleLostFocus={this.setInfo}
          handleChange={this.handleChange}
          pendingTask={this.state.pendingTask}
        />

        <Message
          message={this.state.message}
        />

        <Filter
          stateFilterNames={Object.values(stateFilterNames)}
          stateFilter={this.state.stateFilter}
          textFilter={this.state.textFilter}
          handleTextFilter={this.handleTextFilter}
          handleStateFilter={this.handleStateFilter}
          handleDeleteCompleted={this.handleDeleteCompleted}
        />

        <TaskList
          tasks={this.getFilteredTasks(this.state.tasks, this.state.textFilter, this.state.stateFilter)}
          handleDeleteById={this.handleDeleteById}
          handleToggle={this.handleToggle}
        />
      </>
    )
  }
}
