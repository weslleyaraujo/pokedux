import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';
import { random, times } from 'lodash';
import { LinearProgress } from 'material-ui';

import styles from './Status.css';
import { NULL_STATUS, NETWORK_ERROR } from '../../constants/status'

// TODO: update to something more smart than this.
const images = times(4).map((x) => require(`./images/0${x}.gif`));

function singlePreload(src) {
  return new Promise((resolve, reject) => {
    fetch(src)
      .then(resolve)
      .catch(reject);
  });
}

// TODO: handle 1 single image failed
class Status extends Component {

  state = {
    images,
    actual: 0,
    loaded: false,
  };

  componentDidMount() {
    let promises = this.state.images.map((x) => singlePreload(x));

    Promise
      .all(promises)
      .then(::this.onImagesLoaded);
  }

  componentWillReceiveProps() {
    this.setState({
      actual: random(0, images.length - 1)
    });
  }

  onFailImage() {
    // TODO: handle all image failed
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

    return (<img src={src} />);
  }

  shouldShowImage() {
    const { loaded } = this.state;
    const { status } = this.props;

    return loaded && status !== NETWORK_ERROR;
  }

  render() {
    const { message, status } = this.props;
    const className = status !== NULL_STATUS ? styles.active : styles.root;

    return (
      <div className={className} >
        <LinearProgress mode="indeterminate" />
        {message && <p>{message}</p>}
        <div>
          {this.shouldShowImage() && this.renderImage()}
        </div>
      </div>
    );
  }
}

export default Status;
