import { chunk } from 'lodash';

import * as actionTypes from 'constants/actionTypes';
import { pokemon } from './pokemon';

export const INITIAL_STATE = {
  list: [],
};

export const PER_PAGE = 10;

export function pokemons(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_POKEDEX_SUCCESS:
      let { objects } = action.data;
      let pokemons = objects.reduce((c, { pokemon }) => [...c, ...pokemon], []);

      return {
        list: pokemons.map(p => {
          return pokemon(p, {
            type: actionTypes.POKEMON_UPDATE
          });
        }),
      }

    default:
      return INITIAL_STATE;
  }
};
