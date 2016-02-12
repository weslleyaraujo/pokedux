import { chunk } from 'lodash';

import * as actionTypes from '../constants/actionTypes';
import { pokemon } from './pokemon';

export const INITIAL_STATE = {
  pokemons: [],
  page: [],
  currentPage: 1,
};

export const PER_PAGE = 10;

export function pokedex(state = INITIAL_STATE, action) {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case actionTypes.FETCH_POKEDEX_SUCCESS:
      let { objects, currentPage } = action.data;
      let pokemons = objects.reduce((c, n) => [...c, ...n.pokemon], [])
        .map((x) => pokemon(x, { type: actionTypes.POKEMON_UPDATE }));

      let pages = chunk(pokemons, PER_PAGE);

      return {
        ...state,
        pokemons,
        page: pages[currentPage - 1],
        pageNum: pages.length,
      }

    case actionTypes.CHANGE_PAGE:
      return {
        ...state,
        page: chunk(action.data.pokemons, PER_PAGE)[action.data.currentPage - 1],
      }

    default:
      return state;
  }
};
