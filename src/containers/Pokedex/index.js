import React, { Component, PropTypes } from 'react';
import ReactPaginator from 'react-paginate';
import { chunk } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GridList } from 'material-ui';

import * as pokemonsActions from '../../actions/pokemons';
import PokedexList from '../../components/PokedexList';
import PokedexItem from '../../components/PokedexItem';

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

  getCurrentItems() {
    let { pokemons, filter } = this.props;
    let { perPage, currentPage } = this.state;
    let position = currentPage - 1;

    if (filter.length) {
      return filter;
    }

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
    let list = this.getCurrentItems();

    return (
      <div>
        <PokedexList list={list} />
        <ReactPaginator
          pageNum={pageNum}
          clickCallback={::this.onPaginatorClick} />
      </div>
    );
  }
};

Pokedex.propTypes = {
  pokemons: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);

