import * as actionTypes from '../constants/actionTypes'

export function setStatus(data) {
  return {
    type: actionTypes.SET_STATUS,
    data
  };
}
