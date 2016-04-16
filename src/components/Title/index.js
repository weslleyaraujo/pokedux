import React, { PropTypes } from 'react';
import styles from './Title.css';

const Title = ({
  text,
}) => (
  <h2 className={styles.root}> {text} </h2>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
