import { createGlobalStyle } from "styled-components";
import px2vw from "./px2vw";

export const Style = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

  * {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body{ 
    margin:0;
  }

  li {
    list-style-type: none; 
  }

  a {
    text-decoration: none;
  }

  #filter-parent-0,  #filter-parent-1, #filter-parent-5, #filter-parent-6, #filter-parent-7, #filter-parent-8, #filter-parent-9 {
    display: none;
  }
  
`;

export const datalimentaire = {

  colors : {
      primary: '#343f56',
      secondary: '#fff',
      darkgray: '#71717E',
      gray: '#c4c4c4',
      midgray: '#e8e8e8',
      lightgray: '#fcafafa',
      red: '#ff4848',
      blue: '#aad7ff'
  },

  fontSizes: {
    xstext : '14px', 
    paragraphe: '16px', 
    xltext : '18px', 
    xstitle : '22px', 
    mtitle : '28px', 
    xltitle: '36px'
  },

  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],

  lineHeights: {
		normal: 1,
		title: 1.25,
		paragraph: 1.5
	},
  letterSpacings: {
		normal: 'normal'
  },
  
  space: [
      // margin and padding
      0,
      4,
      8,
      16,
      32,
      64,
      128,
      256,
    ],
  
  radii: ['0px', '2px', '4px', '8px', '16px', '20px', '40px']

}

export const Colors = {
  text: datalimentaire.colors.primary,
  background: datalimentaire.colors.white,
  backgroundpanel: datalimentaire.colors.lightgray
}