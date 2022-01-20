import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './styles/output.css';

ReactDOM.render(
  <React.StrictMode>
    <div className='min-h-screen bg-gray-50 py-6 flex flex-col relative overflow-hidden sm:py-12'>
      <section className='transition-all relative w-2/3 px-2 pt-10 pb-8 bg-white shadow-xl ring-2 ring-gray-900/5 sm:max-w-4xl sm:mx-auto sm:rounded-lg sm:px-10'>
        <App />
      </section>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
