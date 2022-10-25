import { DefaultTheme } from 'styled-components';

export const Base: DefaultTheme = {
  name: 'Base',

  fontSizes: {
    xstext: '12px',
    paragraphe: '16px',
    xltext: '18px',
    xstitle: '22px',
    mtitle: '28px',
    xltitle: '36px',
  },

  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],

  colors: {
    primary: '#343f56',
    secondary: '#fff',
    darkgray: '#71717E',
    gray: '#c4c4c4',
    background: '#FCFAFA',
    red: '#ff4848',
    blue: '#aad7ff',
  },

  lineHeights: {
    normal: 1,
    title: 1.25,
    paragraph: 1.5,
  },

  letterSpacings: {
    normal: 'normal',
  },

  radii: ['0px', '2px', '4px', '8px', '16px', '20px', '40px'],

  Panel: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 'auto',
    backgroundColor: '#ffffff00',
    justifyContent: 'flex-start',
    width: '45vw',
  },

  ButtonCollapse: {
    backgroundColor: 'red',
    borderRadius: '10px',
  },
};

export const datalimentaire: DefaultTheme = {
  name: 'datalimentaire',
  colors: {
    primary: '#343f56',
    secondary: '#fff',
    darkgray: '#71717E',
    gray: '#c4c4c4',
    background: '#FCFAFA',
    red: '#ff4848',
    blue: '#aad7ff',
  },

  fontSizes: {
    xstext: '12px',
    paragraphe: '16px',
    xltext: '18px',
    xstitle: '22px',
    mtitle: '28px',
    xltitle: '36px',
  },

  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],

  lineHeights: {
    normal: 1,
    title: 1.25,
    paragraph: 1.5,
  },

  letterSpacings: {
    normal: 'normal',
  },

  radii: ['0px', '2px', '4px', '8px', '16px', '20px', '40px'],

  Panel: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 'auto',
    left: 0,
    backgroundColor: '#ffffff00',
    justifyContent: 'center',
    width: '45vw',
  },

  ButtonCollapse: {
    backgroundColor: 'red',
    borderRadius: '10px',
  },
};

export const industries: DefaultTheme = {
  name: 'industries',

  colors: {
    primary: '#0d4559',
    secondary: '#df7160',
    darkgray: '#71717E',
    gray: '#c4c4c4',
    background: 'none',
    red: '#ff4848',
    blue: '#aad7ff',
  },

  fontSizes: {
    xstext: '12px',
    paragraphe: '16px',
    xltext: '18px',
    xstitle: '22px',
    mtitle: '28px',
    xltitle: '36px',
  },

  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],

  lineHeights: {
    normal: 1,
    title: 1.25,
    paragraph: 1.5,
  },

  letterSpacings: {
    normal: 'normal',
  },

  radii: ['0px', '2px', '4px', '8px', '16px', '20px', '40px'],

  Panel: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: '2vw',
    left: 'auto',
    backgroundColor: 'none',
    justifyContent: 'flex-start',
    width: '25vw',
  },

  ButtonCollapse: {
    backgroundColor: 'red',
    borderRadius: '10px',
  },
};
