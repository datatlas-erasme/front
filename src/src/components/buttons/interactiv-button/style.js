import styled from 'styled-components';
import { datalimentaire } from '../../../styles';
import GouttesSvg from '../../../assets/svg/gouttes.svg';
import { device } from '../../../styles/breakpoints';

export const WarpperAddPoint = styled.div`
    display: flex;
    align-items: 
    width: 80%;
    margin: 70vh auto 0 auto;
    z-index: 1;

    @media ${device.lg} {
        flex-direction: column;
        align-items: center;
        margin-top: 0;
    }
`

export const AddPoint = styled.button`
    display: flex;
    align-items: center;
    border: none;

    border-radius: 40px;
    background-color: ${datalimentaire.colors.secondary};
    color: ${datalimentaire.colors.primary};
    font-size: ${datalimentaire.fontSizes.paragraphe};
    font-weight: ${datalimentaire.fontWeights[0]};

    filter: drop-shadow(0px 0px 11.1501px rgba(0, 0, 0, 0.25));

    span{
        width: 20%;
    }

    p{
        padding: 10px;
    }

    @media ${device.lg} {
        width: 80%;
        margin: auto;

        background-color: ${datalimentaire.colors.secondary};
        color: ${datalimentaire.colors.red};
        font-size: ${datalimentaire.fontSizes.xltext};
        font-weight: ${datalimentaire.fontWeights[5]};
        line-height: ${datalimentaire.lineHeights[1]};

        span{
            width: 15%;
        }

        &:before{
            content: ${GouttesSvg};
            position: absolute;
            width: 20px;
            height: 20px;
            backrgound: black;
        }
    }

`

