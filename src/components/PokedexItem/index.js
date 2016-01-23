import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './PokedexItem.css';

const PokedexItem = ({
  image,
  name,
  id,
  path,
}) => (
  <li className={styles.root}>
    <Link to={path}>
      <p>{name}</p>
      <img className={styles.image} src={`${image}${id}.png`} />
    </Link>
  </li>
);

export default PokedexItem;
