import { expect } from 'chai';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import nock from 'nock';

import * as pokemonActions from '../../src/actions/pokemon';
import * as actionTypes from '../../src/constants/actionTypes'
import * as statusConstants from '../../src/constants/status';
import { POKEAPI_ROOT_URL, POKEAPI_POKEMON_URL } from '../../src/constants/services';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('#actions/pokemon', () => {

  describe('#fetchPokemonSuccess', () => {
    it('returns an simple action creator',() => {
      let result = pokemonActions.fetchPokemonSuccess();
      expect(result).to.have.property('type');
      expect(result).to.have.property('data');
    });

    it('returns the action type as FETCH_POKEMON_SUCCESS',() => {
      let result = pokemonActions.fetchPokemonSuccess()
      expect(result.type).to.equal(actionTypes.FETCH_POKEMON_SUCCESS)
    });
  });

  describe('#fetchPokemon', () => {
    afterEach(() => {
      nock.cleanAll()
    });

    it('reurns a thunk action',() => {
      let result = pokemonActions.fetchPokemon()
      expect(result).to.be.a.function;
    });

    it('dispatch listed action after successfully get data from pokeapi.', (done) => {
      let id = 10;
      nock(POKEAPI_ROOT_URL)
        .get(`${POKEAPI_POKEMON_URL}${id}`)
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
          type: actionTypes.FETCH_POKEMON_SUCCESS,
          data: {}
        },
      ];

      const store = mockStore({}, expectedActions, done);
      store.dispatch(pokemonActions.fetchPokemon({ id }));
    });

    //it('dispatch listed actions whenever an error occurs.', (done) => {
    //  nock(POKEAPI_ROOT_URL)
    //    .get(`POKEAPI_POKEMON_URL/some-id`)
    //    .replyWithError();

    //  const expectedActions = [
    //    { type: actionTypes.SET_STATUS,
    //      data: {
    //        status: statusConstants.LOADING_STATUS,
    //        message: statusConstants.LOADING_STATUS_MESSAGE
    //      }
    //    },
    //    { type: actionTypes.SET_STATUS,
    //      data: {
    //        status: statusConstants.NETWORK_ERROR,
    //        message: statusConstants.NETWORK_ERROR_MESSAGE
    //      }
    //    },
    //  ];

    //  const store = mockStore({}, expectedActions, done);
    //  store.dispatch(pokemonActions.fetchPokemon());
    //});

  });

});

