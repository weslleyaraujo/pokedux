import React, { Component, PropTypes, cloneElement } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Paper, Styles } from 'material-ui';

console.log(Styles);

import Status from '../../components/Status';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Welcome from '../../components/Welcome';
import styles from './App.css';

function mapStateToProps({ status }) {
  return {
    status,
  }
}

// TODO: Re-add status componenet
// <Status {...status} />
class App extends Component {

  render() {
    let { status, history } = this.props;
    let { pathname } = this.props.location;

    return (
      <Paper className={styles.root}>
        <Header history={history}/>

        <Paper style={{
          padding: '20px',
          textAlign: 'center',
          minHeight: '30vh'
        }}>
          <ReactCSSTransitionGroup
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            component="div"
            transitionName="page-transition">
              {cloneElement(this.props.children || <Welcome history={history}/>, { key: pathname })}
          </ReactCSSTransitionGroup>

        </Paper>

        <Footer />
      </Paper>
    );
  }

}

App.propTypes = {
  status: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
