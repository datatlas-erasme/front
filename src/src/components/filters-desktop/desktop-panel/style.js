import styled from "styled-components";
import { datalimentaire, Base } from "../../../styles";
import { device } from "../../../styles/breakpoints";

export const BlockFilters = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 80%;
    height: 60vh;
    margin: 60px auto;
    padding: 40px 0;


    background-color: ${datalimentaire.colors.background};
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 10px;
`

export const DomainFilter = styled.ul`
    width: 100%;
    padding: 0px 30px;
    // overflow: overlay;

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

    font-size: ${Base.fontSizes.xstext};
    align-text: center;
    background-color: ${datalimentaire.colors.darkgray};
    color: ${datalimentaire.colors.secondary};
    padding: 10px 10px;
    border-radius: 30px;

    @media ${device.sm}{
        display: none;
    }
`