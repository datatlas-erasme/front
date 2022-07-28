import styled from 'styled-components';
import { datalimentaire, Base } from '../../../styles';

export const ButtonCollapse = styled.button`
  background-color: ${datalimentaire.colors.background};
  color: ${datalimentaire.colors.primary};
  border: none;
  margin: 0;
  padding: 15px 10px 15px 10px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  font-weight: 500;
  font-size: ${Base.fontSizes.xltext};
  height: auto;
  text-align: left;
`;
