import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import './index.css';
import { AboutPage, MainPage, NotFoundPage } from './pages/pages';
import { routePaths } from './routes/routes';
import StoreContext, { stores } from './store/StoreContext';

ReactDOM.render(
  <React.StrictMode>
    <main className='App'>
      <section className='todoapp'>
        <BrowserRouter>
          <StoreContext.Provider value={stores}>
          <Header />
          <ThemeToggle />
          <Routes>
            <Route path={routePaths.HOME.path} element={<MainPage/>}/>
            <Route path={routePaths.ABOUT.path} element={<AboutPage/>}/>
            <Route path={routePaths.NOT_FOUND.path} element={<NotFoundPage/>}/>
          </Routes>
          </StoreContext.Provider>
        </BrowserRouter>
      </section>
    </main>
  </React.StrictMode>,
  document.getElementById('root'),
);
