import { expect } from 'chai';
import { pokemon, INITIAL_STATE } from '../../src/assets/js/reducers/pokemon';
import * as actionTypes from '../../src/assets/js/constants/actionTypes'

describe('#reducers/pokemon', () => {

  describe('#pokemon', () => {
    it('returns the default pokemon',() => {
      let result = pokemon(INITIAL_STATE, true);
      expect(result).to.equal(INITIAL_STATE);
    });

    it('returns the state with the passed message',() => {
      let id = 10;
      let data = {
        name: 'foo',
        resource_uri: `/some/example/${id}/`
      };

      let result = pokemon(data);

      expect(result).to.have.property('image');
      expect(result.image).to.contain(id);
      expect(result.name).to.equal(data.name);
    });

  });

});

