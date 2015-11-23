import React from 'react';
import { createStore, applyMiddleware } from 'redux';

let loadPokemons = () => {
  return {
    type: 'LOAD_POKEMONS'
  }
}

let pokeReducer = (store, action) => {
  return store;
}

let pokeStore = createStore(pokeReducer);


