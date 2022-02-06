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
    type='button'
    id='deleteCompleted'
    className='flex group items-center justify-center w-10 h-10 mr-5 rounded-full
    aspect-square bg-transparent  hover:bg-emerald-700/10 hover:shadow'
    onClick={handleOnClick}
  >
  <TrashCan
    className='w-6 h-6 fill-slate-300 group-hover:fill-red-400'
    onClick={handleOnClick}
  />
  </button>
  );
};

export default observer(DeleteCompleted);
