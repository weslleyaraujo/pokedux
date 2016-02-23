import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

import * as actionTypes from 'constants/actionTypes';
import { setStatus } from './status';
import getEntrypointFor from 'helpers/get-entrypoint-for';

import {
  NULL_STATUS,
  NETWORK_ERROR,
  NETWORK_ERROR_MESSAGE
}  from 'constants/status';

export function fetchDescriptionSuccess(data) {
  return {
    type: actionTypes.FETCH_DESCRIPTION_SUCCESS,
    data,
  }
};

export function fetchDescription({ descriptions }) {
  return dispatch => {
    let { resource_uri: url } = descriptions[0];

    fetch(getEntrypointFor('root', url))
      .then(r => r.json())
      .then(d => {
        dispatch(setStatus({
          status: NULL_STATUS,
        }));
        dispatch(fetchDescriptionSuccess(d));
      }).catch(e => {
        dispatch(setStatus({
          status: NETWORK_ERROR,
          message: NETWORK_ERROR_MESSAGE
        }));
      });
  }
};
