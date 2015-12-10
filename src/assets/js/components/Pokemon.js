import React, { Component } from 'react';

class Pokemon extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        Hello from Pokemon
      </div>
    );
  }
}

export default Pokemon;
