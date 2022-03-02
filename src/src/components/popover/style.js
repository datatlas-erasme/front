import styled from 'styled-components';
import { datalimentaire } from '../../styles';

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

        pointer: cursor;

        &:hover{
          opacity: 0.5;
        }
      }

      li {
        font-size: ${datalimentaire.fontSizes.paragraphe};    
        display: flex;
        margin: 20px 0;
      }
`

export const PopHover = styled.div`
      position: absolute;
      top: 100px;
      left: 65%;

      display: flex;
      flex-direction: column;
      background: white;
      width: 30%;
      height: auto;
      padding: 20px;

      border: 1px solid ${datalimentaire.colors.midgray};
      border-radius: ${datalimentaire.radii[5]};
      box-shadow: 0px 2px 18px -1px rgba(0, 0, 0, 0.25);
      color: ${datalimentaire.colors.primary};

      h3{
          color: ${datalimentaire.colors.gray};
      }

`