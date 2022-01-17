import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './NewTask.module.css';

export class NewTask extends Component {
  render() {
    const {
      handleKeyPress, handleChange, handleGetFocus, handleLostFocus, pendingTask,
    } = this.props;
    return (
      <input
        className={s.newTodo}
        name='newTask'
        autoFocus='autofocus'
        autoComplete='off'
        placeholder='Add some tasks'
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onFocus={handleGetFocus}
        onBlur={handleLostFocus}
        value={pendingTask}
      />
    );
  }
}

NewTask.protoType = {
  handleKeyPress: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleGetFocus: PropTypes.func.isRequired,
  handleLostFocus: PropTypes.func.isRequired,
  pendingTask: PropTypes.string.isRequired,
};
