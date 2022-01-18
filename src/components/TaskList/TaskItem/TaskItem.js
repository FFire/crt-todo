import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { theme, ThemeContext } from '../../App/themeContext';
import s from './TaskItem.module.css';

export class TaskItem extends Component {
  static contextType = ThemeContext;

  render() {
    const { handleDeleteById, handleToggle, task: { id, text, isDone } } = this.props;
    const UiTheme = this.context;
    const itemClass = classNames(s.item, { [s.dark]: UiTheme === theme.DARK, [s.done]: isDone });
    return (
      <li>
        <input
          type='checkbox'
          id={id}
          defaultChecked={isDone}
          onChange={handleToggle}
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
          onClick={handleDeleteById}
        />
      </li>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  isDone: PropTypes.bool,
  handleDeleteById: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  UiTheme: PropTypes.string,
};
