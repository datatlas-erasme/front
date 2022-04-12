import styled from "styled-components";
import { industries } from "../../../styles";
import { datalimentaire } from "../../../styles";

const theme = process.env.REACT_APP_THEME === 'industries' ? industries : datalimentaire;

export const ButtonCollapse = styled.button`
    background-color: ${theme.ButtonCollapse.backgroundColor};
    color: black;
    border: none;
    border-radius:  ${theme.ButtonCollapse.borderRadius};
    margin: 0;
    padding: 15px 10px 15px 10px;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
    font-weight: 500;
    font-size: ${theme.fontSizes.xltext};
    height: auto;
    text-align: left;

`