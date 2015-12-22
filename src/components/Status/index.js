import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

import styles from './index.css';

import pikachu from './images/01.gif';
import other from './images/02.gif';
import another from './images/03.gif';

const images = [
  pikachu,
  other,
  another,
];

function singlePreload(src) {
  return new Promise((resolve, reject) => {
    fetch(src)
      .then(resolve)
      .catch(reject);
  });
}

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images,
      loaded: false
    }
  }

  componentDidMount() {
    let promises = this.state.images.map((x) => singlePreload(x));

    Promise.all(promises)
      .then(::this.onLoadImages);
  }

  onFailImage() {
    console.log('whoops, some image failed');
  }

  onLoadImages(events) {
    this.setState({
      loaded: true
    });
  }

  renderImage() {
    let { images  } = this.state;
    let src = images[0];

    return (
      <img
        src={src}
      />
    );
  }

  render() {
    const className = !status ? styles.common : styles.active;
    const { message } = this.props;
    const { loaded } = this.state;

    console.log(className, status);

    return (
      <div className={className} >
        {message && <p>{message}</p>}
        <div>
          { loaded ? this.renderImage() : '' }
        </div>
      </div>
    );
  }
}

export default Status;
