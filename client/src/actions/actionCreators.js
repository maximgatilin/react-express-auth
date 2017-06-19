import * as types from './actionTypes';

export function addExhibit(exhibit) {
  return {
    type: types.ADD_EXHIBIT,
    payload: exhibit
  }
}