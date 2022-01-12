import styled from 'styled-components';
import { datalimentaire } from '../../../utils/styles/themes'

export const ButtonType = styled.button`
    display: flex;
    align-items: center;
    width : 13vw;
    background-color: #fcfafa;
    color: ${datalimentaire.colors.primary};
    border: none;
    margin: 0;
    padding: 15px 0 15px 10px;
    cursor: pointer;

    font-weight: 400;
    font-size: ${datalimentaire.fontSizes[0]};
    text-align: left;

    svg{
        width: 80%;
    };

    p{
        padding-left: 10px;
    }

`
export const Badge = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    background: ${props => props.datalimentaire.colors};
    border: 1px solid ${datalimentaire.colors.gray};
    box-sizing: border-box;
    border-radius: 40px;

    &:hover{
        background: ${datalimentaire.colors.primary};
        color: ${datalimentaire.colors.secondary};

    }

    p{
        padding-left: 5px;
    }
`