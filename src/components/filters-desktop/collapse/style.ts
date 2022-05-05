import styled from 'styled-components';

export const ButtonCollapse = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  margin: 0;
  padding: 15px 10px 15px 10px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.xltext};
  height: auto;
  text-align: left;
`;

export const ButtonLayer = styled.div`
  display: flex;
  border-radius: 5px;
  margin-bottom: 0;
  font-size: 15px;
  width: max-content;
`;
