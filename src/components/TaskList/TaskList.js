import React, { Component } from "react";
import { TaskItem } from './TaskItem/TaskItem';
import s from "./TaskList.module.css";

export class TaskList extends Component {

  render() {
    const { tasks, handleToggle, handleDeleteById } = this.props;
    const tasksList = tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        handleToggle={handleToggle}
        handleDeleteById={handleDeleteById}
      />
    ));

    return (
      <section className={s.main}>
        <ul className={s.list}>{tasksList}</ul>
      </section>
    )
  }
}