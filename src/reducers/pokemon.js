import getPokemonId from '../helpers/get-pokemon-id';
import { POKEAPI_IMAGE_URL, POKEAPI_ROOT_URL } from '../constants/services';
import * as actionTypes from '../constants/actionTypes'

export const INITIAL_STATE = {
  name: '',
  resource_uri: '',
  image: '',
  id: ''
};

export function pokemon (state = INITIAL_STATE, action) {
  let id = getPokemonId(state.resource_uri);
  let image = `${POKEAPI_ROOT_URL}${POKEAPI_IMAGE_URL}`;
  let path = `/pokemon/${id}`;

  switch(action.type) {
    case actionTypes.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        ...action.data,
        image,
        id,
        path,
      }

    case actionTypes.POKEMON_UPDATE:
      return {
        ...state,
        image,
        id,
        path,
      }

    default:
      return state;
  }
};
