import styled from 'styled-components';
import { datalimentaire } from '../../../assets/styles';

export const ListSelect = styled.ul `
    display: flex;
    flex-wrap: wrap;
    padding-left: 0px;
    max-height: 300px;
    overflow: scroll;
`

export const ListIconButton = styled.ul `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5px;
    row-gap: 5px;
    padding-left: 0px;
    max-height: 300px;
    overflow: scroll;
`

export const ListCheckbox = styled.div `
    
    width: 80%;
    font-size: ${datalimentaire.fontSizes.xstext};
    max-height: 300px;
    overflow: scroll;

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

export const ButtonWrapper = styled.li`
    width: auto;
    padding: 5px;
`