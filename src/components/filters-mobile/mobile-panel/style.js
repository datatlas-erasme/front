import styled from 'styled-components';
import { datalimentaire } from '../../../styles';

export const DomainFilter = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

export const ParentFilter = styled.button`
  background-color: ${datalimentaire.colors.secondary};
  border: 1px solid ${datalimentaire.colors.gray};
  border-radius: 30px;
`;
