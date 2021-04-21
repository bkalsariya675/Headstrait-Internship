import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import Root from "./root";
// import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);

serviceWorker.unregister();