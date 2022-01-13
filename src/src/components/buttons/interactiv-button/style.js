import styled from 'styled-components';
import { datalimentaire } from '../../../utils/styles';

export const WarpperAddPoint = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const AddPoint = styled.button`
    display: flex;
    align-items: center;
    width: 80%;
    margin: 20px;
    padding: 20px;
    border: none;
    background-color: ${datalimentaire.colors.secondary};
    color: ${datalimentaire.colors.red};
    font-size: ${datalimentaire.fontSizes.xstitle};
    font-weight: ${datalimentaire.fontWeights[5]};
    line-height: ${datalimentaire.lineHeights[1]};
`

