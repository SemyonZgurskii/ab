import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import flights from './mock.js';

ReactDOM.render(
  <React.StrictMode>
    <App flights={flights} />
  </React.StrictMode>,
  document.getElementById('root')
);
