import React from 'react';
import { AppBar, AutoComplete } from 'material-ui';

import Pokeball from './Pokeball';
import navigate from '../helpers/navigate';

const Header = ({
  history,
  path,
  autoCompleteHint,
  autoCompleteSource,
  onAutoCompleteRequest,
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

      <AutoComplete
        onNewRequest={onAutoCompleteRequest}
        hintText={autoCompleteHint}
        dataSource={autoCompleteSource}
        style={{
          marginTop: 5,
        }}
      />
    </AppBar>
  </header>
);

export default Header;
