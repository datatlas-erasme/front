import { createGlobalStyle } from "styled-components";
import { device } from "./breakpoints";

export const Style = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500&display=swap');

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

  #filter-parent-0,  #filter-parent-1, #filter-parent-, #filter-parent-6, #filter-parent-7, #filter-parent-8, #filter-parent-9 {
    display: none;
  }


  @media ${device.lg} {
    #filter-parent-0,  #filter-parent-1, #filter-parent-5, #filter-parent-6, #filter-parent-7, #filter-parent-8, #filter-parent-9 {
      display: none;
    }
  }
  
`;

export const Base = {
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

  radii: ['0px', '2px', '4px', '8px', '16px', '20px', '40px']
}

export const datalimentaire = {

  colors : {
      primary: '#343f56',
      secondary: '#fff',
      darkgray: '#71717E',
      gray: '#c4c4c4',
      background: '#FCFAFA',
      red: '#ff4848',
      blue: '#aad7ff'
  },

  // Panel: {
  //   top: 0,
  //   bottom: 0,
  //   right: 'auto',
  //   left: 0,
  //   backgroundColor: '#fff'
  // },

}

export const industries = {

  colors : {
      primary: '#0d4559',
      secondary: '#df7160',
      darkgray: '#71717E',
      gray: '#c4c4c4',
      background: '#fcafafa',
      red: '#ff4848',
      blue: '#aad7ff'
  },

  collapse: {

  },

  Panel: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 'auto',
    backgroundColor: '#ffffff00',
    justifyContent: 'flex-start',
  },

  ButtonCollapse: {
    backgroundColor: "red",
    borderRadius: "10px",
  }

}
