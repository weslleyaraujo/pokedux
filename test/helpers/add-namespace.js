import { expect } from 'chai';
import addNamespace from '../../src/helpers/add-namespace';

describe('#helpers/add-namespace', () => {

  describe('#add-namespace', () => {
    it('adds a namespace with two hiffens into all keys in a object',() => {
      let properties = {
        foo: 'baz'
      };

      let namespace = 'bar';
      let result = addNamespace(properties, namespace);
      let expected = 'bar--foo';

      expect(result).to.have.property('bar--foo');
      expect(result[expected]).to.equal(properties.foo);
    });

  });

});

