import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GridList } from 'material-ui';

import { invertColor, getRandomColor } from '../../helpers/color-utils';
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

class Pokedex extends Component {

  componentDidMount() {
    let { actions } = this.props;
    actions.fetchPokedex();
  }

  renderItem(props) {
    const bgColor = getRandomColor();
    return (<PokedexItem {...props} bgColor={bgColor} color={invertColor(bgColor)} />);
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

