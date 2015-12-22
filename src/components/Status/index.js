import React, { Component } from 'react';
import { NULL_STATUS } from '../../constants/status';
import styles from './index.css';

import pikachu from './images/01.gif';
import other from './images/02.gif';
import another from './images/03.gif';

const images = [
  pikachu,
  other,
  another
];

function singlePreload(src, key, onLoad) {
  return (
    <img
      key={key}
      onLoad={onLoad}
      style={{
        display: 'none'
      }}
     />
  );
}

class Status extends Component {

  preLoadImages() {
    return images.map((x, i) => singlePreload(x, i, (e) => console.log(e)));
  }

  componendDidMount() {
  
  }

  render() {
    const className = status === NULL_STATUS ? styles.common : styles.active;
    const { message } = this.props;
    return (
      <div className={className} >
        {message && <p>{message}</p>}
        {this.preLoadImages()}
      </div>
    );
  }
}

export default Status;
