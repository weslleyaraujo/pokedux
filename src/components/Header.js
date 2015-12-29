import React from 'react';
import { AppBar, Tabs, Tab } from 'material-ui';

import Pokeball from './Pokeball';
import navigate from '../helpers/navigate';

const Header = ({
  history
}) => (
  <header>
    <AppBar 
      style={{
        paddingLeft: 60
      }}
      iconElementLeft={
        <a href="#" onClick={navigate(history, '/')}>
          <Pokeball
            style={{
              position: 'absolute',
              left: 10,
              top: 19
            }} />
        </a>
      }
      title={
        <span style={{ fontWeight: 300 }}>pokedux</span>
      }>

      <Tabs>
        <Tab route="/pokedex" label="FULL POKEDEX" />
        <Tab route="/example"label="SEARCH POKEMON" />
      </Tabs>

    </AppBar>
  </header>
);

export default Header;
