import { Styles } from 'material-ui';

import addNamespace from './helpers/add-namespace';

// Z-index
const index = {
  Welcome: 60,
  PokeBallLine: 50,
  Status: 40,
};

// Colors
const colors = [
  'blueA400',
  'lime100',
  'lime50',
  'pink500',
  'red500',
  'white',
  'yellow500',
  'yellow600',
  'grey50',
  'grey200',
].reduce((c, n) => {
  c[n] = Styles.Colors[n];
  return c;
}, {
  white: '#FFF',
});

const fontFamily = {
  default: Styles.LightRawTheme.fontFamily,
};

export default {
  ...addNamespace(index, 'z-index'),
  ...addNamespace(colors, 'colors'),
  ...addNamespace(fontFamily, 'font-family'),
}
