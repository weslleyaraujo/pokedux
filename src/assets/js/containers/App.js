import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PokemonList from '../components/PokemonList';

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons
  }
}

function mapDispatchToProps() {
  return {
  
  }
}

class App extends Component {
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
  pokemons: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
