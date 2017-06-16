import React from 'react';
import ReactDom from 'react-dom';
import {browserHistory, Router} from 'react-router';
import routes from './routes';
import './app.scss';

if (module.hot) {
  module.hot.accept()
}

ReactDom.render((
  // giving random key for Router fixes bug with HMR and React-router
    <Router history={browserHistory} routes={routes} key={Math.random()}/>),
  document.getElementById('react-app')
);