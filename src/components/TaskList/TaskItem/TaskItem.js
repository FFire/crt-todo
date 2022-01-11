import classNames from 'classnames';
import React, { Component } from 'react';
import s from './TaskItem.module.css';

export class TaskItem extends Component {

  render() {
    const { id, text, isDone } = this.props.task;
    const itemClass = classNames(s.item, { [s.done]: isDone });
    return (
      <li>
        <input
          type='checkbox'
          id={id}
          defaultChecked={isDone}
          onChange={this.props.handleToggle}
          className={s.toggle}
        />

        <span
          className={itemClass}
        >{text}</span>

        <input
          type='button'
          id={id}
          value='×'
          className={s.destroy}
          onClick={this.props.handleDeleteById}
        />
      </li>
    )
  }
}