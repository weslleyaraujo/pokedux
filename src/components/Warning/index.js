import React from 'react';
import styles from './Warning.css';
import { FaExclamationTriangle } from 'react-icons';

const Warning = ({
  text,
}) => (
  <div className={styles.root}>
    <h2 className={styles.title}>
      {text}
      <FaExclamationTriangle className={styles.iconRight}/>
    </h2>
  </div>
);

export default Warning;


