import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './PokedexItem.css';
import PokemonImage from 'components/PokemonImage';

const PokedexItem = ({
  image,
  name,
  id,
  path,
}) => (
  <li className={styles.root}>
    <Link to={path}>
      <p>{name}</p>
      <PokemonImage width={70} src={image} className={styles.image}/>
    </Link>
  </li>
);

export default PokedexItem;
