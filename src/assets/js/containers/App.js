import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pokemonsActions from '../actions/pokemons';
import PokemonList from '../components/PokemonList';

function mapStateToProps({ pokedex }) {
  return {
    pokemons: pokedex.pokemons,
    isLoading: pokedex.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonsActions, dispatch)
  }
}

class App extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchPokedex();
  }

  render() {
    const { pokemons, isLoading } = this.props;
    return (
      <div>
        <h1>Learning Redux with pokemons!</h1>
        {isLoading && 'loading data...'}
        <PokemonList pokemons={pokemons} />
      </div>
    );
  }
}

App.proptypes = {
  pokemons: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
