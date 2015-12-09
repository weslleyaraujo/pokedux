import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// it will come by a request at: http://pokeapi.co/api/v1/pokedex/
import pokemons from './example.json';

// only example of initialState
const initialState = { pokemons: pokemons.objects[0].pokemon };

// only an rootReducer example
const rootReducer = (state = initialState, action) => {
  return state;
};

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store;
