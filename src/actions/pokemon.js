import { ajax, noop } from 'jquery';
import ls from 'local-storage';

import * as actionTypes from 'constants/actionTypes';
import getEntrypointFor from 'helpers/get-entrypoint-for';
import { setStatus } from './status';
import {
  LOADING_STATUS,
  LOADING_STATUS_MESSAGE,
  NULL_STATUS,
  NETWORK_ERROR,
  NETWORK_ERROR_MESSAGE,
} from 'constants/status';


export function fetchPokemonSuccess(data) {
  return {
    type: actionTypes.FETCH_POKEMON_SUCCESS,
    data,
  };
}

export function fetchPokemon(data) {
  const { id } = data;
  const url = getEntrypointFor('pokemon', id);
  const cache = ls(url);

  return dispatch => {
    if (cache) {
      dispatch(fetchPokemonSuccess(cache));
      return {
        abort: noop,
      };
    }

    dispatch(setStatus({
      status: LOADING_STATUS,
      message: LOADING_STATUS_MESSAGE,
    }));

    const request = ajax(url);

    request.then(d => {
      ls(url, d);
      dispatch(fetchPokemonSuccess(d));
    }).fail(({ statusText }) => {
      dispatch(setStatus({
        status: statusText !== 'abort' ? NETWORK_ERROR : NULL_STATUS,
        message: statusText !== 'abort' ? NETWORK_ERROR_MESSAGE : '',
      }));
    });

    return {
      abort: () => request.abort(),
    };
  };
}

export function filterPokemon(data) {
  return {
    type: actionTypes.FILTER_POKEMON,
    data,
  };
}
