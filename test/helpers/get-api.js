import { expect } from 'chai';
import { POKEAPI_ROOT_URL } from '../../src/constants/services';
import getPokeApiUrl from '../../src/helpers/get-api';

describe('#helpers/get-api', () => {

  describe('#get-api', () => {
    describe('when the path is defined', () => {
      it('returns the api root with + the argument path',() => {
        let path = '/foo';
        let expected = POKEAPI_ROOT_URL + path;

        expect(getPokeApiUrl(path)).to.equal(expected);
      });
    });

    describe('when the path is empty', () => {
      it('returns the api root',() => {
        let path = '';
        let expected = POKEAPI_ROOT_URL;

        expect(getPokeApiUrl(path)).to.equal(expected);
      });
    });

  });

});

