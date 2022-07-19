import { css } from 'styled-components';

// These are useful for test or when theme doesn't define them
const breakPoints = {
  palm: 588,
  desk: 768,
};

export const media = {
  palm: (...args) => css`
    @media (max-width: ${(props) => (props.theme.breakPoints || breakPoints).palm}px) {
      ${css(...args)};
    }
  `,

  portable: (...args) => css`
    @media (max-width: ${(props) => (props.theme.breakPoints || breakPoints).desk}px) {
      ${css(...args)};
    }
  `,

  desk: (...args) => css`
    @media (min-width: ${(props) => (props.theme.breakPoints || breakPoints).desk + 1}px) {
      ${css(...args)};
    }
  `,
};
