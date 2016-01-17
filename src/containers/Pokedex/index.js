import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GridList } from 'material-ui';

import * as pokemonsActions from '../../actions/pokemons';
import PokedexItem from '../../components/PokedexItem';
import styles from './Pokedex.css';

function mapStateToProps({ pokedex }) {
  return {
    pokemons: pokedex.pokemons
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonsActions, dispatch)
  }
}

const gridStyles = {
  maxWidth: 560,
  overflowY: 'auto',
  margin: '0 auto'
};

class Pokedex extends Component {

  componentDidMount() {
    let { actions } = this.props;
    actions.fetchPokedex();
  }

  render() {
    let { pokemons } = this.props;
    return (
      <div>
        <ul className={styles.list}>
          {pokemons.map((p, i) => <PokedexItem key={i} {...p} />)}
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

