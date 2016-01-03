import { expect } from 'chai';
import getPokemonId from '../../src/helpers/get-pokemon-id';

describe('#helpers/get-pokemon-id', () => {

  describe('#get-pokemon-id', () => {
    it('returns the pokemon id from the pokeapi url',() => {
      let uri = '/some/url/';
      let id = '10';

      expect(getPokemonId(`${uri}${id}`)).to.equal(id);
    });
  });

});

