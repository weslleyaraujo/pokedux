import getPokemonId from 'helpers/get-pokemon-id';
import getEntrypointFor from 'helpers/get-entrypoint-for';
import * as actionTypes from 'constants/actionTypes'
import { POKEAPI_IMAGE_URL, POKEAPI_ROOT_URL } from 'constants/services';

export const INITIAL_STATE = {
  name: '',
  resource_uri: '',
  image: '',
  id: '',
  descriptions: [],
};

export function pokemon(state = INITIAL_STATE, action) {
  let id = getPokemonId(action.data ? action.data.resource_uri : state.resource_uri);
  let image = getEntrypointFor('image', `${id}.png`);
  let path = `/pokemon/${id}`;

  switch(action.type) {
    case actionTypes.FETCH_POKEMON_SUCCESS:
      let { data } = action;
      return {
        ...data,
        id,
        image,
        path,
      }

    case actionTypes.POKEMON_UPDATE:
      return {
        ...state,
        id,
        image,
        path,
      }

    default:
      return state;
  }
};
