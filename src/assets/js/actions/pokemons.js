import * as actionTypes from '../constants/actionTypes'
import { POKEDEX_SERVICE_URL } from '../constants/services';
import fetch from 'node-fetch';

export function fetchPokedexRequest() {
  return {
    type: actionTypes.FETCH_POKEDEX_REQUEST
  };
}

export function fetchPokedexSuccess(data) {
  return {
    type: actionTypes.FETCH_POKEDEX_SUCCESS,
    data
  };
}

export function fetchPokedexError(error) {
  return {
    type: actionTypes.FETCH_POKEDEX_ERROR,
    error
  };
}

export function fetchPokedex() {
  return dispatch => {
    dispatch(fetchPokedexRequest());
    fetch(POKEDEX_SERVICE_URL)
      .then((response) => response.json())
      .then((data) => dispatch(fetchPokedexSuccess(data)))
      .catch((error) => dispatch(fetchPokedexError(error)));
  }
}
