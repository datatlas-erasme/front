import styled from 'styled-components';
import { device } from '../../styles/breakpoints';
import px2vw from '../../utils/px2vw';

// get theme from env var or default to datalimentaire
// const theme = industries ;

// const theme = instance.conf?.theme?.name === 'Industries' ? industries : datalimentaire;

export const Panel = styled.div`
  display: none;
  display: flex;
  flex-flow: column nowrap;
  padding-top: ${px2vw(40)};

  @media ${device.lg} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    //position: relative;
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
