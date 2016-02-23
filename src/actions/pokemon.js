import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

import * as actionTypes from 'constants/actionTypes'
import { setStatus } from './status';
import {
  LOADING_STATUS,
  LOADING_STATUS_MESSAGE,
  NULL_STATUS,
  NETWORK_ERROR,
  NETWORK_ERROR_MESSAGE
}  from 'constants/status';

import getEntrypointFor from 'helpers/get-entrypoint-for';

export function fetchPokemonSuccess(data) {
  return {
    type: actionTypes.FETCH_POKEMON_SUCCESS,
    data
  };
}

export function fetchPokemon(data) {

  return dispatch => {

    let { id } = data;
    dispatch(setStatus({
      status: LOADING_STATUS,
      message: LOADING_STATUS_MESSAGE,
    }));

    return fetch(getEntrypointFor('pokemon', id))
      .then(r => r.json())
      .then(d => {
        dispatch(setStatus({
          status: NULL_STATUS,
        }));

        dispatch(fetchPokemonSuccess(d));
      })
      .catch((e) => {
        dispatch(setStatus({
          status: NETWORK_ERROR,
          message: NETWORK_ERROR_MESSAGE
        }));
      });
  }
}

export function filterPokemon(data) {
  return {
    type: actionTypes.FILTER_POKEMON,
    data
  };
}
