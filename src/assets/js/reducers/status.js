import { SET_STATUS } from '../constants/actionTypes';
import {
  NULL_STATUS,
  NULL_STATUS_MESSAGE,
} from '../constants/status';

const INITIAL_STATE = {
  status: NULL_STATUS,
  message: NULL_STATUS_MESSAGE
};

export default function status(state = INITIAL_STATE, action) {
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
