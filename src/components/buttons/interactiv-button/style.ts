import styled from 'styled-components';
import { device } from '../../../styles';

export const WarpperAddPoint = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  z-index: 1;
  @media ${device.lg} {
    margin: 0 auto 0 auto;
  }
`;

export const AddPoint = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0);

  p {
    display: none;
  }

  span {
    svg {
      color: ${({ theme }) => theme.colors.red};
      background: ${({ theme }) => theme.colors.background};
      border-radius: 50%;
      width: 60px;
      height: 60px;
    }
  }

  @media ${device.lg} {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 25px;
    width: 100%;
    margin: auto;

    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSizes.xltext};
    font-weight: ${({ theme }) => theme.fontWeights[5]};
    line-height: ${({ theme }) => theme.lineHeights.paragraph};

    cursor: pointer;

    p {
      display: block;
      padding: 10px;
    }
  }
`;
