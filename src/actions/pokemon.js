import { ajax } from 'jquery';
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

    let request = ajax(getEntrypointFor('pokemon', id));

    request.then(d => {
      dispatch(fetchDescription(d));
    }).fail(({ statusText }) => {
      dispatch(setStatus({
        status: statusText !== 'abort' ? NETWORK_ERROR : NULL_STATUS,
        message: statusText !== 'abort' ? NETWORK_ERROR_MESSAGE : '',
      }));
    });

    return {
      abort: () => request.abort(),
    }

  }
}

export function filterPokemon(data) {
  return {
    type: actionTypes.FILTER_POKEMON,
    data
  };
}
