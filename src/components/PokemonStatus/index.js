import React from 'react';
import styles from './PokemonStatus.css';
import { FaHandGrabO, FaShield, FaBarChart, FaSmileO, FaArrowsV, FaHeart } from 'react-icons';

const Item = ({
  label,
  icon,
  value,
}) => (
  <tr>
    <td>{icon}</td>
    <td className={styles.label}>{label}</td>
    <td>{value}</td>
  </tr>
);

const PokemonStatus = ({
  attack,
  catch_rate,
  defense,
  exp,
  happiness,
  height,
  hp,
  image,
  name,
  description,
}) => (
  <div className={styles.root}>
    <table className={styles.table}>
      <Item
        icon={<FaHandGrabO />} label={'Attack'} value={attack} />
      <Item
        icon={<FaShield />} label={'Defense'} value={defense} />
      <Item
        icon={<FaBarChart />} label={'Catch Rate'} value={catch_rate} />
      <Item
        icon={<FaSmileO />} label={'Happiness'} value={happiness} />
      <Item
        icon={<FaArrowsV />} label={'Height'} value={height} />
      <Item
        icon={<FaHeart />} label={'HP'} value={hp} />
    </table>
  </div>
);

export default PokemonStatus;
