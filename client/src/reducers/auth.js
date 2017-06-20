import { combineReducers } from 'redux'
import * as types from '../actions/actionTypes';
import Auth from '../modules/Auth';

export default function auth(state = {
  isFetching: false,
  isAuthenticated: !!Auth.getToken()
}, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        errors: {}
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errors: {}
      };
    case types.LOGIN_FAILURE:
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errors: action.errors
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false
      };
    case types.RESET_MESSAGES:
      return {
        ...state,
        errors: {}
      };
    default:
      return state
  }
}
