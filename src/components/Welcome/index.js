import React from 'react';

import styles from './Welcome.css';
import navigate from '../../helpers/navigate';

const Welcome = ({
  history,
  path
}) => (
  <div>
    <div className={styles.root}>
      <div className={styles.upside}>
        <h1>pokedux</h1>
        <p>Pokedex App built with React and Redux.</p>
        <div className={styles.line}>
          <button className={styles.outer}
            onClick={navigate(history, path)}>
            <div className={styles.inner}></div>
          </button>
        </div>
      </div>
      <div className={styles.downside}>
      </div>
    </div>
  </div>
);

export default Welcome;
