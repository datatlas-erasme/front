import { createGlobalStyle } from 'styled-components';
import { device } from './breakpoints';

export const GlobalStyle = createGlobalStyle`
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

  #filter-parent-0,  #filter-parent-2, #filter-parent-6, #filter-parent-7, #filter-parent-8, #filter-parent-9 {
    display: none;
  }


  @media ${device.lg} {
    #filter-parent-0,  #filter-parent-2, #filter-parent-5, #filter-parent-6, #filter-parent-7, #filter-parent-8, #filter-parent-9 {
      display: none;
    }
  }

  .map-control, .side-panel--container, .mapbox-attribution-container, .mapboxgl-ctrl {
  display: none !important;
  }
  
`;
