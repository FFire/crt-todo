import classNames from 'classnames';
import React, { useContext } from 'react';
import StoreContext from '../../store/StoreContext';
import { UiThemes } from '../../store/UiStore';
import s from './NotFound.module.css';

export const NotFound = (): JSX.Element => {
  const { uiStore } = useContext(StoreContext);
  const cssClasses: string = classNames(s.spinner, { [s.dark]: uiStore.getUiTheme === UiThemes.DARK });

  return (
    <>
      <div className={cssClasses}>
       <p>Sorry, page not found 😔 </p>
      </div>
    </>
  );
};
