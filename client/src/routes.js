import Base from './components/Base/Base';
import HomePage from './components/HomePage';
import DashboardPage from './containers/DashboardPage'
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import Auth from './modules/Auth';

const routes = {
  component: Base,
  childRoutes: [
    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
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