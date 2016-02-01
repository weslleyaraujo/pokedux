import React, { Component, PropTypes } from 'react';
import { bind as bindKey } from 'mousetrap';
import { chunk } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GridList } from 'material-ui';

import * as pokemonsActions from '../../actions/pokemons';
import PokedexList from '../../components/PokedexList';
import PokedexItem from '../../components/PokedexItem';
import Paginator from '../../components/Paginator';

function mapStateToProps({ pokedex, filter }) {
  return {
    pokedex,
    pageNum: pokedex.pageNum,
    page: pokedex.page,
    filter: filter,
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
    actions.fetchPokedex();

    bindKey('left', ::this.onKeyPressed);
    bindKey('right', ::this.onKeyPressed);
  }

  onKeyPressed(event, shortcut) {
    console.log(this, shortcut);
  }

  hasFilter() {
    let { value } = this.props.filter;
    return !!value.length;
  }

  onPaginatorClick({ selected }) {
    let { actions, pokedex } = this.props;

    actions.changePage({
      currentPage: !selected ? 1 : (selected + 1),
      pokemons: pokedex.pokemons,
    });
  }

  render() {
    let { filter, page, pokedex, pageNum } = this.props;
    let hasFilter = this.hasFilter();

    return (
      <div>
        <PokedexList list={hasFilter ? filter.list : page} />
        {!hasFilter &&
          <Paginator
            pageNum={pageNum}
            onClick={::this.onPaginatorClick} />
          }
      </div>
    );
  }
};

Pokedex.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);

