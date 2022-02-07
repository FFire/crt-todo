import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import StoreContext, { stores } from './store/StoreContext';
import './styles/output.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContext.Provider value={stores}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
