import styled from 'styled-components';
import { datalimentaire, Base } from '../../../../styles/themes';
import { device } from "../../../../styles/breakpoints";

export const Ouverture = styled.div`
    display flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row wrap;
    width: 90%;
    margin: auto;
    @media ${device.lg} {
    margin: 15px;
    padding: 0 20px;
    }
    h3{
        font-size: ${Base.fontSizes.xltext};
        color: ${datalimentaire.colors.primary};
        margin: 5px;
    }
    button{
        width: 30px;
        height: 25px;
        font-size: ${Base.fontSizes.xstext};
        color: ${datalimentaire.colors.primary};
        border: none;
        background-color: #fff;
        cursor: pointer;
        margin-bottom: 40px;
        @media ${device.lg} {
            background-color: #fcfafa;
            margin-bottom: 0;
        }
        &:hover, &.active{
            background: ${datalimentaire.colors.primary};
            border-radius: 40px;
            color: ${datalimentaire.colors.secondary};
        }
    }`