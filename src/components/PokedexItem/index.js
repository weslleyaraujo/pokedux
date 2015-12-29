import React from 'react';
import { Link } from 'react-router';
import { GridTile } from 'material-ui';

const gradientBg = 'rgba(0, 0, 0, 0.4)';

// <Link to={`/pokemon/${id}`}>{name}</Link>

const PokedexItem = ({
  image,
  name,
  id,
}) => (
  <GridTile
    title={name}
    titleBackground={gradientBg}
  >
    <img src={`${image}${id}.png`} />
  </GridTile>
);

export default PokedexItem;
