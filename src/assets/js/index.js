import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import App from './containers/App';
import store from './store';

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>

    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,

  document.querySelector('#app')
);
