import React from 'react';
import ReactDOM from 'react-dom';

//Routes
import Routes from './routes';

//components
import Menu from './components/menu';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
