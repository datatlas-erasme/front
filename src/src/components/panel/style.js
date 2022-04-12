import styled from "styled-components";
import { datalimentaire } from "../../styles";
import { industries } from "../../styles";
import { device } from '../../styles/breakpoints'
import px2vw from "../../utils/px2vw";

// get theme from env var or default to datalimentaire
const theme = process.env.REACT_APP_THEME === 'industries' ? industries : datalimentaire;

export const Panel = styled.div`
        display: flex;
        flex-flow: column nowrap;
        padding-top: ${px2vw(40)};

        @media ${device.lg} {
                justify-content: ${theme.Panel.justifyContent};
                flex-direction: column; 
                position: absolute;
                background-color: ${theme.Panel.backgroundColor};
                top: ${theme.Panel.top};
                bottom: ${theme.Panel.bottom};
                left: ${theme.Panel.left};
                right: ${theme.Panel.right};
                width: 33vw;
                height: 100%;
        }

`