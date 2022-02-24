import styled, {keyframes} from 'styled-components';
import { datalimentaire } from '../../../../assets/styles/themes';

export const Ouverture = styled.div`
    display flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    margin: 15px 0;

    h3{
        font-size: ${datalimentaire.fontSizes.xltext};
        color: ${datalimentaire.colors.primary};
        margin: 5px;
    }

    button{
        width: 30px;
        height: 25px;
        font-size: ${datalimentaire.fontSizes.xstext};
        color: ${datalimentaire.colors.primary};
        border: none;
        background-color: #fcfafa;
        cursor: pointer;

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