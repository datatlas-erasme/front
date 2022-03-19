import styled from 'styled-components';
import { datalimentaire } from '../../../styles';
import GouttesSvg from '../../../assets/svg/gouttes.svg';
import { device } from '../../../styles/breakpoints';
import px2vw from '../../../utils/px2vw';

export const WarpperAddPoint = styled.div`
    display: flex;
    align-items: 
    width: 80%;
    margin: 65vh auto 0 auto;
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
    justify-content: end;
    border: none;
    width: 300px;
    height: 40px;
    padding: 20px;

    border-radius: 40px;
    background-color: ${datalimentaire.colors.secondary};
    color: ${datalimentaire.colors.primary};
    font-size: ${datalimentaire.fontSizes.paragraphe};
    font-weight: ${datalimentaire.fontWeights[0]};

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);

    span{
        position: absolute;
        left: 230px;
        
        svg{
            width: 60px;
            height: auto;
        }
    }

    @media ${device.lg} {
        width: 80%;
        margin: auto;

        background-color: ${datalimentaire.colors.secondary};
        color: ${datalimentaire.colors.red};
        font-size: ${datalimentaire.fontSizes.xltext};
        font-weight: ${datalimentaire.fontWeights[5]};
        line-height: ${datalimentaire.lineHeights[1]};
        box-shadow: none;

        cursor: pointer;

        span{
            position: relative;
            left: 0;
        
            svg{
                width: ${px2vw(80)};
                height: auto;
            }
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
    }

`

