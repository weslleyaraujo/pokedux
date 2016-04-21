import React, { Component, PropTypes, cloneElement } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Paper } from 'material-ui';

import * as pokemonActions from 'actions/pokemon';
import Status from 'components/Status';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Welcome from 'components/Welcome';
import { GITHUB_REPO_URL, TWITTER_PROFILE_URL, TWITTER_PROFILE } from 'constants/appConfig';
import styles from './App.css';

function mapStateToProps({ status, pokemons }) {
  return {
    status,
    pokemons,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonActions, dispatch),
  };
}

class App extends Component {

  onSearchSubmit(data) {
    const { actions, pokemons } = this.props;
    const { push } = this.props.history;
    const { value } = data.target;

    if (value.length < 3 && value.length) {
      return;
    }

    push('/pokedex');
    actions.filterPokemon({
      list: pokemons.list,
      value,
    });
  }

  render() {
    const { status, history } = this.props;
    const { pathname } = this.props.location;
    const welcome = (<Welcome history={history} path="/pokedex" />);

    return (
      <Paper className={styles.root}>
        <Header
          onSearchSubmit={::this.onSearchSubmit}
          searchHint="Search for a pokemon"
          history={history}
          path="/"
        />
          <ReactCSSTransitionGroup
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            component="div"
            transitionName="page-transition"
          >
            {cloneElement(this.props.children || welcome, { key: pathname })}
          </ReactCSSTransitionGroup>
          <Status {...status} />
        <Footer
          github={GITHUB_REPO_URL}
          twitterUrl={TWITTER_PROFILE_URL}
          twitterUsername={TWITTER_PROFILE}
        />
      </Paper>
    );
  }

}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  pokemons: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  status: PropTypes.object.isRequired,
  children: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
