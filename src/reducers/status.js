import { SET_STATUS } from '../constants/actionTypes';
import { NULL_STATUS, NULL_STATUS_MESSAGE, } from '../constants/status';

export const INITIAL_STATE = {
  status: NULL_STATUS,
  message: NULL_STATUS_MESSAGE
};

export function status(state = INITIAL_STATE, action) {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case SET_STATUS:
      let { status, message } = action.data;
      return {
        status,
        message
      }

    default:
      return state;
  }
};
