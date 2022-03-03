import styled from 'styled-components';
import { datalimentaire } from '../../styles';

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