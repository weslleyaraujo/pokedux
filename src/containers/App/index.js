import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';
import { Link } from 'react-router';
import { AppBar, FontIcon } from 'material-ui';

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
        <AppBar 
          iconElementLeft={<FontIcon className="muidocs-icon-action-home" />}
          title={<span style={{ fontWeight: 300 }}>pokedux</span>}>
        </AppBar>

        <FontIcon className="muidocs-icon-action-home" />

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
