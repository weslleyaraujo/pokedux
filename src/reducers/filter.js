import * as actionTypes from '../constants/actionTypes'
import { includes } from 'lodash';

export const INITIAL_STATE = [];

export function filter(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.FILTER_POKEMON:
      let { pokedex, value } = action.data;
      return pokedex.pokemons
        .filter(f => includes(f.name, value));

    default:
      return state;
  }
};
