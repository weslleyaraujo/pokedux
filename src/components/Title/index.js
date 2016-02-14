import React from 'react';
import styles from './Title.css';

const Title = ({
  text,
}) => (
  <h2 className={styles.root}> {text} </h2>
);

export default Title;
