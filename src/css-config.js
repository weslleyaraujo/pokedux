import { Styles } from 'material-ui';

import addNamespace from './helpers/add-namespace';

// Z-index
const index = {
  Welcome: 60,
  PokeBallLine: 50,
  Status: 40,
};

// Colors
const colors = {
  red500: Styles.Colors.red500,
  blueA400: Styles.Colors.blueA400,
  white: '#FFF',
  lime50: Styles.Colors.lime50,
  lime100: Styles.Colors.lime100,
}

const fontFamily = {
  default: Styles.LightRawTheme.fontFamily,
};

export default {
  ...addNamespace(index, 'z-index'),
  ...addNamespace(colors, 'colors'),
  ...addNamespace(fontFamily, 'font-family'),
}
