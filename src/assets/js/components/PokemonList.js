import React, { Component } from 'react';

import PokemonListItem from './PokemonListItem';

class PokemonList extends Component {

  render() {
    let { pokemons } = this.props;
    return (
      <ul>
        {pokemons.map((pokemon, i) => {
          return (<PokemonListItem key={i} {...pokemon} />);
        })}
      </ul>
    );
  }
}

export default PokemonList;
