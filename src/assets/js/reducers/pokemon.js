import { POKEMON_IMAGE_URL } from '../constants/services';

const INITIAL_STATE = {
  name: '',
  resource_uri: '',
  image: ''
};

// entry: '/some/some/some/10/'
// returns: 10
export function getPokeId(uri) {
  return uri.split('/')
    .reduce((c, n) => c = !n ? c : n, '');
}

export default function pokemon (state = INITIAL_STATE, action) {
  if (!action) {
    let id = getPokeId(state.resource_uri)
    return {
      ...state,
      image: `${POKEMON_IMAGE_URL}/${id}.png`
    }
  }

  return state;
};
