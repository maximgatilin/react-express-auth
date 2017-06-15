if (module.hot) {
  module.hot.accept()
}

import React from 'react';
import ReactDom from 'react-dom';
import {browserHistory, Router} from 'react-router';
import routes from './routes';
import './App.css';

ReactDom.render((
    <Router history={browserHistory} routes={routes}/>),
  document.getElementById('react-app')
);