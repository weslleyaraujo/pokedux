import React, { Component } from 'react';

const PokemonListItem = ({
  name,
  image,
  onClick
}) => (
  <li>
    {name} - {image}
    <button onClick={onClick} >Take a better look into it.</button>
  </li>
);

export default PokemonListItem;
