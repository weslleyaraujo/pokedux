import * as actionTypes from 'constants/actionTypes'
import { includes } from 'lodash';

export const INITIAL_STATE = {
  text: '',
};

export function description(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.FETCH_DESCRIPTION_SUCCESS:
      let { description: text } = action.data;

      return {
        text,
      }

    default:
      return state;
  }
};
