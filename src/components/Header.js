import React, { PropTypes } from 'react';
import { AppBar, TextField } from 'material-ui';

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
        paddingLeft: 60,
      }}
      iconElementLeft={
        <a onClick={navigate(history, path)}>
          <Pokeball
            style={{
              position: 'absolute',
              left: 10,
              top: 19,
            }}
          />
        </a>
      }
      title={
        <span style={{ fontWeight: 300 }}>pokedux</span>
      }
    >
      <TextField
        style={{
          marginTop: 5,
        }}
        onChange={onSearchSubmit}
        onEnterKeyDown={onSearchSubmit}
        hintText={searchHint}
      />
    </AppBar>
  </header>
);

Header.propTypes = {
  history: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  searchHint: PropTypes.string.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default Header;
