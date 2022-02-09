import styled, {keyframes} from 'styled-components';
import { datalimentaire } from '../../../utils/styles/themes';
import px2vw from '../../../utils/styles/px2vw';

export const ButtonType = styled.button`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    background-color: #fcfafa;
    color: ${datalimentaire.colors.primary};
    border: none;
    cursor: pointer;

    font-weight: ${px2vw(400)};
    font-size: ${px2vw(datalimentaire.fontSizes.xstext)};

    div{
        width: 30%;
        heigt: auto;
    }

    p{
        display: block;
        width: 70%;
        text-align: left;
        padding-left: 10px;
    }

`

console.log(keyframes);

export const Badge = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;
    padding: 5px;
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
    width: 90%;

    h3{
        font-size: ${datalimentaire.fontSizes.xstitle};
        margin: 5px;
    }

    button{
        width: 30px;
        height: 25px;
        font-size: ${datalimentaire.fontSizes.xstext};
        border: none;
        animation: ${
            props => props.active ? `${activeButton} 0.5s linear` : "none"
        };
        background-color: #fcfafa;

        &:hover, &.active{
            background: ${datalimentaire.colors.primary};
            border-radius: 40px;
            color: ${datalimentaire.colors.secondary};
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