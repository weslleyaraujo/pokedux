import { createStore, applyMiddleware, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  devTools(),
  reduxReactRouter({ createHistory })
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store;
