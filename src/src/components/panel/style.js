import styled from "styled-components";
import { datalimentaire, Colors, panelBackground } from "../../utils/styles";

console.log(datalimentaire.colors.background);
console.log(datalimentaire.colors.white);

export const Panel = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: ${datalimentaire.colors.secondary};
    top: 0;
    width: 33vw;
    height: 100vh;
`