import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import StoreContext from '../../store/StoreContext';

const Message = (): JSX.Element => {
  const { uiStore } = useContext(StoreContext);

  return (
    <div className='w-full px-6 pb-2 bg-slate-100 text-transparent'>
      <p className='text-sm pl-6 text-pink-400'>
        {uiStore.getErrorMessage}
      </p>
    </div>
  );
};

export default observer(Message);
