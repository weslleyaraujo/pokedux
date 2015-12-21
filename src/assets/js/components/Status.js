import React from 'react';
import * as statusConstans from '../constants/status';
import styles from '../../css/components/Status.css'

// TODO: remove me, just to see how its going to work on screen
let style = {
};

const Status = ({
  status,
  message
}) => (
  <div className={styles.root}>
    {status} - {message}
  </div>
);

export default Status;
