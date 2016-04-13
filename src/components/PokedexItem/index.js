import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './PokedexItem.css';
import PokemonImage from 'components/PokemonImage';

const PokedexItem = ({
  image,
  name,
  path,
}) => (
  <li className={styles.root}>
    <Link to={path}>
      <p>{name}</p>
      <PokemonImage width={70} src={image} className={styles.image} />
    </Link>
  </li>
);


PokedexItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  path: PropTypes.string,
};

export default PokedexItem;
