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
    actions: bindActionCreators(pokemonsActions, dispatch),
  }
}

class Pokedex extends Component {

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

  onPaginatorClick({ selected: currentPage }) {
    let { actions } = this.props;
    actions.changePage({
      currentPage: !currentPage ? 1 : (currentPage + 1),
      pokemons,
    });
  }

  render() {
    let { pageNum } = this.state;
    let { list, pokemons } = this.props;
    let hasFilter = this.hasFilter();

    return (
      <div>
        <PokedexList list={hasFilter ? list : pokemons} />
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

