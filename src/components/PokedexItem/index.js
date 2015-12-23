import React from 'react';
import { Link } from 'react-router';

import styles from './index.css';

const PokedexItem = ({
  name,
  id
}) => (
  <li className={styles.root}>
    <Link to={`/pokemon/${id}`}>{name}</Link>
  </li>
);

export default PokedexItem;
