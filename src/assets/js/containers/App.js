import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';

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
    let { actions } = this.props;
    actions.fetchPokedex();
  }

  render() {
    const { pokemons, actions } = this.props;
    return (
      <div>
        <header>
          <h1>Pokedux :)</h1>
        </header>
        {this.props.children}
        <footer>
          <small>just learning some redux</small>
        </footer>
      </div>
    );
  }
}

App.proptypes = {
  pokemons: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
