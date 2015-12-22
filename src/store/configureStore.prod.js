import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ createHistory })
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
