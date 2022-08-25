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

  position: fixed;
  right: 40px;
  bottom: 70px;

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
    position: static;
    display: flex;
    align-items: center;
    border: none;
    height: 40px;
    padding: 25px;
    width: 100%;
    margin: auto;

    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSizes.xltext};
    font-weight: ${({ theme }) => theme.fontWeights[5]};
    line-height: ${({ theme }) => theme.lineHeights.paragraph};

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
      display: block;
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
