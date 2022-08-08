import styled from 'styled-components';

export const Default = styled.button`
  background-color: black;
  border-radius: 5px;
  padding: 15px;
  width: max-content;
  margin: 15px;
  color: white;
  transition: all 0.3s ease-in-out;
  border: none;
  &:hover {
    background-color: grey;
    transition: all 0.3s ease-in-out;
  }
`;
export const Parent = styled(Default)`
  background-color: red;
`;
