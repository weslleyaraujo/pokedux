import * as actionTypes from 'constants/actionTypes'
import { includes } from 'lodash';

export const INITIAL_STATE = {
  value: '',
  list: [],
};

export function filter(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.FILTER_POKEMON:
      let { value, list } = action.data;

      return {
        list: list.filter(f => includes(f.name, value)),
        value,
      }

    default:
      return state;
  }
};
