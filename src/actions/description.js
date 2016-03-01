import { ajax } from 'jquery';
import { setStatus } from './status';
import getEntrypointFor from 'helpers/get-entrypoint-for';

import {
  NULL_STATUS,
  NETWORK_ERROR,
  NETWORK_ERROR_MESSAGE,
}  from 'constants/status';

import {
  FETCH_DESCRIPTION_SUCCESS,
} from 'constants/actionTypes';

export function fetchDescription(data) {
  let { descriptions } = data;

  return dispatch => {
    let { resource_uri: url } = descriptions[0];
    let request = ajax(getEntrypointFor('root', url));

    request.then(d => {
      dispatch(fetchDescriptionSuccess(d));
      dispatch(setStatus({
        status: NULL_STATUS,
        message: NULL_STATUS,
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

export function fetchDescriptionSuccess(data) {
  return {
    type: FETCH_DESCRIPTION_SUCCESS,
    data,
  };
};
