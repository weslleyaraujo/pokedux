import { ajax, noop } from 'jquery';
import ls from 'local-storage';

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
  const { descriptions } = data;
  const { resource_uri } = descriptions[0];
  const url = getEntrypointFor('root', resource_uri);
  const cache = ls(url);

  return dispatch => {
    if (cache) {
      dispatch(fetchDescriptionSuccess(cache));
      return {
        abort: () => noop,
      }
    }

    const request = ajax(url);

    request.then(d => {
      ls(url, d);
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
