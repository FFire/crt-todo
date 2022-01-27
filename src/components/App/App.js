/* eslint-disable function-paren-newline */
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { theme, ThemeContext } from '../../cotext/themeContext';
import { AboutPage, MainPage, NotFoundPage } from '../../pages/pages';
import { Header, ThemeToggle } from '../components';
import { routePaths } from './routePaths.tsx';

const App = () => {
  const [uiTheme, setUiTheme] = useState(theme.DARK);
  const handleThemeToggle = (e) => {
    const { checked } = e.target;

    setUiTheme(checked ? theme.DARK : theme.LIGHT);
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
