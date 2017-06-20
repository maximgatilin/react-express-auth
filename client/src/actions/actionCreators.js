import * as types from './actionTypes';
import AuthModule from '../modules/Auth';
import { push } from 'react-router-redux';

// Sign up
function requestSignup() {
  return {
    type: types.SIGNUP_REQUEST
  }
}

function receiveSignup() {
  return {
    type: types.SIGNUP_SUCCESS,
  }
}

function signupError(summary, errors) {
  return {
    type: types.SIGNUP_FAILURE,
    errors: {
      ...errors,
      summary
    }
  }
}

export function signupUser(creds) {
  const config = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `name=${creds.name}&email=${creds.email}&password=${creds.password}`
  };

  return dispatch => {
    dispatch(requestSignup());

    return fetch('/auth/signup', config)
      .then(res=> res.json())
      .then(res => {
        if (!res.success) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(signupError(res.message, res.errors))
        } else {
          // Dispatch the success action
          dispatch(receiveSignup());
          dispatch(push('/login'));
        }
      }).catch(err => console.log("Error: ", err))
  }
}

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

// Errors
export function resetErrors() {
  return {
    type: types.RESET_ERRORS
  }
}