import styled from "styled-components";
import { datalimentaire } from "../../../utils/styles";

export const BlockFilters = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow: scroll;

    width: 80%;
    height: auto;
    margin: 100px auto;
    padding: 20px 0;


    background-color: #fcfafa;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 10px;

    ul {
        align-self: flex-start;
    }
`

export const DomainFilter = styled.ul`
    width: 100%;
    padding-left: 0;

`

export const ParentFilter = styled.li`
    padding-left: 30px;
    background-color: ${datalimentaire.colors.lightgray};
    border-bottom: 1px solid ${datalimentaire.colors.gray};

`
export const HeadingFilter = styled.h2`
    position: relative;
    top: -30px;
    font-size: ${datalimentaire.fontSizes.xstext};
    align-text: center;
    background-color: ${datalimentaire.colors.darkgray};
    color: ${datalimentaire.colors.secondary};
    padding: 10px 10px;
    border-radius: 30px;
`