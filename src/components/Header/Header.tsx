import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import StoreContext from '../../store/StoreContext';
import s from './Header.module.css';

export interface IHeaderMessage {
  text: string
}

const Header = (): JSX.Element => {
  const { rootStore } = useContext(StoreContext);

  return (
        <header className={s.appHeader}>
          <div>{rootStore.appCaption}</div>
        </header>
  );
};

export default observer(Header);
