import React from 'react';
import { Link } from 'react-router';

const PokedexItem = ({
  name,
  id
}) => (
  <li>
    <Link to={`/pokemon/${id}`}>{name}</Link>
  </li>
);

export default PokedexItem;
