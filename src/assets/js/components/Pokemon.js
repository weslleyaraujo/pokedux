import React, { Component } from 'react';

const Pokemon = ({
  name,
  onClick
}) => (
  <li>
    {name}
    <button onClick={onClick} >Take a better look into it.</button>
  </li>
);

export default Pokemon;
