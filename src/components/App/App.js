import React, { Component } from "react";
import * as yup from 'yup';
import { Filter } from "../Filter/Filter";
import { Header } from "../Header/Header";
import { Message } from "../Message/Message";
import { NewTask } from "../NewTask/NewTask";
import { TaskList } from "../TaskList/TaskList";
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        { id: 0, text: 'Use the optical GB panel, then you can parse the redundant matrix!', isDone: false },
        { id: 1, text: 'Switchable hybrid extranet', isDone: false },
        {
          id: 2,
          text: 'Payment transaction at Bergmann Group using card ending with ***6345 for AFN 246.25 in account ***41404917',
          isDone: false
        },
        { id: 3, text: 'Re-contextualized maximized productivity', isDone: true },
        { id: 4, text: 'Future-proofed exuding strategy', isDone: true },
        {
          id: 5,
          text: 'Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles',
          isDone: false
        },
        { id: 6, text: 'I\'ll copy the bluetooth SSL application, that should circuit the RSS alarm!', isDone: false },
        {
          id: 7,
          text: 'The BOD sensor is down, back up the auxiliary alarm so we can synthesize the ADP microchip!',
          isDone: false
        },
      ],
      stateFilter: 'All',
      stateFilterNames: ['All', 'Active', 'Completed'],
      textFilter: '',
      message: {
        text: 'To add task press ENTER at the end.',
        mode: 'info' // none / info / error
      },
      pendingTask: '',
    }
  };

  setInfo = () => {
    this.setState((state) => {
      const taskCount = state.tasks.length;
      const completedTaskCount = state.tasks.filter(({ isDone }) => !isDone).length;
      const text = `${completedTaskCount} out of ${taskCount} tasks left`;
      const mode = 'info'
      return { message: { text, mode } };
    })
  };

  handleToggle = (e) => {
    const { id: targetId, checked: targetIsDone } = e.target;
    this.setState((state) => {
      const tasks = state.tasks.map((task) => (task.id === parseInt(targetId)
        ? { ...task, isDone: targetIsDone }
        : task));
      return { tasks }
    })
    this.setInfo();
  };

  handleDeleteCompleted = (e) => {
    e.preventDefault();
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
          message: { text: 'Task successfully added', mode: 'info' },
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
      this.setState(() => ({ message: { text: addingInfo, mode: 'info' } }));
      return true;
    } catch (err) {
      this.setState(() => ({ message: { text: err.message, mode: 'error' } }));
      return false;
    }
  };

  getFilteredTasks = (tasks, textFilter, stateFilter) => {
    return tasks
      .filter(({ text }) => text.toLowerCase().includes(textFilter.toLowerCase()))
      .filter(({ isDone }) => {
        if (stateFilter === 'All') return true;
        if (stateFilter === 'Active') return !isDone;
        if (stateFilter === 'Completed') return isDone;
        throw new Error(`No such filter option: ${stateFilter}`)
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
          stateFilterNames={this.state.stateFilterNames}
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
