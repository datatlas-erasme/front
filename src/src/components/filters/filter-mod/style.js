import styled from "styled-components";
import { datalimentaire } from "../../../utils/styles";

export const BlockFilters = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    overflow: overlay;

    width: 80%;
    height: auto;
    margin: 100px auto;
    padding: 40px 0;


    background-color: #fcfafa;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 10px;
`

export const DomainFilter = styled.ul`
    width: 100%;
    padding: 0 30px;
    overflow: overlay;

`

export const ParentFilter = styled.li`
    flex-flow: row wrap;
    min-width: 50%;
    background-color: ${datalimentaire.colors.lightgray};
    border-bottom: 1px solid ${datalimentaire.colors.gray};

`
export const HeadingFilter = styled.h2`
    position: relative;
    top: -40px;
    width: auto;
    margin: 0;

    font-size: ${datalimentaire.fontSizes.xstext};
    align-text: center;
    background-color: ${datalimentaire.colors.darkgray};
    color: ${datalimentaire.colors.secondary};
    padding: 10px 10px;
    border-radius: 30px;
`