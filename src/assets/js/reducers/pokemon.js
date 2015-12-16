import getPokemonId from '../helpers/get-pokemon-id';
import { POKEAPI_IMAGE_URL, POKEAPI_ROOT_URL } from '../constants/services';

export const INITIAL_STATE = {
  name: '',
  resource_uri: '',
  image: ''
};

export function pokemon (state = INITIAL_STATE, action) {
  if (!action) {
    let id = getPokemonId(state.resource_uri)
    return {
      ...state,
      image: `${POKEAPI_ROOT_URL}${POKEAPI_IMAGE_URL}${id}.png`
    }
  }

  return state;
};
