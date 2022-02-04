import styled, {keyframes} from 'styled-components';
import { datalimentaire } from '../../../utils/styles/themes'

export const ButtonType = styled.button`
    display: flex;
    align-items: center;
    width : 60%;
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
    };

    p{
        padding-left: 10px;
    }

`

console.log(keyframes);

export const Badge = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    background: ${datalimentaire.colors.white};
    border: 1px solid ${datalimentaire.colors.gray};
    box-sizing: border-box;
    border-radius: 40px;

    &:hover{
        background: ${ datalimentaire.colors.primary};
        color: ${datalimentaire.colors.secondary};
    }
    &:active{
        background: ${ datalimentaire.colors.primary};
    }

    p{
        padding-left: 5px;
    }
`
export const Ouverture = styled.div`
    display flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 90%;

    button{
        padding: 5px;
        font-size: 10px;
        border: none;
        animation: ${
            props => props.active ? `${activeButton} 0.5s linear` : "none"
        };
        background-color: ${datalimentaire.colors.lightgray};

        &:hover{
            background: ${datalimentaire.colors.primary};
            border-radius: 40px;
            color: ${datalimentaire.colors.secondary};
        }

        &.active{
            background: blue;
        }

    }
`

const activeButton = keyframes`
    0%   {
        background-color: transparent;
    }
    50%  {
        background-color: #fff;
    }
    100%  {
        background-color: transparent;
    }
`;