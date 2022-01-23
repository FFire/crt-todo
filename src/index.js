import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import store from './slices/slices';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='App'>
        <section className='todoapp'>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </section>
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
