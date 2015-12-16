import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pokemonActions from '../actions/pokemon';

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
    console.log('did mount', this.props.pokemon);
    actions.fetchPokemon({ id });
  }

  render() {
    let { name, image } = this.props.pokemon;
    return (
      <div>
        Hey there from pokemon! {name} 
        <img src={image} alt={name} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);

