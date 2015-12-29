import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { AppBar, FontIcon, RaisedButton, Paper, Tabs, Tab, Styles } from 'material-ui';

console.log(Styles);

import Status from '../../components/Status';
import navigate from '../../helpers/navigate';
import styles from './index.css';
import pokeballSrc from './images/pokeball.png';

const pokeIcon = (
  <img src={pokeballSrc}
      width={30}
      height={30}
      style={{
        position: 'absolute',
        left: 10,
        top: 19,
      }}
    />
);

function mapStateToProps({ status }) {
  return {
    status,
  }
}

class App extends Component {

  render() {
    let { status, history } = this.props;
    return (
      <div style={Styles.Typography}>
        <header className={styles.header}>
          <AppBar 
            style={{
              paddingLeft: 60
            }}
            iconElementLeft={<a href="#" onClick={navigate.bind(null, history, '/')}>{pokeIcon}</a>}
            title={<span style={{ fontWeight: 300 }}>pokedux</span>}>

            <Tabs>
              <Tab route="/pokedex" label="FULL POKEDEX" />
              <Tab route="/example"label="SEARCH POKEMON" >eae </Tab>
            </Tabs>

          </AppBar>
        </header>

        <Paper style={{ padding: '20px', textAlign: 'center' }}>
          {this.props.children ||

            <RaisedButton label="Visit Pokedex" secondary={true} onClick={navigate.bind(null, history, 'pokedex')}/>
          }
        </Paper>


        <Status {...status} />

        <div>
          <small>Open source project hosted at Github - @weslleyaraujo</small>
        </div>
      </div>
    );
  }

}

App.propTypes = {
  status: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
