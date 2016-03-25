import { expect } from 'chai';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import nock from 'nock';

import * as pokemonsActions from '../../src/actions/pokemons';
import * as actionTypes from '../../src/constants/actionTypes'
import * as statusConstants from '../../src/constants/status';
import { POKEAPI_ROOT_URL, POKEAPI_POKEDEX_URL } from '../../src/constants/services';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

describe('#actions/pokemons', () => {

  describe('#fetchPokedexSuccess', () => {
    it('returns an simple action creator',() => {
      let result = pokemonsActions.fetchPokedexSuccess();
      expect(result).to.have.property('type');
      expect(result).to.have.property('data');
    });

    it('returns the action type as FETCH_POKEDEX_SUCCESS',() => {
      let result = pokemonsActions.fetchPokedexSuccess()
      expect(result.type).to.equal(actionTypes.FETCH_POKEDEX_SUCCESS)
    });
  });

  describe('#fetchPokedex', () => {
    afterEach(() => {
      nock.cleanAll()
    });

    it('reurns a thunk action',() => {
      let result = pokemonsActions.fetchPokedex()
      expect(result).to.be.a.function;
    });

    it('dispatch listed action after successfully get data from pokeapi.', (done) => {
      nock(POKEAPI_ROOT_URL)
        .get(POKEAPI_POKEDEX_URL)
        .reply(200, {});

      const expectedActions = [
        {
          type: actionTypes.SET_STATUS,
          data: {
            status: statusConstants.LOADING_STATUS,
            message: statusConstants.LOADING_STATUS_MESSAGE
          }
        },
        {
          type: actionTypes.SET_STATUS,
          data: {
            status: statusConstants.NULL_STATUS
          }
        },
        {
          type: actionTypes.FETCH_POKEDEX_SUCCESS,
          data: {}
        },
      ];

      const store = mockStore({}, expectedActions, done);
      store.dispatch(pokemonsActions.fetchPokedex());
    });

    it('dispatch listed actions whenever an error occurs.', (done) => {
      nock(POKEAPI_ROOT_URL)
        .get(POKEAPI_POKEDEX_URL)
        .replyWithError();

      const expectedActions = [
        { type: actionTypes.SET_STATUS,
          data: {
            status: statusConstants.LOADING_STATUS,
            message: statusConstants.LOADING_STATUS_MESSAGE
          }
        },
        { type: actionTypes.SET_STATUS,
          data: {
            status: statusConstants.NETWORK_ERROR,
            message: statusConstants.NETWORK_ERROR_MESSAGE
          }
        },
      ];

      const store = mockStore({}, expectedActions, done);
      store.dispatch(pokemonsActions.fetchPokedex());
    });

  });

});

