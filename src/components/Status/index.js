import React from 'react';
import { NULL_STATUS } from '../../constants/status';
import styles from './index.css';

const Status = ({
  status,
  message
}) => {
  const className = status === NULL_STATUS ? styles.common : styles.active;
  return (
    <div className={className} >
      {message && <p>{message}</p>}
    </div>
  )
}

export default Status;
