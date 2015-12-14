import {
  FETCH_POKEDEX_REQUEST,
  FETCH_POKEDEX_SUCCESS,
  FETCH_POKEDEX_ERROR,
} from '../constants/actionTypes';

import pokemon from './pokemon';

const INITIAL_STATE = {
  pokemons: []
};

export default function pokedex(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POKEDEX_SUCCESS:
      let { objects } = action.data;
      let pokemons = objects.reduce((c, n) => [...c, ...n.pokemon], [])
        .map((x) => pokemon(x));

      return {
        ...state,
        pokemons,
      }

    default:
      return state;
  }
};
