import classNames from 'classnames';
import React, { useContext } from 'react';
import StoreContext from '../../store/StoreContext';
import { UiThemes } from '../../store/UiStore';
import s from './Spinner.module.css';

export const Spinner = (): JSX.Element => {
  const { uiStore } = useContext(StoreContext);
  const cssClasses: string = classNames(s.spinner, { [s.dark]: uiStore.getUiTheme === UiThemes.DARK });
  return (
    <p className={cssClasses}>
      Data is loading...
    </p>
  );
};
