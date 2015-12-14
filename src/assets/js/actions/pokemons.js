
import { polyfill } from 'es6-promise'; // NOTE: do not remove me,
                                        // it is required by the `fetch` module.
import fetch from 'isomorphic-fetch';

import * as actionTypes from '../constants/actionTypes'
import { setStatus } from './status';
import { POKEDEX_SERVICE_URL } from '../constants/services';

import {
  NETWORK_ERROR,
  NETWORK_ERROR_MESSAGE,
  LOADING_STATUS,
  LOADING_STATUS_MESSAGE,
  NULL_STATUS
} from '../constants/status';

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
      message: LOADING_STATUS_MESSAGE
    }));

    fetch(POKEDEX_SERVICE_URL)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setStatus({
        status: NULL_STATUS
      }))
      dispatch(fetchPokedexSuccess(data))
    })
    .catch((error) => {
      dispatch(setStatus({
        status: LOADING_STATUS,
        message: LOADING_STATUS_MESSAGE
      }));
    });
  }
}
