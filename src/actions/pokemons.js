import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

import * as actionTypes from '../constants/actionTypes'
import { setStatus } from './status';
import { POKEAPI_POKEDEX_URL } from '../constants/services';
import * as statusConstants from '../constants/status';

import getAPIUrl from '../helpers/get-api';

const URL = getAPIUrl(POKEAPI_POKEDEX_URL);
const {
  LOADING_STATUS,
  LOADING_STATUS_MESSAGE,
  NULL_STATUS,
  NETWORK_ERROR,
  NETWORK_ERROR_MESSAGE
} = statusConstants;

export function fetchPokedexSuccess(data) {
  return {
    type: actionTypes.FETCH_POKEDEX_SUCCESS,
    data
  };
}

export function fetchPokedex() {

  return dispatch => {

    dispatch(setStatus({
      status: LOADING_STATUS,
      message: LOADING_STATUS_MESSAGE,
    }));

    return fetch(URL)
      .then(r => r.json())
      .then(d => {
        dispatch(setStatus({
          status: NULL_STATUS,
        }));

        dispatch(fetchPokedexSuccess(d));
      })
      .catch(({ message }) => {
        dispatch(setStatus({
          status: NETWORK_ERROR,
          message: NETWORK_ERROR_MESSAGE
        }));
      });
  };
}

export function changePage(data) {
  return {
    type: actionTypes.CHANGE_PAGE,
    data,
  }
}
