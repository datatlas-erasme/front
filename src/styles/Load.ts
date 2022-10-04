import styled, { keyframes } from 'styled-components';
import { Base } from './themes';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderAnimate = styled.div`
  padding: 10px;
  border: 6px solid ${Base.colors.red};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`;
