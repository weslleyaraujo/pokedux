import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Router, Route } from 'react-router';
import { ReduxRouter } from 'redux-router';
import { createHashHistory } from 'history';

let history = createHashHistory({
  queryKey: false
});

import App from './containers/App';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';
import configureStore from './store/configureStore';

let store = configureStore();

render(
  <div>
    <Provider store={store}>
      <Router history={history}>
        <ReduxRouter>
          <Route path="/" component={App}>
            <Route path="pokedex" component={Pokedex}>
              <Route path="pokemon" component={Pokemon} />
            </Route>
          </Route>
        </ReduxRouter>
      </Router>
    </Provider>

    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,

  document.querySelector('#app')
);
