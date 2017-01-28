import * as types from './actionTypes';
import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData);
  };
}

export function addFlashMessage(message) {
  return {
    type: types.ADD_FLASH_MESSAGE,
    message
  };
}

export function deleteFlashMessage(id) {
  return {
    type: types.DELETE_FLASH_MESSAGE,
    id
  };
}
