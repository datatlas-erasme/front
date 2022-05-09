import styled from 'styled-components';
import { datalimentaire, Base } from '../../../../styles/themes';

export const Ouverture = styled.div`
    display flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row wrap;
    width: 90%;
    margin: 15px;
    padding: 0 20px;

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
        background-color: #fcfafa;
        cursor: pointer;

        &:hover, &.active{
            background: ${datalimentaire.colors.primary};
            border-radius: 40px;
            color: ${datalimentaire.colors.secondary};
        }

    }
`

// const activeButton = keyframes`
//     0%   {
//         background-color: transparent;
//     }
//     50%  {
//         background-color: #fff;
//     }
//     100%  {
//         background-color: transparent;
//     }
// `;