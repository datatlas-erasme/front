import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    fontSizes: {
      xstext: string;
      paragraphe: string;
      xltext: string;
      xstitle: string;
      mtitle: string;
      xltitle: string;
    };

    fontWeights: number[];

    lineHeights: {
      normal: number;
      title: number;
      paragraph: number;
    };

    colors: {
      primary: string;
      secondary: string;
      darkgray: string;
      gray: string;
      background: string;
      red: string;
      blue: string;
    };

    letterSpacings: {
      normal: string;
    };

    radii: string[];

    Panel: {
      position: string;
      top: number;
      bottom: number;
      right: number | string;
      left: number | string;
      backgroundColor: string;
      justifyContent: string;
      width: string;
    };

    ButtonCollapse: {
      backgroundColor: string;
      borderRadius: string;
    };
  }
}
