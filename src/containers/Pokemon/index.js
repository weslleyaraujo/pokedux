import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';

import * as pokemonActions from '../../actions/pokemon';
import styles from './Pokemon.css';
import Title from '../../components/title';

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

  componentDidMount() {
    let { id } = this.props.params;
    let { actions } = this.props;
    actions.fetchPokemon({ id });
  }

  render() {
    let { name, image } = this.props.pokemon;
    let { id } = this.props.params;
    let { goBack } = this.props.history;

    return (
      <div className={styles.root}>
        <Title text={name} />
        <div>
          <div>
            <p>This legendary Chinese POKEMON is considered magnif icent. Many people are enchanted by its grand mane.</p>
          </div>
          <div>
            <img
              className={styles.image}
              src={image}
              alt={name} />
          </div>
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

