import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';
import { Link } from 'react-router';

import Status from '../../components/Status'

function mapStateToProps({ status }) {
  return {
    status,
  }
}

class App extends Component {

  render() {
    let { status } = this.props;
    return (
      <div>
        <Status {...status} />
        <header>
          <h1>Pokedux</h1>
          <h2>A study case built with redux!</h2>
        </header>
        {this.props.children || <Link to="pokedex">Take a look into the pokedex!</Link>}
        <footer>
          <small>just learning some redux</small>
        </footer>
      </div>
    );
  }

}

App.propTypes = {
  status: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
