import React from 'react';
import { Link } from 'react-router';
import { GridTile } from 'material-ui';

// TODO: use a css-config variable instead
const gradientBg = 'rgba(0, 0, 0, 0.4)';

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
