import React, { PropTypes } from 'react';
import styles from './PokedexList.css';
import PokedexItem from 'components/PokedexItem';

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
