import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className='App'>
      <section className='todoapp'>
        <App />
      </section>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
