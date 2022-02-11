import styled from 'styled-components';
import { datalimentaire } from '../utils/styles';

export const WrapperModal = styled.div`
      display: flex;
      position: fixed;
      top: 50px;
      width: 60vw;
      height: auto;
      left: 37%;
      background: white;
      color: ${datalimentaire.colors.primary};
      
      border-radius: ${datalimentaire.radii[5]};
      box-shadow: 0px 2px 18px -1px rgba(0, 0, 0, 0.25);

      p{
        font-size: ${datalimentaire.fontSizes.paragraphe};
        line-height: ${datalimentaire.lineHeights.normal};
        padding: 10px 0;
      }

      button{
        width: 200px;
        margin: 20px auto;
        background-color: ${datalimentaire.colors.red};
        border-radius: ${datalimentaire.radii[6]};
        border: none;
        padding: 10px;
        color: ${datalimentaire.colors.secondary};
      }

      li {
        font-size: ${datalimentaire.fontSizes.paragraphe};    
        display: flex;
        margin: 20px 0;
      }
`

export const PopHover = styled.div`
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 180px;
      width: 30%;
      height: auto;
      left: 65%;
      background: white;
      padding: 20px;

      border: 1px solid ${datalimentaire.colors.midgray};
      border-radius: ${datalimentaire.radii[5]};
      box-shadow: 0px 2px 18px -1px rgba(0, 0, 0, 0.25);
      color: ${datalimentaire.colors.primary};

      h3{
          color: ${datalimentaire.colors.gray};
      }

`

export const ModalColRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    img{
      border-radius: 0 ${datalimentaire.radii[5]} 0 80px;

    };
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