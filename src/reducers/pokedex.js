import { chunk } from 'lodash';

import * as actionTypes from '../constants/actionTypes';
import { pokemon } from './pokemon';

export const INITIAL_STATE = {
  pokemons: []
};

export const PER_PAGE = 10;

export function pokedex(state = INITIAL_STATE, action) {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case actionTypes.FETCH_POKEDEX_SUCCESS:
      let { objects } = action.data;
      let pokemons = objects.reduce((c, n) => [...c, ...n.pokemon], [])
        .map((x) => pokemon(x, { type: actionTypes.POKEMON_UPDATE }));

      return {
        ...state,
        pokemons,
      }

    case actionTypes.CHANGE_PAGE:
      let { pokemons, currentPage } = action.data;
      let items = chunk(pokemon, PER_PAGE)[currentPage - 1]

      return {
        ...state,
        pokemons,
      }

    default:
      return state;
  }
};
