import React from 'react';
import { AppBar, AutoComplete, TextField } from 'material-ui';

import Pokeball from './Pokeball';
import navigate from 'helpers/navigate';

const Header = ({
  history,
  path,
  searchHint,
  onSearchSubmit,
}) => (
  <header>
    <AppBar
      style={{
        paddingLeft: 60
      }}
      iconElementLeft={
        <a href='#' onClick={navigate(history, path)}>
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

      <TextField
          style={{
            marginTop: 5,
          }}
          onChange={onSearchSubmit}
          onEnterKeyDown={onSearchSubmit}
          hintText={searchHint}/>
    </AppBar>
  </header>
);

export default Header;
