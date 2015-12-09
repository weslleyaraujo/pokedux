import { combineReducers } from 'redux';

import * as actionTypes from '../constants/actionTypes';
import pokedex from './pokedex';

export default combineReducers({
  pokedex
});
