import React, { Component } from 'react';

const Pokemon = ({
  name,
  image,
  onClick
}) => (
  <li>
    {name}
    <img src={image} alt={name} />
    <button onClick={onClick} >Take a better look into it.</button>
  </li>
);

export default Pokemon;
