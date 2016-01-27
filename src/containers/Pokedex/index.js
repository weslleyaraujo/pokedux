import React, { Component, PropTypes } from 'react';
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
    pokemons: pokedex.pokemons,
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
  }

  hasFilter() {
    let { value } = this.props.filter;
    return !!value.length;
  }

  onPaginatorClick({ selected }) {
    let { actions, pokemons } = this.props;

    actions.changePage({
      currentPage: !selected ? 1 : (selected + 1),
      pokemons,
    });
  }

  render() {
    let { list, page, pageNum } = this.props;
    let hasFilter = this.hasFilter();

    return (
      <div>
        <PokedexList list={hasFilter ? list : page} />
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
  pokemons: PropTypes.array.isRequired,
  page: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);

