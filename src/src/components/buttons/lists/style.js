import styled from 'styled-components';
import { datalimentaire } from '../../../utils/styles';

export const ListSelect = styled.ul `
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 10px;
    padding-left: 0px;
`

export const ListIconButton = styled.ul `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5px;
    row-gap: 5px;
    padding-left: 0px;
`

export const ListCheckbox = styled.div `
    
    width: 80%;
    font-size: ${datalimentaire.fontSizes.xstext};

    ul{
        padding-left: 0;
    }

    input[type="checkbox"] {
        width: 17px;
        height: 17px;
        border: 2px solid #828282;
        margin-right: 5px;
    }

    li{
        padding-bottom: 10px;
    }
`

export const LabelCheckbox = styled.label`
    display: block;
    padding-bottom: 20px;
    margin-bottom : 10px;
    border-bottom: 1px solid ${datalimentaire.colors.midgray};

`