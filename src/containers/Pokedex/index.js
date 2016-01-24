import React, { Component, PropTypes } from 'react';
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

  componentDidMount() {
    let { actions } = this.props;
    actions.fetchPokedex();
  }

  renderItem(props) {
    let { id } = props;
    let path = `/pokemon/${id}`;
    let data = {
      ...props,
      id,
      path,
    };

    return (<PokedexItem {...data} />);
  }

  render() {
    let { pokemons } = this.props;
    return (
      <div>
        <ul className={styles.list}>
          {pokemons.map((p, i) => this.renderItem({...p, key: i}))}
        </ul>
      </div>
    );
  }
};

Pokedex.propTypes = {
  pokemons: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);

