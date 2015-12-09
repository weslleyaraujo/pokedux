import {
  FETCH_POKEDEX_REQUEST,
  FETCH_POKEDEX_SUCCESS,
  FETCH_POKEDEX_ERROR
} from '../constants/actionTypes';

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
      return {
        ...state,
        pokemons: action.data.objects.reduce((c, n) => [...c, ...n.pokemon], []),
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
