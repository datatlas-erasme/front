import styled from 'styled-components';
import { device } from '../../styles';
import px2vw from '../../utils/px2vw';

export const Panel = styled.div`
  display: none;
  flex-flow: column nowrap;
  padding-top: ${px2vw(40)};

  @media ${device.lg} {
    display: flex;
    position: ${({ theme }) => theme.Panel.position};
    right: ${({ theme }) => theme.Panel.right};
    width: 45vw;
    height: 100vh;
    justify-content: ${({ theme }) => theme.Panel.justifyContent};
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
  }
  @media ${device.xl} {
    width: 35vw;
  }
`;
