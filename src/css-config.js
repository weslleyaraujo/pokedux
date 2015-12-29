import { Styles } from 'material-ui';

import addNamespace from './helpers/add-namespace';

// Z-index
const index = {
  Status: 50,
  PokeBallLine: 40
};

// Colors
const colors = {
  red500: Styles.Colors.red500,
  white: '#FFF'
}

export default {
  ...addNamespace(index, 'z-index'),
  ...addNamespace(colors, 'colors')
}
