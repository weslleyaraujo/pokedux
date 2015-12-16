import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';
import { bindActionCreators } from 'redux';

import * as actionTypes from '../constants/actionTypes'
import { setStatus } from './status';

import { POKEAPI_ROOT_URL, POKEAPI_POKEDEX_URL } from '../constants/services';
import * as statusConstants from '../constants/status';


function getUrl(path) {
  return POKEAPI_ROOT_URL + path;
}

export function fetchPokedexSuccess(data) {
  return {
    type: actionTypes.FETCH_POKEDEX_SUCCESS,
    data
  };
}

export function fetchPokedex() {
  return dispatch => {
    let action = setStatus({
      status: statusConstants.LOADING_STATUS,
      message: statusConstants.LOADING_STATUS_MESSAGE
    })

    dispatch(action);

    return fetch(getUrl(POKEAPI_POKEDEX_URL))
      .then((response) => response.json())
      .then((data) => {
        let action = setStatus({
          status: statusConstants.NULL_STATUS
        });

        dispatch(action);
        dispatch(fetchPokedexSuccess(data));

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
