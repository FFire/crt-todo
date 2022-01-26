import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './styles/output.css';

ReactDOM.render(
  <React.StrictMode>
    <div className='min-h-screen bg-gray-50  flex flex-col relative overflow-hidden'>
      <section className='
        transition-all relative bg-white shadow-xl ring-2 ring-gray-900/5
        mx-auto px-0 pt-0 pb-0 min-w-full
        sm:mx-auto sm:rounded-lg sm:p-6 sm:w-full sm:min-w-0
        md:max-w-2xl md:mx-auto md:rounded-lg md:px-10 md:w-11/12 md:pt-10 md:pb-8
        lg:max-w-3xl lg:mx-auto lg:rounded-lg lg:px-10 lg:w-5/6 lg:pt-10 lg:pb-8
        xl:max-w-4xl xl:mx-auto xl:rounded-lg xl:px-10 xl:w-3/4 xl:pt-10 xl:pb-8
        2xl:max-w-4xl 2xl:mx-auto 2xl:rounded-lg 2xl:px-10 2xl:w-2/3 2xl:pt-10 2xl:pb-8
      '>
        <App />
      </section>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
