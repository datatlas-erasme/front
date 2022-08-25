import { createGlobalStyle } from 'styled-components';
import { device } from './breakpoints';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  * {
    font-family: 'Space Grotesk', 'Open Sans', sans-serif;
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
  
`;
