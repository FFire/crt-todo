import React, { Component } from 'react';
import s from './TaskItem.module.css';

export class TaskItem extends Component {

  render() {
    const { id, text, isDone } = this.props.task;
    return (
      <li>
        <div>
          <input
            type='checkbox'
            id={id}
            defaultChecked={isDone}
            onChange={this.props.handleToggle}
            className={s.toggle}
          />

          <div
            className={isDone ? s.done : ''}
          >{text}</div>

          <input
            type='button'
            id={id}
            value='×'
            className={s.destroy}
            onClick={this.props.handleDeleteById}
          />
        </div>
      </li>
    )
  }
}