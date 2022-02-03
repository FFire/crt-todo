import React, { FC, useContext } from 'react';
import StoreContext from '../../../store/StoreContext';
import s from './DeleteCompleted.module.css';

const DeleteCompleted: FC = () => {
  const { tasksStore } = useContext(StoreContext);

  return (
    <button type='button' className={s.button} onClick={tasksStore.deleteCompleted}>Delete completed
    </button>
  );
};

export default DeleteCompleted;
