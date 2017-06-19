import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as types from './../actions/actionTypes';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  form: formReducer
});