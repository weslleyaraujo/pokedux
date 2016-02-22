import {
  POKEAPI_ROOT_URL,
  POKEAPI_POKEDEX_URL,
  POKEAPI_POKEMON_URL,
  POKEAPI_IMAGE_URL,
} from 'constants/services';

const alias = {
  root: '',
  pokedex: POKEAPI_POKEDEX_URL,
  image: POKEAPI_IMAGE_URL,
  pokemon: POKEAPI_POKEMON_URL
}

export default function getEntrypointFor(path = '', aditional = '') {
  return POKEAPI_ROOT_URL + alias[path] + aditional;
}
