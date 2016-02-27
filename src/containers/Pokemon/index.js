import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, ListItem, Divider } from 'material-ui';
import { FaHandGrabO, FaShield, FaBarChart, FaSmileO, FaArrowsV, FaHeart } from 'react-icons';

import * as pokemonActions from 'actions/pokemon';
import styles from './Pokemon.css';
import Title from 'components/Title';

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
    let {
      attack,
      catch_rate,
      defense,
      exp,
      happiness,
      height,
      hp,
      image,
      name,
      description,
    } = this.props.pokemon;

    let { id } = this.props.params;
    let { goBack } = this.props.history;

    return (
      <div>
        <div className={styles.topWrap}>
          <div className={styles.titleHolder}>
            <Title text={name} />
          </div>
          <div className={styles.listWrap}>
            <List>
              <ListItem
                disabled={true}
                primaryText={<span><FaHandGrabO /><strong> Attack:</strong> {attack}</span>}/>
              <ListItem
                disabled={true}
                primaryText={<span><FaShield /><strong> Defense:</strong> {defense}</span>}/>
              <ListItem
                disabled={true}
                primaryText={<span><FaBarChart /><strong> Catch Rate: </strong>{defense}</span>}/>
              <ListItem
                disabled={true}
                primaryText={<span><FaSmileO /><strong> Happiness: </strong>{happiness}</span>}/>
              <ListItem
                disabled={true}
                primaryText={<span><FaArrowsV /><strong> Height: </strong>{height}</span>}/>
              <ListItem
                disabled={true}
                primaryText={<span><FaHeart /><strong> HP: </strong>{hp}</span>}/>
            </List>
          </div>
          <img
            className={styles.image}
            src={image}
            alt={name} />
        </div>
        <div className={styles.content}>
          <div>
            <p>{description}</p>
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

