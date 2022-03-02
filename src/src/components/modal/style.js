import styled from 'styled-components';
import { datalimentaire } from '../../styles';

export const ModalColRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    
    img{
      border-radius: 0 ${datalimentaire.radii[5]} 0 80px;
    };

    svg {
      position: absolute;
      height: 2em;
      color: white;
      right: 25px;
      top: 15px;
    }
`

export const ModalColLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 40px 0 20px 40px;
`
export const ModalHeading = styled.div`
    display: flex;
    div{
      padding: 10px 0 10px 10px;
      flex-direction: column;
    }
    h2{
      font-size: ${datalimentaire.fontSizes.xstitle};
      line-height: ${datalimentaire.lineHeights.title};
    }

`
export const LabelRow = styled.div`
    display: flex;
    img{
      border-radius: 0;

    }
`