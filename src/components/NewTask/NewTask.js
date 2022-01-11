import React, { Component } from 'react';
import s from './NewTask.module.css';

export class NewTask extends Component {
  render() {
    return (
      <input
        className={s.newTodo}
        name='newTask'
        autoFocus='autofocus'
        autoComplete='off'
        placeholder='Add some tasks'
        onKeyPress={this.props.handleKeyPress}
        onChange={this.props.handleChange}
        onFocus={this.props.handleGetFocus}
        onBlur={this.props.handleLostFocus}
        value={this.props.pendingTask}
      />
    );
  }
}
