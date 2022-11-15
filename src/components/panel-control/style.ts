import styled from 'styled-components';
import { device } from '../../styles';
import px2vw from '../../utils/px2vw';

export const Panel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-top: ${px2vw(40)};

  @media ${device.lg} {
    position: ${({ theme }) => theme.Panel.position};
    display: flex;
    flex-direction: column;
    justify-content: ${({ theme }) => theme.Panel.justifyContent};
    right: ${({ theme }) => theme.Panel.right};
    background-color: ${({ theme }) => theme.colors.secondary};
    top: 0;
    bottom: 0;
    width: 45vw;
    height: 100vh;
  }
  @media ${device.xl} {
    width: 35vw;
  }
`;
