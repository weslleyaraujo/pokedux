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
  'grey200',
  'grey50',
  'lime100',
  'lime50',
  'pink500',
  'red500',
  'redA400',
  'redA700',
  'white',
  'yellow500',
  'yellow600',
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
