import React, { Component, PropTypes } from 'react';

class PokemonImage extends Component {

  state = {
    isImageLoaded: false,
  }

  componentDidMount() {
    const { src } = this.props;
    this.prepareImage(src);
  }

  componentWillReceiveProps(props) {
    const { src } = props;
    this.prepareImage(src);
  }

  componentWillUnmount() {
    this.image.src = '';
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

  render() {
    const { isImageLoaded } = this.state;
    const { alt } = this.props;
    return isImageLoaded ? <img {...this.props} alt={alt}/> : null;
  }

}

PokemonImage.propTypes = {
  src: PropTypes.string,
};

export default PokemonImage;
