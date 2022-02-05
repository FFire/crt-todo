import classNames from 'classnames';
import { observer } from 'mobx-react';
import React, { ChangeEvent, MouseEvent, useContext } from 'react';
import StoreContext from '../../../store/StoreContext';
import { ITask } from '../../../store/TasksStore';
import { UiThemes } from '../../../store/UiStore';
import s from './TaskItem.module.css';

export interface ITaskItemProps {
  task: ITask;
}

const TaskItem = (props: ITaskItemProps): JSX.Element => {
  const { tasksStore, uiStore } = useContext(StoreContext);

  const { task: { id, text, isDone } } = props;
  const uiTheme: UiThemes = uiStore.getUiTheme;
  const itemClass: string = classNames(s.item, { [s.dark]: uiTheme === UiThemes.DARK, [s.done]: isDone });

  const handleToggle = (e: ChangeEvent<HTMLInputElement>): void => {
    const targetId: number = parseInt(e.target.id, 10);
    const { checked } = e.target;
    tasksStore.setIsDone(targetId, checked);
  };

  const handleDeleteById = (e: MouseEvent<HTMLInputElement>): void => {
    // TODO is it needed?
    e.preventDefault();
    const targetId: number = parseInt((e.target as HTMLInputElement).id, 10);

    tasksStore.deleteById(targetId);
    uiStore.setPendingTaskContent('');
  };

  return (
    <li>
      <input
        type='checkbox'
        id={id.toString()}
        defaultChecked={isDone}
        onChange={handleToggle}
        className={s.toggle}
      />

      <p
        className={itemClass}
      >{text}</p>

      <input
        type='button'
        id={id.toString()}
        value='×'
        className={s.destroy}
        onClick={handleDeleteById}
      />
    </li>
  );
};

export default observer(TaskItem);
