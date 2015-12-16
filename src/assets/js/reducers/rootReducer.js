import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import { pokedex } from './pokedex';
import { status } from './status';
import { pokemon } from './pokemon';

export default combineReducers({
  router,
  pokedex,
  status,
  pokemon,
});
