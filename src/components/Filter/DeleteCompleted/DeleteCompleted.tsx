import { observer } from 'mobx-react';
import React, { FC, useContext } from 'react';
import { ReactComponent as TrashCan } from '../../../assets/trashcan.svg';
import StoreContext from '../../../store/StoreContext';

const DeleteCompleted: FC = () => {
  const { tasksStore } = useContext(StoreContext);
  const handleOnClick = ():void => {
    tasksStore.deleteCompleted();
  };

  return (
  <button
    className='
      flex group items-center justify-center w-10 h-10 mr-5 ml-2 rounded-full duration-500
      aspect-square bg-transparent
      hover:bg-emerald-700/10 hover:shadow
      dark:hover:bg-slate-600 dark:hover:shadow-none
    '
    type='button'
    id='deleteCompleted'
    onClick={handleOnClick}
  >
    <TrashCan
      className='
        w-6 h-6 pointer-events-none duration-500
        fill-slate-300 group-hover:fill-red-400
        dark:fill-slate-500 dark:group-hover:fill-red-400/50
        '
    />
  </button>
  );
};

export default observer(DeleteCompleted);
