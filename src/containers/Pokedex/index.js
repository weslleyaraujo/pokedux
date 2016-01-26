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
    filter: filter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonsActions, dispatch)
  }
}

class Pokedex extends Component {

  state = {
    perPage: 10,
    currentPage: 1
  }

  componentDidMount() {
    let { actions } = this.props;
    actions.fetchPokedex();
  }

  componentWillReceiveProps(props) {
    let { pokemons } = props;
    let { perPage } = this.state;
    let { length: pageNum } = chunk(pokemons, perPage);

    this.setState({
      pageNum,
    });
  }

  hasFilter() {
    let { value } = this.props.filter;
    return !!value.length;
  }

  getCurrentItems() {
    let { pokemons } = this.props;
    let { perPage, currentPage } = this.state;
    let position = currentPage - 1;
    let items = chunk(pokemons, perPage)[position];

    return items ? items : [];
  }

  onPaginatorClick({ selected: currentPage }) {
    this.setState({
      currentPage: !currentPage ? 1 : currentPage + 1
    });
  }

  render() {
    let { pokemons, filter } = this.props;
    let { pageNum } = this.state;
    let hasFilter = this.hasFilter();
    let list = hasFilter ? filter.list : this.getCurrentItems();

    return (
      <div>
        <PokedexList list={list} />
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
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);

