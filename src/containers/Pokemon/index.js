import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as pokemonActions from '../../actions/pokemon';

function mapStateToProps({ pokemon }) {
  return {
    pokemon,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonActions, dispatch)
  }
}

class Pokemon extends Component {

  componentDidMount() {
    let { id } = this.props.params;
    let { actions } = this.props;
    actions.fetchPokemon({ id });
  }

  render() {
    let { name, image } = this.props.pokemon;
    let { id } = this.props.params;
    let { goBack } = this.props.history;

    return (
      <div>
        <h2>{name}</h2>
        <img src={image}
          alt={name} />
        <a onClick={goBack} >Return</a>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);

