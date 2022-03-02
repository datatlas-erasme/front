import styled from "styled-components";
import { datalimentaire, Colors, panelBackground } from "../../../styles";
import { device } from '../../../styles/breakpoints'

export const Panel = styled.div`

        display: flex;
        justify-content: center;
        flex-direction: column; 
        position: absolute;
        background-color: ${datalimentaire.colors.secondary};
        top: 0;
        bottom: 0;
        width: 33vw;
        height: 100%;

`