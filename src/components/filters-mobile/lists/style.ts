import styled from 'styled-components';

export const ListSelect = styled.ul`
  display: grid;
  grid-template-columns: min-content min-content;
  column-gap: 5px;
  row-gap: 5px;
  padding: 10px 0 20px 0;
  width: 80%;
  margin: auto;
`;

export const ListIconButton = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 35px 20px 35px;
  max-height: 300px;
`;

export const ListCheckbox = styled.div`
  width: 80%;
  font-size: ${({ theme }) => theme.fontSizes.xstext};
  max-height: 300px;
  margin: auto;

  input[type='checkbox'] {
    width: 17px;
    height: 17px;
    border: 2px solid #828282;
    margin-right: 5px;
  }

  li {
    padding-bottom: 10px;
  }
  padding-bottom: 40px;
`;

export const ListDay = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ButtonWrapper = styled.li`
  width: auto;
  padding: 5px;
`;
