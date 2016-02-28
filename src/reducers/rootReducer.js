import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import { pokemons } from './pokemons';
import { status } from './status';
import { pokemon } from './pokemon';
import { filter } from './filter';
import { description } from './description';

export default combineReducers({
  router,
  pokemons,
  status,
  pokemon,
  filter,
  description,
});
