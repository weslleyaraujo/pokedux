import React, { Component } from 'react';
import styles from './PokedexItem.css';
import { invertColor, getRandomColor } from '../../helpers/color-utils';


export default class PokedexItem extends Component {

  state = {
    color: ''
  }

  componentWillMount() {
    let color = getRandomColor();
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    let { image, name, id } = this.props;
    let { color } = this.state;
    return (
      <li className={styles.root} style={{ backgroundColor: color, color: invertColor(color)}}>
        <p>{name}</p>
        <img className={styles.image} src={`${image}${id}.png`}
          alt={name}/>
      </li>
    );
  }
};
