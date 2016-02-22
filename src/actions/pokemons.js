import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

import * as actionTypes from 'constants/actionTypes'
import getEntrypointFor from 'helpers/get-entrypoint-for';
import { setStatus } from './status';
import {
  LOADING_STATUS,
  LOADING_STATUS_MESSAGE,
  NULL_STATUS,
  NETWORK_ERROR,
  NETWORK_ERROR_MESSAGE
}  from 'constants/status';

export function fetchPokedexSuccess(data) {
  return {
    type: actionTypes.FETCH_POKEDEX_SUCCESS,
    data,
  };
}

export function fetchPokedex() {

  return dispatch => {

    dispatch(setStatus({
      status: LOADING_STATUS,
      message: LOADING_STATUS_MESSAGE,
    }));

    return fetch(getEntrypointFor('pokedex'))
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
