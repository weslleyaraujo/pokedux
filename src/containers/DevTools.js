import React from 'react';

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
  <DockMonitor
        defaultIsVisible={false}
        toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-q'
        defaultPosition='left'>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);

export default DevTools;
