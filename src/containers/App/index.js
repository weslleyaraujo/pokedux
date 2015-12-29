import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { AppBar, FontIcon, RaisedButton, Paper, Tabs, Tab } from 'material-ui';

import Status from '../../components/Status';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import navigate from '../../helpers/navigate';
import styles from './index.css';

function mapStateToProps({ status }) {
  return {
    status,
  }
}

class App extends Component {

  renderContent() {
    let { history } = this.props;
    return (
        <div>
          <p>Pokedux is an open source project created with studies motives. </p>
          <p>It uses the <a href="http://pokeapi.co" target="_blank">PokeAPI</a> in order to fetch all the data, and it was build </p>
          <p>using top technologies such as <a href="#">React</a>/<a href="#">Redux.</a> and a bunch of awesome stuff.</p>
          <p>All the code is hosted at Github, feel free to use it! </p>
          <RaisedButton label="FULL POKEDEX" secondary={true} onClick={navigate.bind(null, history, 'pokedex')}/>
        </div>
    );
  }

  render() {
    let { status, history } = this.props;
    return (
      <Paper className={styles.root}>
        <Header history={history}/>

        <Paper style={{
          padding: '20px',
          textAlign: 'center',
          minHeight: '30vh'
        }}>
          {this.props.children || this.renderContent()}
        </Paper>

        <Status {...status} />

        <Footer />

      </Paper>
    );
  }

}

App.propTypes = {
  status: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
