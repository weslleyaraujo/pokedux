import React, { Component } from 'react';

const Pokemon = ({
  name,
  image,
  onClick
}) => (
  <li>
    {name} - {image}
    <button onClick={onClick} >Take a better look into it.</button>
  </li>
);

export default Pokemon;
