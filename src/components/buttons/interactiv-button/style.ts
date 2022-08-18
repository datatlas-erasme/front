import styled from 'styled-components';
import GouttesSvg from '../../../assets/svg/gouttes.svg';
import { device } from '../../../styles/breakpoints';
import px2vw from '../../../utils/px2vw';

export const WarpperAddPoint = styled.div`
    display: flex;
    align-items: 
    width: 80%;
    margin: 600px auto 0 auto;
    z-index: 1;

    @media ${device.lg} {
        flex-direction: column;
        align-items: center;
        margin-top: 0;
    }
`;

export const AddPoint = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);

  p {
    display: none;
  }

  span {
    position: relative;
    left: 140px;

    svg {
      width: 60px;
      height: auto;
    }
  }

  @media ${device.lg} {
    display: flex;
    align-items: center;
    border: none;
    height: 40px;
    padding: 25px;
    width: 100%;
    margin: auto;

    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSizes.xltext};
    font-weight: ${({ theme }) => theme.fontWeights[5]};
    line-height: ${({ theme }) => theme.lineHeights.paragraph};
    box-shadow: none;

    cursor: pointer;

    span {
      position: relative;
      left: 0;

      svg {
        width: ${px2vw(60)};
        height: auto;
      }
    }

    p {
      padding: 10px;
    }

    &:before {
      content: ${GouttesSvg};
      position: absolute;
      width: 20px;
      height: 20px;
      backrgound: black;
    }
  }
`;
