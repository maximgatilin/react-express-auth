import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, Router} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';
import store from './store';
import './app.scss';

if (module.hot) {
  module.hot.accept()
}

const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render((
    <Provider store={store}>
      {/*giving random key for Router fixes bug with HMR and React-router*/}
      <Router history={history} routes={routes} key={Math.random()}/>
    </Provider>
  ),
  document.getElementById('react-app')
);