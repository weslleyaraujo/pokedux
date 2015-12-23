import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';
import { Link } from 'react-router';
import { AppBar, FontIcon, RaisedButton, Paper } from 'material-ui';

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
        <header>
          <AppBar 
            iconElementLeft={<FontIcon className="muidocs-icon-action-home" />}
            title={<span style={{ fontWeight: 300 }}>pokedux</span>}>
          </AppBar>
        </header>

        <Paper style={{ padding: '20px', textAlign: 'center' }}>
          <p> Ipsum dolor ipsa ut ex tempore reprehenderit ut natus? Excepturi.  </p>
          {this.props.children || <RaisedButton label="Visit Pokedex" secondary={true} />}
        </Paper>

        <Status {...status} />

        <Paper style={{ marginTop: '20px', padding: '20px' }}>
          <small>just learning some redux</small>
        </Paper>
      </div>
    );
  }

}

App.propTypes = {
  status: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
