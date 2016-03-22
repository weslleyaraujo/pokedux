import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { ReduxRouter } from 'redux-router';
import { createHashHistory } from 'history';


let history = createHashHistory({
  queryKey: false
});

import App from 'containers/App';
import Pokedex from 'containers/Pokedex';
import Pokemon from 'containers/Pokemon';
import configureStore from 'store/configureStore';

let store = configureStore();

render(
  <div>
    <Provider store={store}>
      <Router history={history}>
        <ReduxRouter>
          <Route path="/" component={App}>
            <Route path="/pokedex" component={Pokedex} />
            <Route path="/pokemon/:id" component={Pokemon} />
          </Route>
        </ReduxRouter>
      </Router>
    </Provider>
  </div>,

  document.querySelector('#app')
);
