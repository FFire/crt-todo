import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import StoreContext from '../../store/StoreContext';

const Message = (): JSX.Element => {
  const { uiStore } = useContext(StoreContext);

  return (
    <div className='error'>{uiStore.errorMesage}</div>
  );
};

export default observer(Message);
