import PropTypes from 'prop-types';
import React from 'react';
import { TaskItem } from './TaskItem/TaskItem';

export const TaskList = (props) => {
  const { tasks, handleToggle, handleDeleteById } = props;
  const tasksList = tasks.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      handleToggle={handleToggle}
      handleDeleteById={handleDeleteById}
    />
  ));

  return (
    <section className='bg-slate-100 rounded-b-lg p-3'>
      <ul>{tasksList}</ul>
    </section>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    isDone: PropTypes.bool,
  })),
  handleToggle: PropTypes.func.isRequired,
  handleDeleteById: PropTypes.func.isRequired,
};
