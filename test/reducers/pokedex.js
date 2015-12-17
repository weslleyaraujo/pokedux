import { expect, use } from 'chai';
import { pokedex, INITIAL_STATE } from '../../src/assets/js/reducers/pokedex';
import * as actionTypes from '../../src/assets/js/constants/actionTypes'

describe('#reducers/pokedex', () => {

  describe('#pokedex', () => {
    it('returns the default pokedex',() => {
      let result = pokedex(INITIAL_STATE, {
        type: 'SOME_UNKNOW_ACTION'
      });
      expect(result).to.equal(INITIAL_STATE);
    });

    it('returns the state with the passed message',() => {
      let data = {
        objects: [
          {
            pokemon: [
              {
                name: 'foo',
                resource_uri: 'bar'
              }
            ]
          }
        ]
      };

      let result = pokedex(INITIAL_STATE, {
        type: actionTypes.FETCH_POKEDEX_SUCCESS,
        data
      });

      expect(result).to.have.property('pokemons').with.length(1);
    });

  });

});

