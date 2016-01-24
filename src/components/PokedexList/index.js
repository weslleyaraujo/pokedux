import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './PokedexList.css';
import PokedexItem from '../PokedexItem';

const PokedexList = ({
  list,
}) => (
  <ul className={styles.root}>
    {list.map((p, i) => <PokedexItem {...p} key={i} />)}
  </ul>
);

PokedexList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default PokedexList;
