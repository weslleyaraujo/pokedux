import React, { PropTypes } from 'react';
import styles from './Warning.css';
import { FaExclamationTriangle } from 'react-icons';

const Warning = ({
  text,
}) => (
  <div className={styles.root}>
    <h2 className={styles.title}>
      {text}
      <FaExclamationTriangle className={styles.iconRight} />
    </h2>
  </div>
);

Warning.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Warning;

