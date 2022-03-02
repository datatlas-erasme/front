import styled from "styled-components";
import { datalimentaire } from "../../../styles";
import { Colors } from "../../../styles";

export const ButtonCollapse = styled.button`
    background-color: #fcfafa;
    color: black;
    height: auto;
    margin: 0;
    padding: 10px 20px;
    border: 1px solid ${datalimentaire.colors.primary};
    box-sizing: border-box;
    border-radius: 40px;
    color: ${Colors.text};


    transition: all ease-in-out 0.2s;
    cursor: pointer;

    font-weight: 500;
    font-size: ${datalimentaire.fontSizes.xltext};
    text-align: left;

    // &:hover{
    //     border-color: ${ datalimentaire.colors.primary};
    //     background: ${datalimentaire.colors.secondary};
    // }

    &.active{
        background: ${ datalimentaire.colors.primary};
        color: ${datalimentaire.colors.secondary};
        z-index: 99;
    }

    h4{
        font-weight: ${datalimentaire.fontWeights[4]};
        font-size: ${datalimentaire.fontSizes.xstext};

    }

`

export const SubHeading = styled.h4`
    display: block;
    width: 80%;
    margin: 25px auto 0 auto;
    border-bottom: 1px solid ${datalimentaire.colors.midgray};
    border-radius: 35px 35px 0px 0px;

    font-size: ${datalimentaire.fontSizes.xstext};
`