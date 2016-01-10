import { expect } from 'chai';
import navigate from '../../src/helpers/navigate';

let history = { push: () => {} };

describe('#helpers/navigate', () => {

  describe('#navigate', () => {
    describe('when the history is defined', () => {
      it('returns a function handler',() => {
        let path = '/';
        expect(navigate(history, path,)).to.be.a.function;
      });
    });

    describe('when the history is not defined', () => {
      it('throws an error',() => {
        let path = '/';
        // TODO: verify it there was an error here.
      });
    });
  });

});

