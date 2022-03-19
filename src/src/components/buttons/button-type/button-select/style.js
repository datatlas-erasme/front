import styled from 'styled-components';
import { device } from '../../../../styles/breakpoints';
import { datalimentaire } from '../../../../styles/themes';
import px2vw from '../../../../utils/px2vw';

export const ButtonType = styled.button`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    background-color: ${datalimentaire.colors.secondary};
    color: ${datalimentaire.colors.primary};
    border: none;
    cursor: pointer;

    font-weight: ${px2vw(400)};
    font-size: ${px2vw(datalimentaire.fontSizes.xstext)};

    div{
        width: 60px;
        height: 60px;
        padding: 15px;
        border-radius: 50px;
        border: 1px solid ${datalimentaire.colors.gray};
        box-sizing: border-box;
        
        &:hover{
            background: ${datalimentaire.colors.secondary};
            border-color: ${datalimentaire.colors.primary}
        }

        &.active{
            background: ${datalimentaire.colors.primary};
        }
    }

    p{
        display: block;
        width: 150px;
        text-align: left;
        padding-left: 10px;
    }

    @media ${device.lg}{
        background-color: #fcfafa;
    }

`