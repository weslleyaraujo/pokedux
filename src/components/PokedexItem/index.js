import React, { Component } from 'react';
import styles from './PokedexItem.css';


const PokedexItem = ({
  bgColor,
  color,
  image,
  name,
  id,
}) => (
  <li className={styles.root} style={{ backgroundColor: bgColor, color }}>
    <p>{name}</p>
    <img className={styles.image} src={`${image}${id}.png`} />
  </li>
);

export default PokedexItem;
