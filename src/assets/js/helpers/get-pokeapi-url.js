import { POKEAPI_ROOT_URL } from '../constants/services';

export default function getPokeApiUrl(path) {
  return POKEAPI_ROOT_URL + path;
}
