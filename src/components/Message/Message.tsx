import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import StoreContext from '../../store/StoreContext';

const Message = (): JSX.Element => {
  const { uiStore } = useContext(StoreContext);

  return (
    <div className='w-full px-6 pb-2 text-transparent bg-slate-100 dark:bg-slate-700 duration-500'>
      <p className='text-sm pl-6 h-4 text-pink-400'>
        {uiStore.getErrorMessage}
      </p>
    </div>
  );
};

export default observer(Message);
