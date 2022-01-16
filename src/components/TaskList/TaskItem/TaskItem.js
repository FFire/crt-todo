import classNames from 'classnames';
import React, { Component } from 'react';
import { theme, ThemeContext } from '../../App/themeContext';
import s from './TaskItem.module.css';

export class TaskItem extends Component {
  static contextType = ThemeContext;

  componentDidMount() {
    console.log('mount', this.context);
  }

  render() {
    const { id, text, isDone } = this.props.task;
    const UiTheme = this.context;
    const itemClass = classNames(s.item, { [s.dark]: UiTheme === theme.DARK, [s.done]: isDone });
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
    );
  }
}
