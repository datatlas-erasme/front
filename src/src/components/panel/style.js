import styled from "styled-components";
import { datalimentaire, Colors, panelBackground } from "../../utils/styles";
import { device } from '../../utils/styles/breakpoints'

console.log(datalimentaire.colors.background);
console.log(datalimentaire.colors.white);

export const Panel = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column; 
    position: absolute;
    width: 100vw;
    background-color: ${datalimentaire.colors.secondary};


    bottom: 0;


    @media ${device.lg} {
        top: 0;
        bottom: 0;
        width: 33vw;
        height: 100%;
}

`