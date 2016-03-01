import React, { Component } from 'react';

const notFoundSrc = require(`./images/not-found.png`);

class PokemonImage extends Component {

  state = {
    isImageLoaded: false,
  }

  componentDidMount() {
    let { src } = this.props;
    this.prepareImage(src);
  }

  componentWillReceiveProps(props) {
    let { src } = props;
    this.prepareImage(src);
  }

  prepareImage(src) {
    this.setState({ isImageLoaded: false });

    if (this.image) {
      this.image.src = '';
    }

    this.image = new Image();
    this.image.onload = () => this.setState({ isImageLoaded: true });
    this.image.src = src;
  }

  componentWillUnmount() {
    this.image.src = '';
  }

  render() {
    let { isImageLoaded, removeImage } = this.state;
    return isImageLoaded ? <img {...this.props} /> : null;
  }

}

export default PokemonImage;
