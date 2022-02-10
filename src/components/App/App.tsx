import cn from 'classnames';
import { observer } from 'mobx-react';
import React, { FC, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage, MainPage, NotFoundPage } from '../../pages/pages';
import { routePaths } from '../../routes/routes';
import StoreContext from '../../store/StoreContext';
import Header from '../Header/Header';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const App: FC = () => {
  const { uiStore } = useContext(StoreContext);

  const setDarkmode = cn({ dark: uiStore.getDarkMode });

  return (
      <div className={setDarkmode}>
        <div className='min-h-screen flex flex-col relative overflow-hidden, duration-500
          bg-gray-50, dark:bg-slate-900'>
          <div className='
              ring-2 transition-all duration-500 shadow-xl
              bg-white ring-gray-900/5
              dark:bg-slate-800 dark:ring-gray-900/10 dark:shadow-none
              mx-auto px-0 pt-0 pb-0 min-w-full
              sm:max-w-xl sm:rounded-lg sm:p-3 sm:w-full sm:min-w-0
              md:max-w-2xl md:mx-auto md:rounded-lg md:p-10 md:w-11/12 md:my-3
              lg:max-w-3xl lg:mx-auto lg:rounded-lg lg:w-5/6 lg:px-12
              xl:max-w-4xl xl:mx-auto xl:rounded-lg xl:w-3/4 xl:px-20
              2xl:max-w-4xl 2xl:mx-auto 2xl:rounded-lg 2xl:w-2/3
            '>
              <Header />
              <ThemeToggle />
              <Routes>
                <Route path={routePaths.HOME.path} element={<MainPage/>}/>
                <Route path={routePaths.ABOUT.path} element={<AboutPage/>}/>
                <Route path={routePaths.NOT_FOUND.path} element={<NotFoundPage/>}/>
              </Routes>
          </div>
        </div>
      </div>
  );
};

export default observer(App);
