import styled from 'styled-components';
import { datalimentaire, Colors } from '../../../../styles/themes';
import px2vw from '../../../../utils/px2vw';

export const Badge = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;

    width: auto;
    padding: 5px;
    border: 1px solid ${datalimentaire.colors.gray};
    background-color: #fcfafa;
    color: ${datalimentaire.colors.primary};
    box-sizing: border-box;
    border-radius: 40px;

    &:hover{
        border-color: ${ datalimentaire.colors.primary};
        background: ${datalimentaire.colors.secondary};
    }

    &.active{
        background: ${ datalimentaire.colors.primary};
        color: ${datalimentaire.colors.secondary};
    }

    p{
        padding-left: 5px;
    }

    img{
        width: 25px;
        height: auto;
    }
`