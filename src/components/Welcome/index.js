import React from 'react';

import styles from './index.css';

const Welcome = () => (
  <div className={styles.root}>
    <div className={styles.upside}>
      <h1>Pokedux</h1>
      <div className={styles.line}>
        <button className={styles.outer}>
          <div className={styles.inner}></div>
        </button>
      </div>
    </div>
    <div className={styles.item}>
    </div>
  </div>
);

export default Welcome;
