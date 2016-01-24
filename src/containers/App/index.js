import React, { Component, PropTypes, cloneElement } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Paper } from 'material-ui';

import * as pokemonActions from '../../actions/pokemon';
import Status from '../../components/Status';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Welcome from '../../components/Welcome';
import { GITHUB_REPO_URL, TWITTER_PROFILE_URL, TWITTER_PROFILE } from '../../constants/appConfig';
import styles from './App.css';

function mapStateToProps({ status, pokedex }) {
  return {
    status,
    pokedex,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonActions, dispatch)
  }
}

class App extends Component {

  onAutoCompleteRequest(search) {
    let { actions } = this.props;
    actions.searchPokemon(search);
  }

  render() {
    let { status, history } = this.props;
    let { pathname } = this.props.location;
    let { pokemons } = this.props.pokedex;

    return (
      <Paper className={styles.root}>
        <Header
          onAutoCompleteRequest={::this.onAutoCompleteRequest}
          autoCompleteHint='Search for a pokemon'
          autoCompleteSource={pokemons.map(p => p.name)}
          history={history}
          path='/'/>

        <Paper style={{
          padding: '20px',
          textAlign: 'center',
          minHeight: '30vh'
        }}>
          <ReactCSSTransitionGroup
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            component='div'
            transitionName='page-transition'>
              {cloneElement(this.props.children || <Welcome history={history} path='/pokedex'/>, { key: pathname })}
          </ReactCSSTransitionGroup>
          <Status {...status} />
        </Paper>
        <Footer
          github={GITHUB_REPO_URL}
          twitterUrl={TWITTER_PROFILE_URL}
          twitterUsername={TWITTER_PROFILE}/>
      </Paper>
    );
  }

}

App.propTypes = {
  status: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
