import { ajax } from 'jquery';
import * as actionTypes from 'constants/actionTypes';
import { setStatus } from './status';
import getEntrypointFor from 'helpers/get-entrypoint-for';
import { fetchPokemonSuccess } from 'actions/pokemon';

import {
  NULL_STATUS,
  NETWORK_ERROR,
  NETWORK_ERROR_MESSAGE
}  from 'constants/status';

export function fetchDescription(data) {
  let { descriptions } = data;

  return dispatch => {
    let { resource_uri: url } = descriptions[0];
    let request = ajax(getEntrypointFor('root', url));

    request.then(({ description }) => {
      dispatch(setStatus({
        status: NULL_STATUS,
        message: NULL_STATUS,
      }));

       dispatch(fetchPokemonSuccess({
         ...data,
         description,
       }));
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
};
