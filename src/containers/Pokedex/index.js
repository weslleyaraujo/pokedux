import React, { Component, PropTypes } from 'react';
import { bind as bindKey } from 'mousetrap';
import { chunk } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pokemonsActions from '../../actions/pokemons';
import PokedexList from '../../components/PokedexList';
import PokedexItem from '../../components/PokedexItem';
import Paginator from '../../components/Paginator';

function mapStateToProps({ pokemons, filter }) {
  let { list } = pokemons;

  return {
    list,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonsActions, dispatch),
  }
}

function getCurrentList(list, page) {
  if (!list.length) {
    return [];
  }

  return ;
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

  render() {
    let { page } = this.props.location.query;
    let { list } = this.props;
    let blocks = chunk(list, 10);

    return (
      <div>
        <PokedexList list={blocks[page ? (page - 1) : 0] || []} />
        <Paginator pageNum={blocks.length} onClick={::this.onPaginatorClick} />
      </div>
    );
  }
};

Pokedex.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);

