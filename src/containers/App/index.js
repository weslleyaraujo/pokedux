import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { AppBar, FontIcon, RaisedButton, Paper, Tabs, Tab } from 'material-ui';

import Status from '../../components/Status';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Welcome from '../../components/Welcome';
import navigate from '../../helpers/navigate';
import styles from './index.css';

function mapStateToProps({ status }) {
  return {
    status,
  }
}

class App extends Component {

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
          {this.props.children || <Welcome />}
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
