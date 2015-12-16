import { expect, use } from 'chai';
import { status, INITIAL_STATE } from '../../src/assets/js/reducers/status';
import * as actionTypes from '../../src/assets/js/constants/actionTypes'

describe('#reducers/status', () => {

  describe('#status', () => {
    it('returns the default status',() => {
      let result = status(INITIAL_STATE, undefined);
      expect(result).to.equal(INITIAL_STATE);
    });

    it('returns the state with the passed message',() => {
      let data = {
        status: 'foo',
        message: 'bar'
      };

      let result = status(INITIAL_STATE, {
        type: actionTypes.SET_STATUS,
        data
      });

      expect(result).to.have.property('status');
      expect(result.status).to.equal(data.status);

      expect(result).to.have.property('type');
      expect(result.type).to.equal(data.type);
    });

  });

});

