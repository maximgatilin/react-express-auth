import Base from './components/Base/Base';
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import store from './store';
import * as actionsCreators from './actions/actionCreators';

const routes = {
  component: Base,
  onChange: function() {
    store.dispatch(actionsCreators.resetErrors());
  },
  childRoutes: [
    {
      path: '/',
      getComponent: (location, callback) => {
        const isAuthenticated = store.getState().auth.isAuthenticated;
        if (isAuthenticated) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage)
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    }
  ]
};

export default routes;