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
    border: none;
    background-color: ${datalimentaire.colors.secondary};
    color: ${datalimentaire.colors.red};
    font-size: ${datalimentaire.fontSizes.xltext};
    font-weight: ${datalimentaire.fontWeights[5]};
    line-height: ${datalimentaire.lineHeights[1]};
`

