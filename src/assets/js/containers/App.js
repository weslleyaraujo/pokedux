import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pokemonsActions from '../actions/pokemons';
import PokemonList from '../components/PokemonList';

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons
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
    const { pokemons } = this.props;
    return (
      <div>
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
