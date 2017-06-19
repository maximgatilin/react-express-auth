import * as types from './actionTypes';
import AuthModule from '../modules/Auth';
import { push } from 'react-router-redux';

// Log In
function requestLogin() {
  return {
    type: types.LOGIN_REQUEST
  }
}

function receiveLogin() {
  return {
    type: types.LOGIN_SUCCESS,
  }
}

function loginError(summary, errors) {
  return {
    type: types.LOGIN_FAILURE,
    errors: {
      ...errors,
      summary
    }
  }
}

export function loginUser(creds) {
  const config = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `email=${creds.email}&password=${creds.password}`
  };

  return dispatch => {
    dispatch(requestLogin());

    return fetch('/auth/login', config)
      .then(res=> res.json())
      .then(res => {
        if (!res.success) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(res.message, res.errors))
        } else {
          // If login was successful, set the token in local storage
          AuthModule.authenticateUser(res.token, res.user);
          // Dispatch the success action
          dispatch(receiveLogin());
          dispatch(push('/'));
        }
      }).catch(err => console.log("Error: ", err))
  }
}

// Log out
function logout() {
  return {
    type: types.LOGOUT_USER
  }
}

export function logoutUser() {
  return dispatch => {
    AuthModule.deauthenticateUser();

    dispatch(logout());

    dispatch(push('/'));
  };
}