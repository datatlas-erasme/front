import styled from "styled-components";
import { datalimentaire } from "../../../styles";

// export const BlockFilters = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

//     overflow: overlay;

//     width: 80%;
//     height: auto;
//     margin: 100px auto;
//     padding: 40px 0;

//     background-color: #fcfafa;
//     border: 1px solid #E8E8E8;
//     box-sizing: border-box;
//     border-radius: 10px;
// `

export const DomainFilter = styled.div`
    position: relative;
    top: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;

`

export const ParentFilter = styled.button`
    background-color: ${datalimentaire.colors.secondary};
    border: 1px solid ${datalimentaire.colors.gray};
    border-radius: 30px;

`