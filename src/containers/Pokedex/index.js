import React, { Component, PropTypes } from 'react';
import { bind as bindKey } from 'mousetrap';
import { chunk } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pokemonsActions from '../../actions/pokemons';
import styles from './Pokedex.css';
import PokedexList from '../../components/PokedexList';
import PokedexItem from '../../components/PokedexItem';
import Paginator from '../../components/Paginator';
import Warning from '../../components/Warning';


function mapStateToProps({ pokemons, filter }) {
  let { value } = filter;

  return {
    list: value.length ? filter.list : pokemons.list,
    noMatches: value.length && !filter.list.length,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonsActions, dispatch),
  }
}

class Pokedex extends Component {

  componentDidMount() {
    let { actions } = this.props;
    let { page } = this.props.routeParams;

    actions.fetchPokedex();

    // bindKey('left', ::this.onKeyPressed);
    // bindKey('right', ::this.onKeyPressed);
  }

  onKeyPressed(event, shortcut) {
    console.log(this, shortcut);
  }

  hasFilter() {
    // return this.props.filter.value.length;
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
    let { page } = this.props.location.query;
    let { list } = this.props;
    let blocks = chunk(list, 10); // TODO: change to app constants

    return (
      <div>
        <PokedexList list={blocks[page ? (page - 1) : 0] || []} />
        <Paginator pageNum={blocks.length} onClick={::this.onPaginatorClick} />
      </div>
    );
  }

  render() {
    let { noMatches } = this.props;

    return (
      <div className={styles.root}>
        { noMatches ?  <Warning text='Could not find any matches'/> : this.renderPokedex() }
      </div>
    );
  }
};

Pokedex.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);

