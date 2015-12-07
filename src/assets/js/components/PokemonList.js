import React, { Component } from 'react';

import Pokemon from './Pokemon';

class PokemonList extends Component {
  render() {
    const { pokemons } = this.props;

    return (
      <ul>
        {pokemons.map((pokemon, i) => {
          return (<Pokemon key={i} {...pokemon} onClick={() => { console.log('hue') }}/>)
        })}
      </ul>
    );
  }
}

export default PokemonList;
