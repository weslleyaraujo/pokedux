import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';
import { random, times } from 'lodash';

import styles from './index.css';
import { NULL_STATUS } from '../../constants/status'

// TODO: update to something more smart than this.
const images = times(4).map((x) => require(`./images/0${x}.gif`));

function singlePreload(src) {
  return new Promise((resolve, reject) => {
    fetch(src)
      .then(resolve)
      .catch(reject);
  });
}

class Status extends Component {

  state = {
    images,
    actual: 0,
    loaded: false
  }

  componentDidMount() {
    let promises = this.state.images.map((x) => singlePreload(x));

    Promise.all(promises)
      .then(::this.onImagesLoaded);
  }

  componentWillReceiveProps() {
    this.setState({
      actual: random(0, images.length - 1)
    });
  }

  onFailImage() {
    console.log('whoops, some image failed');
  }

  onImagesLoaded(events) {
    this.setState({
      loaded: true
    });
  }

  renderImage() {
    let { images, actual  } = this.state;
    let src = images[actual];

    return (
      <img src={src} />
    );
  }

  render() {
    const { message, status } = this.props;
    const { loaded } = this.state;
    const className = status !== NULL_STATUS ? styles.active : styles.common;

    return (
      <div className={className} >
        {message && <p>{message}</p>}
        <div>
          {loaded ? this.renderImage() : ''}
        </div>
      </div>
    );
  }
}

export default Status;
