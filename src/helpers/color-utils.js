import { compose, random } from 'lodash';
import { Styles } from 'material-ui';

const { Colors } = Styles;

const hexColors = Object.keys(Colors).reduce((c, n) => {
  c[n] = isRGB(Colors[n]) ? rgbToHex(extractRGB(Colors[n])) : Colors[n];
  return c;
}, {});

export function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

export function isRGB(color) {
  return /rgb/.test(color);
}

export function extractRGB(color) {
  return color
    .replace(/.*\(/, '')
    .replace(/\).*/, '')
    .replace(/ /g, '')
    .split(',')
    .map((x) => parseInt(x));
}

export function rgbToHex([r, g, b]) {
  return `#${componentToHex(r) + componentToHex(g) + componentToHex(b)}`;
}

export function hexToRGB(hex = '') {
  let bigint = parseInt(hex.replace(/#/, ''), 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return [r, g, b];
}

export function invertColor(color) {
  let nThreshold = 105;
  let [r, g, b] = isRGB(color) ? extractRGB(color) : hexToRGB(color);
  let bgDelta = (r * 0.299) + (g * 0.587) + (b * 0.114);
  return ((255 - bgDelta) < nThreshold) ? '#000000' : '#ffffff';   
}

export function getRandomColor() {
  let keys = Object.keys(hexColors);
  return hexColors[keys[random(0, keys.length)]];
}
