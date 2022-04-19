import styled from 'styled-components';
import { datalimentaire, Base } from '../../styles';

export const PopHover = styled.div`
`

export const ToolTip = styled.div`
    background: white;
    width: auto;
    height: auto;
    padding: 20px;
    z-index: 99;

    border: 1px solid ${datalimentaire.colors.midgray};
    border-radius: ${Base.radii[5]};
    box-shadow: 0px 2px 18px -1px rgba(0, 0, 0, 0.25);
    color: ${datalimentaire.colors.primary};

    h3{
        color: ${datalimentaire.colors.gray};
    }
`