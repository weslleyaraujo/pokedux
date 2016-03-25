import { expect } from 'chai';
import * as actionTypes from '../../src/constants/actionTypes'
import * as statusActions from '../../src/actions/status';

describe('#actions/status', () => {

  describe('#setStatus', () => {
    it('returns an simple action creator',() => {
      let result = statusActions.setStatus();
      expect(result).to.have.property('type');
      expect(result).to.have.property('data');
    });

    it('returns the action type as SET_STATUS',() => {
      let result = statusActions.setStatus()
      expect(result.type).to.equal(actionTypes.SET_STATUS)
    });
  });

});

