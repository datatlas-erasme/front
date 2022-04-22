import styled from 'styled-components';
import { datalimentaire, Base } from '../../../styles';
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
    border: none;
    width: 250px;
    height: 40px;
    padding: 25px;

    border-radius: 40px;
    background-color: ${datalimentaire.colors.secondary};
    color: ${datalimentaire.colors.primary};
    font-size: ${Base.fontSizes.paragraphe};
    font-weight: ${Base.fontWeights[0]};

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);

    span{
        position: relative;
        left: -26px;
        
        svg{
            width: 60px;
            height: auto;
        }
    }

    @media ${device.lg} {
        width: 100%;
        margin: auto;

        background-color: ${datalimentaire.colors.secondary};
        color: ${datalimentaire.colors.red};
        font-size: ${Base.fontSizes.xltext};
        font-weight: ${Base.fontWeights[5]};
        line-height: ${Base.lineHeights[1]};
        box-shadow: none;

        cursor: pointer;

        span{
            position: relative;
            left: 0;
        
            svg{
                width: ${px2vw(60)};
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

