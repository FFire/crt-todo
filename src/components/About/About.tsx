import classNames from 'classnames';
import React, { useContext } from 'react';
import StoreContext from '../../store/StoreContext';
import { UiThemes } from '../../store/UiStore';
import s from './About.module.css';

export const About = (): JSX.Element => {
  const { uiStore } = useContext(StoreContext);
  const cssClasses: string = classNames(s.spinner, { [s.dark]: uiStore.getUiTheme === UiThemes.DARK });

  return (
      <div className={cssClasses}>
       <p>My name is...</p>
       <p>My github is...</p>
       <p>My telegram is...</p>
      </div>
  );
};
