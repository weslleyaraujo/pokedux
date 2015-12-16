import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pokemonsActions from '../actions/pokemons';
import PokedexItem from '../components/PokedexItem';

function mapStateToProps({ pokedex }) {
  return {
    pokemons: pokedex.pokemons
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonsActions, dispatch)
  }
}

class Pokedex extends Component {

  componentDidMount() {
    let { actions } = this.props;
    actions.fetchPokedex();
  }

  render() {
    let { pokemons } = this.props;
    return (
      <ul>
        {pokemons.map((pokemon, i) => {
          return (<PokedexItem key={i} {...pokemon} />);
        })}
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);

