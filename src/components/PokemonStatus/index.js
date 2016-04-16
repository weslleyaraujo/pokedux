import React, { PropTypes } from 'react';
import styles from './PokemonStatus.css';
import { FaHandGrabO, FaShield, FaArrowsV, FaHeart } from 'react-icons';

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

Item.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const PokemonStatus = ({
  attack,
  defense,
  height,
  hp,
}) => (
  <div className={styles.root}>
    <table className={styles.table}>
      <tbody>
        <Item
          icon={<FaHandGrabO />} label={'Attack'} value={attack}
        />
        <Item
          icon={<FaShield />} label={'Defense'} value={defense}
        />
        />
        <Item
          icon={<FaArrowsV />} label={'Height'} value={height}
        />
        <Item
          icon={<FaHeart />} label={'HP'} value={hp}
        />
      </tbody>
    </table>
  </div>
);

PokemonStatus.propTypes = {
  attack: PropTypes.string.isRequired,
  defense: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  hp: PropTypes.string.isRequired,
};

export default PokemonStatus;
