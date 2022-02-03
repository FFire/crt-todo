import { observer } from 'mobx-react';
import React, { ChangeEvent, FC, useContext } from 'react';
import StoreContext from '../../../store/StoreContext';

const TextFilter: FC = () => {
  const { uiStore } = useContext(StoreContext);
  const onChangeTextFilter = (e: ChangeEvent<HTMLInputElement>):void => {
    const { value } = e.target;
    uiStore.setTextFilterContent(value);
  };

  return (
    <form>
      <input
        name='text'
        value={uiStore.textFilterContent}
        onChange={onChangeTextFilter}
        autoComplete='off'
        placeholder='Filter tasks'
      />
    </form>
  );
};

export default observer(TextFilter);
