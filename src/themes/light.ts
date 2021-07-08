import {Theme} from '../models/Theme';

const dark: Theme = {
  name: 'light',
  navbar: {
    background: '#02E095',
    foreground: 'white',
  },
  sidebar: {
    background: 'white',
    foreground: '#0D1929',
  },
  canvas: {
    background: '#0D1929',
  },
  nodeActive: {
    background: '#02E095',
    foreground: 'white',
  },
  nodeInactive: {
    background: 'transparent',
    foreground: 'white',
  },
  edge: {
    background: 'white',
  },
  slider: {
    background: '#02E095',
    foreground: '#0D1929',
  }
};

export default dark;
