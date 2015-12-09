import { combineReducers } from 'redux';

import INITIAL_STATE from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

function pokedex(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_POKEDEX_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case actionTypes.FETCH_POKEDEX_SUCCESS:
      return {
        ...state,
        pokemons: action.data.objects.reduce((c, n) => [...c, ...n.pokemon], []),
        isLoading: false
      }

    case actionTypes.FETCH_POKEDEX_ERROR:
      return {
        ...state,
        networkError: true,
        isLoading: false
      }

    default:
      return state;
  }
};

export default combineReducers({
  pokedex
});
