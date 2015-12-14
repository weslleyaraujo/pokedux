import React, { Component } from 'react';

class Pokedex extends Component {

  render() {
    let { pokemons } = this.props;
    console.log('pokdex', this.props);
    return (
      <div> Hello from pokedex</div>
    );
  }
}

export default Pokedex;

      // <ul>
      //   {pokemons.map((pokemon, i) => {
      //     return (<PokedexItem key={i} {...pokemon} />);
      //   })}
      // </ul>
