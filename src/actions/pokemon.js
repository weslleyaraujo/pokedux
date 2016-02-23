import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

import * as actionTypes from 'constants/actionTypes';
import getEntrypointFor from 'helpers/get-entrypoint-for';
import { setStatus } from './status';
import { fetchDescription } from 'actions/description';
import {
  LOADING_STATUS,
  LOADING_STATUS_MESSAGE,
  NULL_STATUS,
  NETWORK_ERROR,
  NETWORK_ERROR_MESSAGE
}  from 'constants/status';


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
        dispatch(fetchPokemonSuccess(d));
        dispatch(fetchDescription(d))
      })
      .catch(e => {
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
