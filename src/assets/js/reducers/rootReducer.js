import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import pokedex from './pokedex';

export default combineReducers({
  pokedex,
  router,
});
