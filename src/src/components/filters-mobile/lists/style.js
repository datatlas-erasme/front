import styled from 'styled-components';
import { datalimentaire, Base } from '../../../styles';

export const ListSelect = styled.ul `
    display: grid;
    grid-template-columns: min-content min-content;
    column-gap: 5px;
    row-gap: 5px;
    padding: 10px 0px;
    width: 80%;
    margin: auto;
`

export const ListIconButton = styled.ul `
    display: flex;
    flex-wrap: wrap;
    padding: 0px 35px;
    max-height: 300px;
    overflow: scroll;
`

export const ListCheckbox = styled.div `
    
    width: 80%;
    font-size: ${Base.fontSizes.xstext};
    max-height: 300px;
    margin: auto;

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
export const ListDay = styled.ul `
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
`

export const ButtonWrapper = styled.li`
    width: auto;
    padding: 5px;
`