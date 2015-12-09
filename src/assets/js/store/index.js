import { createStore, applyMiddleware, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store;
