/* eslint-disable function-paren-newline */
import React, { ChangeEvent, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Theme, ThemeContext } from '../../cotext/themeContext';
import { AboutPage, MainPage, NotFoundPage } from '../../pages/pages';
import { Header, ThemeToggle } from '../components';
import { routePaths } from './routePaths';

const App = (): JSX.Element => {
  const [uiTheme, setUiTheme] = useState(Theme.DARK);
  const handleThemeToggle = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked } = e.target;

    setUiTheme(checked ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <>
      <ThemeContext.Provider value={uiTheme}>

      <Header text='CRA ToDo'/>

        <ThemeToggle
          handleThemeToggle={handleThemeToggle}
          uiTheme={uiTheme}
        />

      <Routes>
        <Route path={routePaths.HOME.path} element={<MainPage/>}/>
        <Route path={routePaths.ABOUT.path} element={<AboutPage/>}/>
        <Route path={routePaths.NOT_FOUND.path} element={<NotFoundPage/>}/>
      </Routes>

      </ThemeContext.Provider>
    </>
  );
};

export default App;
