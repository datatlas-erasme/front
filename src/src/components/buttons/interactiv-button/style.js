import styled from 'styled-components';
import { datalimentaire } from '../../../assets/styles';
import GouttesSvg from '../../../assets/svg/gouttes.svg';

export const WarpperAddPoint = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const AddPoint = styled.button`
    display: flex;
    align-items: center;
    width: 80%;
    border: none;
    margin auto;
    background-color: ${datalimentaire.colors.secondary};
    color: ${datalimentaire.colors.red};
    font-size: ${datalimentaire.fontSizes.xltext};
    font-weight: ${datalimentaire.fontWeights[5]};
    line-height: ${datalimentaire.lineHeights[1]};

    span{
        width: 15%;
    }

    p{
        padding: 10px;
    }

    &:before{
        content: ${GouttesSvg};
        position: absolute;
        width: 20px;
        height: 20px;
        backrgound: black;
    }
`

