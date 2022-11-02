import styled from 'styled-components';
import { device } from '../../styles';
import px2vw from '../../utils/px2vw';

export const Panel = styled.div`
  display: none;
  display: flex;
  flex-flow: column nowrap;
  padding-top: ${px2vw(40)};

  @media ${device.lg} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.secondary};
    top: 0;
    bottom: 0;
    width: 45vw;
    height: 100vh;
    padding-top: 0px;
  }
  @media ${device.xl} {
    width: 35vw;
  }
`;
