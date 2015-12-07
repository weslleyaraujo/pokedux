import { createStore } from 'redux';

// it will come by a request at: http://pokeapi.co/api/v1/pokedex/
import pokemons from './example.json';

const initialState = { pokemons: pokemons.objects[0].pokemon };

export default createStore((state = initialState, action) => {
  return state;
});
