import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pokemonActions from 'actions/pokemon';
import styles from './Pokemon.css';
import Title from 'components/Title';
import PokemonStatus from 'components/PokemonStatus';

function mapStateToProps({ pokemon }) {
  return {
    pokemon,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonActions, dispatch)
  }
}

class Pokemon extends Component {

  state = {
    requests: [],
  }

  componentDidMount() {
    let { id } = this.props.params;
    let { actions } = this.props;
    this.state.requests.push(actions.fetchPokemon({ id }));
  }

  componentWillUnmount() {
    this.state.requests.forEach(x => x.abort());
  }

  render() {
    let { pokemon } = this.props;
    let { name, image, description } = this.props.pokemon;
    let { id } = this.props.params;
    let { goBack } = this.props.history;

    return (
      <div>
        <div className={styles.topWrap}>
          <div className={styles.titleHolder}>
            <Title text={name} />
          </div>
          <div className={styles.content}>
            <div>
              <p>{description}</p>
            </div>
          </div>
          <PokemonStatus {...pokemon} />
          <img
            className={styles.image}
            src={image}
            alt={name} />
        </div>
        <a onClick={goBack} >Return</a>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);

