import React, { Component, PropTypes } from 'react';
import { chunk } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pokemonsActions from 'actions/pokemons';
import styles from './Pokedex.css';
import PokedexList from 'components/PokedexList';
import Paginator from 'components/Paginator';
import Warning from 'components/Warning';


function mapStateToProps({ pokemons, filter }) {
  const { value } = filter;

  return {
    list: value.length ? filter.list : pokemons.list,
    noMatches: value.length && !filter.list.length,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonsActions, dispatch),
  };
}

class Pokedex extends Component {

  componentDidMount() {
    const { actions } = this.props;

    actions.fetchPokedex();
  }

  onPaginatorClick({ selected }) {
    this.props.history.push({
      pathname: '/pokedex',
      query: {
        page: selected + 1,
      },
    });
  }

  renderPokedex() {
    const { page } = this.props.location.query;
    const { list } = this.props;
    const blocks = chunk(list, 10); // TODO: change to app constants

    return (
      <div>
        <PokedexList list={blocks[page ? (page - 1) : 0] || []} />
        <Paginator pageNum={blocks.length} onClick={::this.onPaginatorClick} />
      </div>
    );
  }

  render() {
    const { noMatches } = this.props;

    return (
      <div className={styles.root}>
        {noMatches ? <Warning text="Could not find any matches" /> : this.renderPokedex()}
      </div>
    );
  }
}

Pokedex.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  noMatches: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);

