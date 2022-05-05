import styled from 'styled-components';

export const Badge = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;

  width: auto;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: #fcfafa;
  color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  border-radius: 40px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.secondary};
  }

  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    padding-left: 5px;
  }

  img {
    width: 25px;
    height: auto;
  }
`;
