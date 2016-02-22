import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

import * as actionTypes from 'constants/actionTypes'
import * as statusConstants from 'constants/status';
import { setStatus } from './status';
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
    let action = setStatus({
      status: statusConstants.LOADING_STATUS,
      message: statusConstants.LOADING_STATUS_MESSAGE
    });

    dispatch(action);

    return fetch(getEntrypointFor('pokemon', id))
      .then((response) => response.json())
      .then((data) => {
        let action = setStatus({
          status: statusConstants.NULL_STATUS
        });

        dispatch(action);
        dispatch(fetchPokemonSuccess(data));

      })
      .catch((error) => {
        let action = setStatus({
          status: statusConstants.NETWORK_ERROR,
          message: statusConstants.NETWORK_ERROR_MESSAGE
        });

        dispatch(action);

      });
  }
}

export function filterPokemon(data) {
  return {
    type: actionTypes.FILTER_POKEMON,
    data
  };
}
