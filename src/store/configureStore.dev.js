import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import thunk from 'redux-thunk';

import rootReducer from 'reducers/rootReducer';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ createHistory }),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore);

const root = 'reducers/rootReducer'

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(root, () => {
      const nextRootReducer = require(root)
      store.replaceReducer(nextRootReducer)
    });
  }

  return store
}
