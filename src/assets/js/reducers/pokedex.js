import {
  FETCH_POKEDEX_REQUEST,
  FETCH_POKEDEX_SUCCESS,
  FETCH_POKEDEX_ERROR,
} from '../constants/actionTypes';

import pokemon from './pokemon';

const INITIAL_STATE = {
  isLoading: false,
  networkError: false,
  pokemons: []
};

export default function pokedex(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POKEDEX_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case FETCH_POKEDEX_SUCCESS:
      let { objects } = action.data;
      let pokemons = objects.reduce((c, n) => [...c, ...n.pokemon], [])
        .map((x) => pokemon(x));

      return {
        ...state,
        pokemons,
        isLoading: false
      }

    case FETCH_POKEDEX_ERROR:
      return {
        ...state,
        networkError: true,
        isLoading: false
      }

    default:
      return state;
  }
};
