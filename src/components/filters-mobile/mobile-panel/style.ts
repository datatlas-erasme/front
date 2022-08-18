import styled from 'styled-components';

export const DomainFilter = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

export const ParentFilter = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 30px;
`;
