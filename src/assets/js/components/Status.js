import React from 'react';
import * as statusConstans from '../constants/status';

// TODO: remove me, just to see how its going to work on screen
let style = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%'
};

const Status = ({
  status,
  message
}) => (
  <div style={{ style }}>
    {status} - {message}
  </div>
);

export default Status;
