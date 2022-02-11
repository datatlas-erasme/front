import styled from 'styled-components';
import { datalimentaire } from '../../../../utils/styles/themes';
import px2vw from '../../../../utils/styles/px2vw';

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
        width: 50px;
        heigt: auto;
    }

    p{
        display: block;
        width: 150px;
        text-align: left;
        padding-left: 10px;
    }

`